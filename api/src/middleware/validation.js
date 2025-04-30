const { StatusCodes } = require("http-status-codes");

function validate(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      console.log(error);
      const errorMessages = error?.errors?.map((err) => ({
        message: `${err.path.join(".")} is ${err.message}`,
      }));

      if (errorMessages) {
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: "Invalid data", details: errorMessages });
        return;
      }
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal server error" });
    }
  };
}

module.exports = validate;
