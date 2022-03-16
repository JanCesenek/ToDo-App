const mongoose = require("mongoose");

const newSubfield = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
});

const Subfield = mongoose.model(`Subfield-${newSubfield.field}`, newSubfield);

module.exports = Subfield;
