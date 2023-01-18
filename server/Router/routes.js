const express = require("express");
const router = express.Router();
const db = require("../connection");

router.get("/getTest", (req, res) => {
  db.query("select * from res_table where res_id=143410;", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

module.exports = router;