var https = require('https');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

var callback = function (response) {
  console.log("In response handler callback!");

  response.on('data', function(chuck) {
    console.log('[-- CHUCK OF LENGTH ' + chuck.length + ' --]')
    console.log(chuck.toString());
  })
}

console.log("Making a request");

https.request(options, callback).end()

console.log("Request has been made");
