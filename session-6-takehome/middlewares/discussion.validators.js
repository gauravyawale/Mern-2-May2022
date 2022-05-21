const Joi = require("joi");

const authenticateDiscussion = (request, response, next) => {
//   console.log(request.headers);
  const authKey = request.headers["x-api-key"];

  if (!authKey || authKey !== process.env.Route_Password) {
    response.status(403).json({ message: "Unauthorized Access" });
  }
  next();
};

const validationSchema = Joi.object().keys({
  title: Joi.string().max(150).required(),
  author: Joi.string().required(),
  content: Joi.string().default(""),
});

const validateNewDiscussion = (request, response, next) => {
    const result = validationSchema.validate(request.body);
    if (result.error) {
      response.status(422).json({
        message: result.error.message,
      });
    }
  
    next();
};

module.exports = {
  authenticateDiscussion,validateNewDiscussion
};
