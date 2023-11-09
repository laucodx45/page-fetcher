const request = require('request');
const fs = require('fs');

const arg = process.argv.slice(2);

const url = arg[0];
const localFilePath = arg[1];

const writeStream = fs.createReadStream(localFilePath);

request(url)
  // this download data from the URL and save it to a local file
  .pipe(writeStream)
  // when the download is completed, on close, console.log message
  .on('close', () =>{
    console.log(`Downloaded and saved to ${localFilePath}`);
  })
  // console.error error, if there's any
  .on('error', (error) => {
    console.error('error', error);
  });


// e.g message: Downloaded and saved 3261 bytes to ./index.html
// .length of the data 1:1 is equal to 1 byte