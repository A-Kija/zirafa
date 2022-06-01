const express = require("express");
const app = express();
const port = 3003;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "labas",
});

// READ
app.get("/trees", (req, res) => {
  const sql = `
  SELECT
  *
  FROM trees
`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});





app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
