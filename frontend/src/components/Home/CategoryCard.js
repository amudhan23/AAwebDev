import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, img }) => {
  return (
    <Link
      className="categoryCard"
      to={`/${category}`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgb(128 128 128 / 76%), rgb(128 128 128 / 27%)),url(${img})`,
      }}
    >
      <div className="Category-card-div">
        <h3>{category}</h3>
        <p>view all</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
