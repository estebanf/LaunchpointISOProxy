var log4js = require("log4js");
log4js.configure({
    appenders: {
        LaunchpointISOProxy: { type: 'dateFile', filename: 'LaunchpointISOProxy.log'}
    },
    categories: {
        default: { appenders: [ 'LaunchpointISOProxy' ], level: 'info'}
    }
});

var config = require('./config');
var app = require('express')();
var xmlparser = require('express-xml-bodyparser');
app.use(xmlparser());
require('./isoResponse')(app);
require('./isoRequest')(app);

app.listen(config.port, () => {
  console.log("Server listeing")
});

module.exports = app;
