const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema({
  img: String,
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
