import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Button({ text, color, size, link }) {
  return (
    <a
      href={link}
      className={`btn btn-${color} ${size ? "btn-" + size : ""} m-2`}
    >
      {text}
    </a>
  );
}

export default Button;
