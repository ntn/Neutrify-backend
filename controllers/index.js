var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.type("text/plain");
  res.send("test server");
});

router.get("/ping", function (req, res, next) {
  res.type("text/plain");
  res.send("node/sequelize");
});

module.exports = router;
