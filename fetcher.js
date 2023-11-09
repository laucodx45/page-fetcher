const request = require('request');
const fs = require('fs');

const arg = process.argv.slice(2);

const url = arg[0];
const localFilePath = arg[1];
const encoding = 'utf8';

request(url, function(error, response, body) {
  
  if (error) {
    console.error('error:', error); // Print the error if one occurred
  }
  if (response) {
    console.log('statusCode:', response); // Print the response if a response was received
    fs.writeFile(localFilePath, body, encoding, (error) => {
      if (error) {
        console.error(`Error writing to ${localFilePath}`, error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
      }
    });
  }
  // console.log('body:', body); // Print the HTML for the Google homepage.
});

// handle error, if
// node implementation to write to file fs.
// implement through body
// body.length

// e.g message: Downloaded and saved 3261 bytes to ./index.html