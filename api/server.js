const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "syncia_clients",
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  reconnect: true,
  port: 3308,
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users ;";
  connection.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/", (req, res) => {
  return res.json("Test");
});

app.get("/test", (req, res) => {
  res.json({ status: "ok", res });
});

app.post("/db-test", (req, res) => {
  connection.query(
    "INSERT INTO users (nom , mail , pass) VALUE (?,?,?);",
    (err, resultat) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          error: "Connexion a la db echoue",
          details: err.message,
        });
      }
      return res.json(resultat);
    }
  );
});

app.post("/custumers", (req, res) => {
  const sql = "INSERT INTO users (nom,mail,pass,username) VALUES (?,?,?,?);";
  const values = [
    req.body.nom,
    req.body.mail,
    req.body.pass,
    req.body.username,
  ];
  connection.query(sql, values, (err, data) => {
    if (err) return res.json(err);
    return res.json({ message: "Utilisateur ajouté ", id: data.insertId });
  });
});
app.listen(3306, () => {
  console.log("Connexion reussi");
});
