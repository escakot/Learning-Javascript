
var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');


    response.on('data', function(data) {
      console.log(data);
      console.log('\n');
    })

    response.on('end', function() {
      console.log("Completed Printing.")
    })
  })
}

// getAndPrintHTMLChunks();

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var htmlData
  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');


    response.on('data', function(data) {
      htmlData += data
    })

    response.on('end', function() {
      console.log(htmlData);
    })
  })
}

getAndPrintHTML();
