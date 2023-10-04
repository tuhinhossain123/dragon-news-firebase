import { BiLogoGoogle, BiLogoGithub, BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-3">
        <h2 className="text-xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <p className="text-xl">
            <BiLogoGoogle></BiLogoGoogle>
          </p>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <p className="text-2xl">
            <BiLogoGithub></BiLogoGithub>
          </p>
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-4">
        <h2 className="text-xl mb-4 font-semibold">Find Us On</h2>
      <a className="p-4 flex items-center text-xl border-2 rounded-t-lg" href="">
      <BiLogoFacebookCircle className=" mr-3"></BiLogoFacebookCircle>
      Facebook
      </a>
      <a className="p-4 flex items-center text-xl border-x-2" href="">
      <BiLogoTwitter className=" mr-3"></BiLogoTwitter>
      Twitter
      </a>
      <a className="p-4 flex items-center text-xl border-2 rounded-b-lg" href="">
      <BiLogoInstagram className=" mr-3"></BiLogoInstagram>
      Instagram
      </a>

      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 mb-3 bg-[#F3F3F3]">
        <h2 className="text-xl font-semibold">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
