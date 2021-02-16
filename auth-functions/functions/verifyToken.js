const HttpStatusCode = require("http-status-codes");

module.exports = async (event, context) => {
  const tokenverified = false;
  if (tokenverified) context.end();
  return {
    statusCode: HttpStatusCode.PROXY_AUTHENTICATION_REQUIRED,
    body: JSON.stringify("verifyToken"),
  };
};
