const express = require("express");
const bodyParser = require("body-parser");
const config = require("./utils/config");
const logger = require("./utils/logger");
const db = require("./server");

const app = express();
// const cors = require("cors");

require("express-async-errors");
const middleware = require("./utils/middleware");
const indexRouter = require("./controllers/index");

//   app.use(cors());
app.use(middleware.requestLogger);
app.use("/", indexRouter);
app.use("/users", db.getUsers);

app.use(middleware.unknownUrl);
app.use(middleware.errorHandler);

app.listen(config.PORT || 3000, () => {
  logger.info(`Listening on port ${config.PORT}`);
});

module.exports = app;
