const express                 = require("express");
const router                  = express.Router();

router.get("/", async (req, res, next) => {
  console.log("received request");
  return res.send({
    "success": true,
    "message": "Oh HAI2!!"
  });
});

module.exports = router;
