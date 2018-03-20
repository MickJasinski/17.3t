const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
let stringifyFile = "";
const home = app.get("/", function(req, res) {
  res.send("Hello world");
});

app.use(bodyParser.json());

app.get("/getNote", function(req, res) {
  fs.readFile("./some.json", "utf8", function(err, data) {
    if (err) throw err;
    stringifyFile = data;
    res.send(data);
  });
});


app.post("/updateNote/:note", function(req,res) {
  fs.readFile("./some.json", "utf8", function(err, data) {
    if (err) throw err;
    stringifyFile = data + req.params.note;

    fs.writeFile("./some.json", stringifyFile, function(err) {
      if (err) throw err;
      console.log("file updated");
    });
  });
});

app.use(function(req, res, next) {
  res.status(404).send("Sorry, We fuc*ed up or you're asking for too much...");
});

app.listen(3000);
