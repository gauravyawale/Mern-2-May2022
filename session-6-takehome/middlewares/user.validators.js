const Joi = require("joi");

const userAuthorization = (request, response, next) => {
  const authKey = request.headers["x-api-key"];

  if (!authKey || authKey !== process.env.Route_Password) {
    return response.status(403).json({ message: "Unauthorized Access" });
  }

  next();
};

const schema = Joi.object().keys({
  fullName: Joi.string().max(50).default(""),
  userName: Joi.string().max(25).required(),
  email: Joi.string().required().email(),
});

const userValidation = (request, response, next) => {
  const result = schema.validate(request.body);
  if (result.error) {
    response.status(422).json({
      message: result.error.message,
    });
  }

  next();
};

module.exports = {
  userAuthorization : userAuthorization,
  userValidation : userValidation,
};
