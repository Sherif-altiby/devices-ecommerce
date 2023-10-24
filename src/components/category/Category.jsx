import "./Category.css";
import CategoryItem from "./CategoryItem";
import { CategoryData } from "../../data/CategoryData";
import { Link } from "react-router-dom";

const Category = () => {
  return (
  <div className="container"  >
    <div className="category">
        <h2>Category</h2>
        <div className="category_container">
          {CategoryData.map((i) => (
            <Link to={i.path} key={i.id}   >  <CategoryItem item={i} /> </Link>
          ))}
        </div>
  </div>
    </div>
  );
};

export default Category;
