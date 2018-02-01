module.exports = {
  port: process.env.PORT || 3000,
  bpms: process.env.BPMSURL || 'http://54.90.107.154:8080/everteam',
  logLevel: 'info',
  ISO: process.env.ISOURL || 'https://claimsearchgwa.iso.com/xmlsoap'
}
