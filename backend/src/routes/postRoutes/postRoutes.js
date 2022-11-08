const express = require("express");
const router = express.Router();
const postApi = require("../../api/post/index");
const { validate } = require("../../middlewares");
const { upload } = require("../../middlewares/multer");

// Get Methods
router.get("/", postApi.getPost.handler);
router.get(
  "/getById/:postId",
  validate("params", postApi.getPostById.validation),
  postApi.getPostById.handler
);
router.get("/search", postApi.searchPost.handler);

// Post Methods
router.post(
  "/create",
  // validate("body", postApi.createPost.validation),
  upload.single("image"),
  postApi.createPost.handler
);

// Put Methods
router.put(
  "/update/:postId",
  validate("params", postApi.updatePost.validation),
  upload.single("image"),
  postApi.updatePost.handler
);

// Delete Methods
router.delete(
  "/delete/:postId",
  validate("params", postApi.deletePost.validation),
  postApi.deletePost.handler
);

module.exports = router;
