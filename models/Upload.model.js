const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema({
  image: String,
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
