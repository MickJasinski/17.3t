const express = require('express');
const bodyParser = require('body-parser');
const fs  = require('fs');

const app = express();
let stringifyFile;

app.use(bodyParser.json());



app.get('/getNote', function(req, res) {
  fs.readFile('some.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
  });
});

app.post('/updateNote/:note', function(req, res) {
  fs.writeFile('some.json', JSON.stringify(obj), function(err) {
    if (err) throw err;
    console.log('file updated');
    res.end();
  });
});



app.listen(3000);

app.use(function(req, res, next) {
  res.status(404).send('Sorry, We fuc*ed up or you\'re asking for too much...')
});