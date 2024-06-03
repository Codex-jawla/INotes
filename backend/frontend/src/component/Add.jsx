import React from "react";
import { Link } from "react-router-dom";
import { RiAddLargeFill } from "react-icons/ri";

const Add = () => {
  return (
    <Link to="/note/new" className="floating-button">
      <RiAddLargeFill />
    </Link>
  );
};

export default Add;
