import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card.jsx";

const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest  }) => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const categoryItems = rest[category].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the search input field after submission
    setSearchTerm("");
  };

  return (
    <div className="container">
      <div className="mb-4">
        <form form onSubmit={handleSubmit}>
          <input
            className="d-inline-flex focus-ring py-1 px-1 border rounded-2"
            type="search"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            className="d-inline-flex focus-ring py-1 px-1 border rounded-2"
            type="submit"
            value="Search"
          />
        </form>
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

