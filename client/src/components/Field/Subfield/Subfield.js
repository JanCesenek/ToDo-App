import React from "react";
import "../../../App.css";

const Subfield = (props) => {
  return (
    <div className="Subfield">
      <h2>{props.day}</h2>
      <button>Add New Item</button>
    </div>
  );
};

export default Subfield;
