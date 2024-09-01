import React from "react";

const Button = ({ text, link, isExternal }) => {
  const handleClick = () => {
    if (isExternal) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  return (
    <button
      className={`btn ${isExternal ? "btn-color-2" : "btn-color-1"}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
