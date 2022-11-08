const Joi = require("joi");
const enums = require("../../../json/enums.json");
const messages = require("../../../json/messages.json");
const logger = require("../../logger");
const utils = require("../../utils");

module.exports = exports = {
  // route validation
  validation: Joi.object({
    title: Joi.string().trim().required().label("title"),
    description: Joi.string().required(),
  }),

  // route handler
  handler: async (req, res) => {
    const { title, description } = req.body;

    const postObject = {
      title: title,
      description: description,
      image: `/${req.file?.filename}`,
    };

    const newPost = await global.models.GLOBAL.POST(postObject);
    try {
      await newPost
        .save()
        .then((data) => {
          const data4createResponseObject = {
            req: req,
            result: 0,
            message: messages.SUCCESS,
            payload: { result: data },
            logPayload: false,
          };
          res
            .status(enums.HTTP_CODES.OK)
            .json(utils.createResponseObject(data4createResponseObject));
        })
        .catch((error) => {
          const data4createResponseObject = {
            req: req,
            result: -1,
            message: messages.GENERAL,
            payload: { error: error },
            logPayload: false,
          };
          return res
            .status(enums.HTTP_CODES.BAD_REQUEST)
            .json(utils.createResponseObject(data4createResponseObject));
        });
    } catch (error) {
      logger.error(`${req.originalUrl} - Error encountered: ${error.message}\n${error.stack}`);
      const data4createResponseObject = {
        req: req,
        result: -1,
        message: messages.GENERAL,
        payload: { error: error },
        logPayload: false,
      };
      res
        .status(enums.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json(utils.createResponseObject(data4createResponseObject));
    }
  },
};
