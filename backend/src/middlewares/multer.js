const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "/assets/img"));
  },
  filename: function (req, file, cb) {
    cb(null, "public" + shortid.generate() + "-" + file.originalname);
  },
});

exports.upload = multer({ storage });
