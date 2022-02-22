import React from "react";

function Card({ svgIcon, title, text }) {
  return (
    <div className="columns">
      <div className="card" style={{ width: 300 }}>
        <img src={svgIcon} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
