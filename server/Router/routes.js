const express = require("express");
const router = express.Router();
const db = require("../connection");

function rand(min, max) {
  return Math.floor(Math.random()*(max - min)) + min;
}

router.post("/login", (req, res) => {

  const id = req.body.data.id;
  const pw = req.body.data.pw

  db.query("select * from wet_user where ID=? and password=?;", [id, pw], (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

router.get("/getTest", (req, res) => {
  db.query("select * from res_table where res_id=321;", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

router.get("/getRand", (req, res) => {
  const id = rand(1,2589);
  db.query("select * from res_table where res_id= ? ;", [id], (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

module.exports = router;