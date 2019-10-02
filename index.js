/*
 * DEPS
 */
const express                       = require("express");
const port                          = (process.env.PORT || 1337);
const app                           = express();
const httpServer                    = require("http").Server(app)

/*
 *   CONFIG
 */
require("./config/server.js")(app);

const routes                    = require("./routes/index.js");

app.use("/", routes);


/*
 *   START SERVER
 */

httpServer.listen(port, () => {
  console.log(`working on ${port}`);
});
