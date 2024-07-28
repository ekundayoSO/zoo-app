import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6";

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
      <div className="mb-4 d-flex justify-content-between">
        <h2>{category}</h2>
        <form form onSubmit={handleSubmit}>
          <div className="input-group position-relative">
            <input
              className="form-control d-inline-flex py-1 px-1 border rounded-2 px-4"
              type="text"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="search-icon" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <span className="position-absolute top-50 end-0 translate-middle" id="search-icon">
                <FaMagnifyingGlass color="lightgray" />
              </span>
            </div>
          </div>
        </form>
      </div>
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

