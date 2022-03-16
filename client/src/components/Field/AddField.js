import React, { useState } from "react";
import { api } from "../../core/api";
import UseInput from "../../hooks/use-input";
import slugify from "react-slugify";
import { v4 as uuidv4 } from "uuid";
import "../../App.css";

const AddField = (props) => {
  const categoryFinder = props.fields.find((el) => el === props.category);
  const editCheck = props.edit ? categoryFinder.category : value;
  const [field, setField] = useState([]);
  const [redirect, setRedirect] = useState();
  const { value, isValid, hasError, changeHandler, blurHandler, reset } = UseInput(
    (value) => value.trim !== ""
  );

  // const refreshFields = () => {
  //   api.get("/api/fields").then((res) => {
  //     console.log(res.data);
  //     setField(res.data);
  //   });
  // };

  const deleteReq = (id) => {
    api.delete(`/api/fields/${id}`);
  };

  const postReq = (e) => {
    const postReqPayload = {
      _id: uuidv4(),
      category: value,
      url: `/${slugify(value)}`,
    };
    setRedirect(postReqPayload.url);
    console.log(postReqPayload);
    api.post("/api/fields", postReqPayload);
  };

  return (
    <div className="Form">
      <form action={redirect} onSubmit={postReq}>
        <input
          type="text"
          placeholder="Category"
          id="Category"
          value={value}
          onChange={changeHandler}
          onBlur={blurHandler}
        />
        <button className={isValid ? "" : "Disabled"}>Submit</button>
      </form>
      <ul className="Links">
        <li key="105">
          <a href="/">Default</a>
        </li>
        {props.fields.map((el) => {
          return (
            <li key={el._id}>
              <a href={el.url}>{el.category}</a>
              <span className="Cross" onClick={deleteReq(el._id)}>
                &#10008;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AddField;
