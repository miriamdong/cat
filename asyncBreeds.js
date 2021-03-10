const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      callback(data);
    } else callback(undefined);
  });
};

const printOut = breed => console.log('Return Value: ', breed);

// // we try to get the return value
// console.log(breedDetailsFromFile('Bombay', printOut));

// console.log(breedDetailsFromFile('Saphire', printOut));

module.exports = breedDetailsFromFile;