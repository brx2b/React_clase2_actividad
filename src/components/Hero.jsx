import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Hero({ title, description, backgroundImage }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: "20px"
      }}
    >
      <h1 className="fw-bold">{title}</h1>
      <p className="lead">{description}</p>
    </div>
  );
}

export default Hero;
