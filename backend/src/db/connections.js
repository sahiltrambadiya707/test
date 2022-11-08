/**
 * MongoDB / Mongoose
 */
const mongoose = require("mongoose");
const logger = require("../logger");
const ConnectionFactory = require("./connection-factory");
const config = require("../../config.json");

module.exports = async () => {
  mongoose.pluralize(null); // So that mongoose doesn't try to pluralize the schema and map accordingly.
  let models;
  try {
    const connectionFactory = new ConnectionFactory(config);
    // GLOBAL Connections
    const connection_IN_TEST = await connectionFactory.getConnection(
      "GLOBAL",
      config.MONGODB.GLOBAL.DATABASE.TEST
    );

    const mongooseConnections = {
      GLOBAL: {
        TEST: connection_IN_TEST,
      },
    };

    /* All the (mongoose) models to be defined here */
    models = {
      GLOBAL: {
        POST: require("../schema/post/post")(mongooseConnections.GLOBAL.TEST),
      },
    };

    return models;
  } catch (error) {
    logger.error(
      "Error encountered while trying to create database connections and models:\n" + error.stack
    );
    return null;
  }
};
