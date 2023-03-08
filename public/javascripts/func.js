

const fs = require('fs');

function createDataDirectory() {
  const dir = 'data';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const file = `${dir}/drinks.json`;
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '[]');
  }
}

// createDataDirectory();

// Rest of the app.js script goes here...


// export
module.exports = createDataDirectory;