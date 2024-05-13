import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {
  return (
    <div className="card position-relative" style={{maxHeight: 500}}>
      <img
        className="card-img-top"
        src={`https://source.unsplash.com/200x200/?${name}`}
        alt={name}
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
            <span className={`material-symbols-outlined broken-heart d-inline ${likes >= 0 ? "d-none" : ""}`}>
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
