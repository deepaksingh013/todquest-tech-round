const fs = require('fs');

const directoryPath = './';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Unable to scan directory: ' + err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});