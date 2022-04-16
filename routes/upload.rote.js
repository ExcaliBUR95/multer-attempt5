const { Router } = require("express");
const router = Router();
const fileMiddleware = require("../middleware/file");
const { uploadController } = require("../controllers/upload.controller");

router.post(
  "/upload",
  fileMiddleware.single("avatar"),
  uploadController.addPhoto
);
router.get("/upload", uploadController.getPhoto);

module.exports = router;
