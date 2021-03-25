module.exports = (message, status = 403) => {
  const error = new Error(message);
  error.status = status;

  return error;
};
