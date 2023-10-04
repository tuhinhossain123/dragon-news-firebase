import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl">news coming son</h2>
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;