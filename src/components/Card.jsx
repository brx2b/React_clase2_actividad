import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ icon, title, description, color }) {
  return (
    <div className={`card text-white bg-${color} mb-3`} style={{ maxWidth: "18rem" }}>
      <div className="card-body text-center">
        <div className="mb-3" style={{ fontSize: "2rem" }}>
          {icon}
        </div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
