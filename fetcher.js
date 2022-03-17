const request = require('request');
const fs = require('fs');

// two command-line args, URL, local file path
const args = process.argv.slice(2);
const URL = args[0];
const fileName = args[1];


request(URL, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(fileName, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    fs.stat(fileName, (err, Stat) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded ${Stat.size} bytes to ${fileName}`);
    });
  });
});