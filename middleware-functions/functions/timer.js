module.exports = async (event, context) => {
  console.log(
    "Execution time: %dms",
    new Date() - event.requestContext.requestTimeEpoch
  );
};
