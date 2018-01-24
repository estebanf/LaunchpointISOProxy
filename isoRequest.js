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
    content = content.replace("<ACORD xmlns=\"\">","<![CDATA[<ACORD>");
    content = content.replace("</ACORD>","</ACORD>]]>")
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
        console.log(resp);
        var response_content = resp.replace(/&lt;/g,"<")
        console.log(response_content)
        response_content = response_content.replace(/&gt;/g,">")
        res.send(response_content);
    })
    .catch((err) => {
      logger.error(err.error);
      res.status(500).send(err.error);
    })
    // res.send(content);
  })
}
