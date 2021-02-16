"use strict";

module.exports.example1 = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify("ismet kizgin"),
  };
};

module.exports.example2 = async (event) => {
  return {
    statusCode: 200,
    body: event.body,
  };
};

module.exports.example3 = async (event, context) => {
  const body = JSON.parse(event.body);
  if (!body.FirtsName) context.end();
  return {
    statusCode: 417,
    body: JSON.stringify("test OK"),
  };
};
