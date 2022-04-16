const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "/uploade");
  },

  filename(req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, new Date().toISOString + ext);
  },
});

const types = ["image/png, image/jpeg", "image/jpg"];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports = multer({ storage, fileFilter });
