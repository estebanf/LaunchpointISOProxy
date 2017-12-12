var config = require('./config');
var express = require('express')
  app = express();
var xmlparser = require('express-xml-bodyparser');
app.use(xmlparser());

app.post('/',(req,res) => {
  console.log(req.rawBody);
  res.sendStatus(200);
})

app.listen(config.port, () => {
  console.log("Server listeing")
});

module.exports = app;
