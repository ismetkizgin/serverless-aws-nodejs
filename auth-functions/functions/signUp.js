const HttpStatusCode = require("http-status-codes");

module.exports = async (event) => {
  return {
    statusCode: HttpStatusCode.OK,
    body: JSON.stringify("Sign Up"),
  };
};
