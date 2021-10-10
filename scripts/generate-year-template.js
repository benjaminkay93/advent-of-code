const fs = require('fs');
const path = require('path');

const generateFolders = (year) => {
  const dirBase = path.join(__dirname, '..' ,'years', year)
  console.log(dirBase)
//   if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir, { recursive: true });
//   }
}

const generateYear = (year) => {
    generateFolders(year);
};

const yearToGenerate = process.argv[2];

generateYear(yearToGenerate || '2030');
