const mongoose = require("mongoose");

module.exports = (connection) => {
  const post = new mongoose.Schema(
    {
      title: { type: String, index: true },
      description: { type: String },
      image: { type: String },
    },
    {
      autoIndex: false,
      autoCreate: true,
      timestamps: true,
    }
  );

  // Export
  return connection.model("post", post, "post");
};
