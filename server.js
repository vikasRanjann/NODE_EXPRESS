const express = require("express");
const bodyparser = require("body-parser");
const routerUser = require("./routes/user");
const routerNote = require("./routes/note");

const app = express();
app.use(bodyparser.json());

app.use("/user", routerUser);
app.use("/note", routerNote);

app.listen(4000, "0.0.0.0", () => {
  console.log(`application started`);
});
