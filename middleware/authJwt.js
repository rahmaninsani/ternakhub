const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      code: res.statusCode,
      status: "Unauthorized",
    });
  }

  const accessTokenSecret = process.env.TOKEN_SECRET;
  const accessToken = authorization.split(" ")[1];

  jwt.verify(accessToken, accessTokenSecret, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({
        code: res.statusCode,
        status: "Forbidden",
      });
    }

    req.user = decodedUser;
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
};

module.exports = authJwt;
