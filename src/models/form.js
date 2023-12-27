const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  type_doc: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
    unique: true,
  },
  voucher: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  tyc: {
    type: Boolean,
    default: false,
    required: true,
  },
  privacity_political: {
    type: Boolean,
    default: false,
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Form", FormSchema);