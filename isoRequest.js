var response = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:tem=\"http://tempuri.org/\"><soapenv:Header/><soapenv:Body><tem:SubmitToISOResponse><tem:SubmitToISOResult>?</tem:SubmitToISOResult><ACORD><Status><StatusCd>0</StatusCd><StatusDesc>Success</StatusDesc></Status><SignonRs><Status><StatusCd>0</StatusCd><StatusDesc>Signon was successful</StatusDesc></Status><CustId><SPName>LP</SPName><CustLoginId>11111</CustLoginId></CustId><ClientDt>2017-09-21T16:21:53</ClientDt><CustLangPref>enUS</CustLangPref><ClientApp><Org>DHP</Org><Name>XML_UAT</Name><Version>1</Version></ClientApp><ServerDt>2017-09-21T12:22:02.384-04:00</ServerDt><Language>en-US</Language></SignonRs><ClaimsSvcRs><Status><StatusCd>0</StatusCd></Status><RqUID>1111111</RqUID><ClaimInvestigationAddRs><RqUID>1111111</RqUID><TransactionResponseDt/><CurCd>en-US</CurCd><MsgStatus><MsgStatusCd>ResponsePending</MsgStatusCd></MsgStatus></ClaimInvestigationAddRs></ClaimsSvcRs></ACORD></tem:SubmitToISOResponse></soapenv:Body></soapenv:Envelope>"

module.exports = function(app){
  app.post('/isorequest',(req,res) => {
    console.log(req.rawBody);
    res.setHeader("Content-Type", "application/xml");
    res.send(response);
  })
}
