import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {singIn} =useContext(AuthContext);
    const location =useLocation();
    const navigate =useNavigate();
    console.log("location in the login page", location)
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email =form.get("email");
    const password =form.get("password")
    console.log(email, password);
    singIn(email,password)
    .then(result=>{
      console.log(result.user)

      // navigate after login
      navigate(location?.state ? location?.state : "/");
    })
    .catch(error=> console.error(error))
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl text-center my-6">Please login</h2>

        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center my-4">
          Do not have an account please{" "}
          <Link to="/register" className="text-blue-600 underline font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
