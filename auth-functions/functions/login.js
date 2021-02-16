const { authSecretKey } = require("../utils/config");

module.exports = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(`Login: Auth Secret Key - ${authSecretKey}`),
  };
};
