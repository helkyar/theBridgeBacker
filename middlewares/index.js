const jwt = require("jsonwebtoken");

let middlewares = {
  example1: () => {},

  // middleware to validate token (protected path)
  verifyToken: (req, res, next) => {
    console.log(
      "========================================================================CHECK THE MOTHREFUCKER ==================================="
    );
    const token = req.header("auth-token");
    if (!token) return res.status(401).json({ error: "Acceso denegado" });
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).json({ error: "token no es válido" });
    }
  },
};

module.exports = middlewares;
