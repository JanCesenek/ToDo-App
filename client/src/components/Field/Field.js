import React from "react";
import "../../App.css";
import Subfield from "./Subfield/Subfield";

const Field = (props) => {
  return (
    <div className="Background">
      <div className="Field">
        <h2>{props.category}</h2>
        <form action="/add">
          <button>Add New Category</button>
        </form>
      </div>
      <Subfield day="Monday" />
      <Subfield day="Tuesday" />
      <Subfield day="Wednesday" />
      <Subfield day="Thursday" />
      <Subfield day="Friday" />
      <Subfield day="Saturday" />
      <Subfield day="Sunday" />
      <ul className="Links">
        <li key="105">
          <a href="/">Default</a>
        </li>
        {props.fields.map((el) => {
          return (
            <li key={el._id}>
              <a href={el.url}>{el.category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Field;
