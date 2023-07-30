const express = require("express");
const db = require("../db");
const crypto = require("crypto-js");

const router = express.Router();

router.get("/register", (request, response) => {
  //execute query from db
  const sql = `select * from user`;

  db.query(sql, (error, data) => {
    if (error) {
      console.log(`error :${error}`);
    } else {
      console.log(data);
      response.send(data);
    }
  });
});

//post method for user creation
router.post("/register", (request, response) => {
  const { firstName, lastName, email, password, mobile } = request.body;

  //insert query for insert data on db
  const encrypto = crypto.MD5(password);
  const statement = `insert into user(firstname,lastname,email,password,mobile)
               values('${firstName}','${lastName}','${email}','${encrypto}','${mobile}')`;

  //query execution
  db.query(statement, (error, data) => {
    //close the connction
    if (error) {
      console.log(`error :${error}`);
    } else {
      //  console.log(`result :`, data);
      response.send("user successfully created");
    }
  });
});

//login user
router.post("/login", (request, response) => {
  const { email, password } = request.body;

  const encrypto = crypto.MD5(password);
  const sql = `select * from user where  email = '${email}' and password = '${encrypto}'`;

  db.query(sql, (error, result) => {
    if (error) {
      console.log(`error :${error}`);
    } else if (result.length == 0) {
      console.log("user does'not exit");
      response.send("user does'not exit");
    } else {
      console.log("result :", result);
      response.send(result);
    }
  });
});

//user/profile
router.get("/profile/:id", (request, response) => {
  const { id } = request.params;
  console.log(`id :${id}`);

  const sql = `select * from user where id = ${id}`;

  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      response.send(result);
    }
  });
});

module.exports = router;
