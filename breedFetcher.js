const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=sib`, (error, res, body) => {
  if (error) {
    console.log('cannot find details')
  } else {
    const data = JSON.parse(body);
    console.log(typeof data)
    const firstEntryData = data[0];
    console.log(firstEntryData.description);
  }
});