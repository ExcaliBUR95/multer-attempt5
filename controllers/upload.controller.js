const Upload = require("../models/Upload.model");

module.exports.uploadController = {
  addPhoto: async (req, res) => {
    try {
      const photo = await Upload.create({
        img: req.body.path,
      });
      res.json(photo);
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
  getPhoto: async (req, res) => {
    try {
      const getImage = await Upload.find();
      res.json(getImage);
    } catch (e) {
      res.status(401).json(e.toString());
    }
  },
};
