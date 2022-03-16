const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const Field = require("./models/field");

mongoose
  .connect("mongodb://127.0.0.1:27017/toDoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app
  .route("/api/fields")
  .get(async (req, res) => {
    const fields = await Field.find({});

    console.log(fields);
    res.json(fields);
  })
  .post(async (req, res) => {
    const newField = new Field(req.body);
    await newField.save();
    console.log(newField);
    console.log(req.body);
  });

app
  .route("/api/fields/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const field = await Field.findById(id);
    console.log(field);

    res.json(field);
  })
  .delete(async (req, res) => {
    const id = req.params.id;
    const deletedField = await Field.findByIdAndDelete(id);
    console.log(deletedField);
  });
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
