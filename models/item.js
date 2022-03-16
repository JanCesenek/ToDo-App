const mongoose = require("mongoose");

const newItem = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    lowercase: true,
    required: true,
    enum: ["easy", "medium", "hard"],
  },
  field: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model(`Item-${newItem.field}`, newItem);

module.exports = Item;
