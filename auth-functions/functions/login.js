const { authSecretKey } = require("../utils/config");
const HttpStatusCode = require("http-status-codes");

module.exports = async (event) => {
  return {
    statusCode: HttpStatusCode.OK,
    body: JSON.stringify(`Login: Auth Secret Key - ${authSecretKey}`),
  };
};
