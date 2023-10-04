import { Link } from "react-router-dom";


const NewsCard = ({aNews}) => {
    const {title, _id, image_url, details}=aNews;
    return (
        <div className="card card-compact bg-base-100 mb-8 border shadow-xl">
        <figure><img className="w-full h-80" src={image_url} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
         {
            details.length >200 ? <p>{details.slice(0,200)} 
            <Link to={`/news/${_id}`} className="text-blue-600 ml-5">Read More...</Link></p>
            :<p>{details}</p>
         }
          
        </div>
      </div>
    );
};

export default NewsCard;