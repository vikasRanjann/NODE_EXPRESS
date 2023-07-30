const crypto = require("crypto-js");

const password = "vikash";

const encypt = crypto.MD5(password);
console.log(`pass:${encypt}`);
