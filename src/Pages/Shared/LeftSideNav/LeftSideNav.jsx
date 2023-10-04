import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">All Category</h2>
      <button className="btn btn-active px-10 py-4">National News</button>
      {categories?.map((category) => (
        <Link 
        to={`/category/${category.id}`}
        className="block ml-5 text-xl text-[#9F9F9F] font-medium" 
        key={categories.id}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
