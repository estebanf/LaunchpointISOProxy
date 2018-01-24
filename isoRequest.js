var config = require('./config');
var request = require('request-promise');
// require('request-debug')(request);
var log4js = require('log4js');
var logger = log4js.getLogger('LaunchpointISOProxy');
logger.level = config.logLevel;

module.exports = function(app){
  app.post('/isorequest',(req,res) => {
    logger.info("ISORequest received ");
    res.setHeader("Content-Type", "text/xml");

    var content = req.rawBody;
    content = content.replace("<tem:xml>","<tem:xml><![CDATA[");
    content = content.replace("</tem:xml>","]]></tem:xml>")
    request({
      url: config.ISO,
      method:'POST',
      headers:{
        'Content-Type':'text/xml;charset=UTF-8',
        SOAPAction: "http://tempuri.org/SubmitToISO"
      },
      body: content
    })
    .then((resp,data) => {
        logger.info("Message posted and replied")
        res.send(resp);
    })
    .catch((err) => {
      logger.error(err.error);
      res.status(500).send(err.error);
    })
    // res.send(content);
  })
}
