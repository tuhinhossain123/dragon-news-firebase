import Marquee from "react-fast-marquee";

const BrakingNews = () => {
  return (
    <div className="flex items-center  justify-center bg-[#F3F3F3] py-3 px-4 mt-7 rounded">
      <button className="btn btn-secondary">Braking News</button>
      <Marquee pauseOnHover={true}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BrakingNews;
