import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-3">Dragon News Home</h2>
                   {
                    news?.map(aNews => <NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
                   }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;