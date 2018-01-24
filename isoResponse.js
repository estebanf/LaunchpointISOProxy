var config = require('./config');
var request = require('request-promise');
// require('request-debug')(request);
var log4js = require('log4js');
var logger = log4js.getLogger('LaunchpointISOProxy');
logger.level = config.logLevel;

module.exports = function(app){
  app.post('/isoresponse',(req,res) => {
    logger.info("ISOResponse received ");
    res.setHeader("Content-Type", "application/xml");
    var content = req.rawBody;
    // logger.debug(content);
    var msg = "<iso:Receive_ISO_ResponseRequest xmlns:iso=\"http://bpms.everteam.com/Processes/Core/ProcessISOResponse/ISO_Response_Manager\" xmlns:laun=\"http://www.example.org/Launchpoint\"><laun:content>" + content + "</laun:content></iso:Receive_ISO_ResponseRequest>";
    request({
      url: config.bpms,
      method:'POST',
      headers:{
        'Content-Type':'application/xml'
      },
      body: msg
    })
      .then((resp,data) => {
          logger.info("Message posted and replied")
          res.sendStatus(200);
      })
      .catch((err) => {
        logger.error(err.error);
        res.status(500).send(err.error);
      })
    // res.send(response);
  })
}
