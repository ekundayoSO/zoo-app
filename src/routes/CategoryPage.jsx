import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card.jsx";

const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {
  const { category } = useParams();
  const categoryItems = rest[category];

  return (
    <div className="container">
      <div className="mb-4">
      <input type="search" name="search"/>
      <input type="submit" value="Search"/>
      </div>
      <h2>{category}</h2>
      <div className="row">
        {categoryItems.map((item) => (
          <div key={item.name} className="col-4 mb-2">
            <Card
              name={item.name}
              likes={item.likes}
              removeCard={() => removeCard(item.name, category)}
              removeLikes={() => removeLikes(item.name, category, "remove")}
              addLikes={() => addLikes(item.name, category, "add")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
