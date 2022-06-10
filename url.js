const url = require('url');

const myURL = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialize URL
console.log(myURL.href);

// params
myURL.searchParams.forEach((value, key) => console.log(`${key}: ${value}`));