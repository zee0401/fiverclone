import React from "react";
import "./catcard.scss";
import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catcard">
        <div className="container">
          <img src={item.img} alt="" />
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
