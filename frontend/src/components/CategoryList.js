import React from "react";
import {Link} from "react-router-dom";

const CategoryList = ({ categories = [] }) => {
  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category.name}>
            <Link to={`/categories/${category.path}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
