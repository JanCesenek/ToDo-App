import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Field from "./components/Field/Field";
import AddField from "./components/Field/AddField";
import Error from "./components/404/404";
import { api } from "./core/api";

const App = () => {
  const [field, setField] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    api.get("/api/fields").then((res) => {
      console.log(res.data);
      setField(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route key={Math.random()} path="/add" element={<AddField fields={field} />} />
        {/* <Route
          path="/edit"
          edit
          element={<AddField fields={field} setCategory={setCategory} category={category} />}
        /> */}
        <Route
          key={Math.random()}
          exact
          path="/"
          element={<Field category="Work" fields={field} url="/" />}
        />
        {field.map((el) => {
          return (
            <Route
              key={el._id}
              exact
              path={el.url}
              element={<Field category={el.category} fields={field} url={el.url} />}
            />
          );
        })}
        <Route key={Math.random()} path="*" exact={true} element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
