const { Router } = require("express");

const fileMiddleware = require("../middleware/file");
const { uploadController } = require("../controllers/upload.controller");
const router = Router();

router.get("/upload", uploadController.getPhoto);
router.post("/upload", fileMiddleware.single("img"), uploadController.addPhoto);

module.exports = router;
