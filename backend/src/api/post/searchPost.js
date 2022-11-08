const Joi = require("joi");
const enums = require("../../../json/enums.json");
const messages = require("../../../json/messages.json");
const logger = require("../../logger");
const utils = require("../../utils");

module.exports = exports = {
  // route handler
  handler: async (req, res) => {
    let page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    let limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;
    let skip = (page - 1) * limit;

    try {
      const total = await global.models.GLOBAL.POST.find({
        title: { $regex: ".*" + req.query.search + ".*", $options: "i" },
      }).countDocuments();

      await global.models.GLOBAL.POST.find({
        // $text: { $search: { $regex: ".*" + req.query.search + ".*", $options: "i" } },
        title: { $regex: ".*" + req.query.search + ".*", $options: "i" },
      })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .then((data) => {
          const data4createResponseObject = {
            req: req,
            result: 0,
            message: messages.SUCCESS,
            payload: { result: data, total: total, page: page, limit: limit },
            logPayload: false,
          };

          return res
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
      return res
        .status(enums.HTTP_CODES.INTERNAL_SERVER_ERROR)
        .json(utils.createResponseObject(data4createResponseObject));
    }
  },
};
