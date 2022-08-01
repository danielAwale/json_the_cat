const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, res, body) => {
    if (error) {
      callback('Request failed cannot find!')
    }
    const data = JSON.parse(body);
    // console.log(typeof data)
    const firstEntryData = data[0];
    if (firstEntryData) {
      callback(null, firstEntryData.description);
    } else {
      callback("Failed to find requested data", null);
    }
  });
}

module.exports = { fetchBreedDescription };