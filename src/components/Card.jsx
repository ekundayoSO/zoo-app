import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Card.css";

const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {
  const [imageUrl, setImageUrl] = useState("");
  const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${apiKey}&q=${name}`
        );
        const url = response.data.hits[0]?.webformatURL || "";
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image from Pixabay API", error);
      }
    };

    fetchImage();
  }, [name, apiKey]);

  return (
    <div className="card position-relative card-container">
      <img
        className="card-img-top"
        src={imageUrl}
        alt={name}
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn" onClick={removeLikes}>
            <span className="material-symbols-outlined minus-btn">
              heart_minus
            </span>
          </button>
          <button className="btn">
            <p className="d-inline">{likes}</p>
            <span
              className={`material-symbols-outlined broken-heart d-inline ${
                likes >= 0 ? "d-none" : ""
              }`}
            >
              heart_broken
            </span>
          </button>
          <button className="btn" onClick={addLikes}>
            <span className="material-symbols-outlined plus-btn">
              heart_plus
            </span>
          </button>
          <button
            className="btn position-absolute top-0 end-0"
            onClick={removeCard}
          >
            <span className="material-symbols-outlined cancel-btn">cancel</span>
          </button>
        </div>
        <Link to={name} className="btn btn-primary btn-sm mt-1">
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;
