const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); //{ extended: true })

app.use("/upload", express.static(path.resolve(__dirname, "upload")));

app.use(require("./routes/upload.rote"));

const connected = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://into:code@cluster0.odtfl.mongodb.net/uploadPhotoAttempt3"
    );
    console.log("Вы успешно подключились к MongoDB!");
    app.listen(port, () => {
      console.log("Server has been started!");
    });
  } catch (e) {
    console.log(e);
  }
};

connected();
