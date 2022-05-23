const Joi = require("joi");

const userAuthorization = (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization || authorization !== process.env.Route_Password) {
    return response.status(403).json({ message: "Unauthorized" });
  }

  next();
};

const schema = Joi.object().keys({
  age: Joi.number().integer().min(1).max(100),
  gender: Joi.string().valid("male", "female"),
});

const validateSearchQuery = (request, response, next) => {
  const age = request.query.age;
  const gender = request.query.gender;

  const result = schema.validate({ age, gender });

  if (result.error) {
    return response.status(422).json({
      message: result.error.message,
    });
  }

  next();
};

module.exports = {
  userAuthMiddleware: userAuthorization,
  userQueryMiddleware: validateSearchQuery,
};
