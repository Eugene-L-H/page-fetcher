const request = require('request');
const fs = require('fs');

// two command-line args, URL, local file path
const args = process.argv.slice(2);
const URI = args[0];
const fileName = args[1];

// 1) Asynchronous Operations
// There are two operations in this problem which will take an unknown amount of time:

// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
// When you're trying to control the order of asynchronous operations, you can use nested callbacks.

const resource = request(URI, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

fs.writeFile(fileName, resource, function (err) {
  if (err) return console.log(err);
  console.log(`${URI} --> ${fileName}`);
});

// 1 char is equal to 1 byte

// Tips
// Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
// Use Node's fs (file system) module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning above)

// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html