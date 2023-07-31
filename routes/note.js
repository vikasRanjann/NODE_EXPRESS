const express = require("express");

const router = express.Router();

router.get("/", (response, request) => {
  console.log("Insided note");

  response.setEncoding("hi");
});

module.exports = router;
