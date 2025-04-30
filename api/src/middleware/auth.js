const jwt = require("jsonwebtoken");
const { throwError } = require("../universal");

const authorizeUser = async (req, res, next) => {
  if (req.url.startsWith("/public")) {
    return next();
  }

  const token = req.headers["x-access-token"];

  if (!token) return res.status(403).send();

  try {
    const decodedToken = jwt.decode(token, process.env.TOKEN_KEY);
    req.user = decodedToken;

    if (req.url.startsWith("/admin")) {
      if (!decodedToken.isAdmin) return res.status(403).send();
    }
    next();
  } catch (err) {
    throwError(req.t("Token is not valid"), 401);
  }
};

module.exports = authorizeUser;
