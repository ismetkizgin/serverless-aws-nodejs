const HttpStatusCode = require("http-status-codes");
const validatorsObjects = require("../validatorObjects");

module.exports = async (event, context) => {
  try {
    const validatorObjects = validatorsObjects[_getPath(event)];
    if (validatorObjects)
      await validatorObjects[event.httpMethod].validateAsync(
        { body: JSON.parse(event.body), headers: event.headers },
        {
          allowUnknown: true,
        }
      );
  } catch (err) {
    context.end();
    return {
      statusCode: HttpStatusCode.EXPECTATION_FAILED,
      body: JSON.stringify(err.message),
    };
  }
};

function _getPath(event) {
  return event.path.replace("/", "").replace("-", "_");
}
