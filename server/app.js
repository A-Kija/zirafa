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

app.get("/animals", (req, res) => {
    const sql = `
  SELECT
  *
  FROM animals
`;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//CREATE

app.post("/trees", (req, res) => {
    const sql = `
        INSERT INTO trees
        (title, height, type)
        VALUES (?, ?, ?)
    `;
    con.query(
        sql, [req.body.title, !req.body.height ? 0 : req.body.height, req.body.type],
        (err, results) => {
            if (err) throw err;
            res.send(results);
        }
    );
});
app.post("/animals", (req, res) => {
    const sql = `
      INSERT INTO animals
      (name, type, has_owner, age)
      VALUES (?, ?, ?, ?)
  `;
    con.query(
        sql, [req.body.name, req.body.type, req.body.has_owner, !req.body.age ? 0 : req.body.age],
        (err, results) => {
            if (err) throw err;
            res.send(results);
        }
    );
});

// DELETE
app.delete("/trees/:id", (req, res) => {
    const sql = `
        DELETE FROM trees
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
app.delete("/animals/:id", (req, res) => {
    const sql = `
      DELETE FROM animals
      WHERE id = ?
      `;
    con.query(sql, [req.params.id], (err, result) => {
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