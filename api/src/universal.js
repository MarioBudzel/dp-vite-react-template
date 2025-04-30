exports.throwError = (message, status = 400, err) => {
  const error = new Error(message);
  if (err && !err.isEmpty()) {
    error.reason = err.array().join(", ");
    error.statusCode = status;
    throw error;
  }

  error.reason = "";
  error.status = status;
  throw error;
};
