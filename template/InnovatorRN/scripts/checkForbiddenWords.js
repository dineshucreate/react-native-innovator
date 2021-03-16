const util = require('util');
const path = require('path');
const fs = require('fs');

const fsReaddir = util.promisify(fs.readdir);
const fsReadFile = util.promisify(fs.readFile);
const fsLstat = util.promisify(fs.lstat);

async function searchFilesInDirectoryAsync(dir, filter, ext) {
  await fsReaddir(dir).catch((err) => {
    throw new Error(err.message);
  });
  const found = await getFilesInDirectoryAsync(dir, ext);
  const matches = [];

  for (let file of found) {
    const fileContent = await fsReadFile(file, 'utf8');

    const regex = new RegExp(filter);
    if (
      regex.test(JSON.stringify(fileContent)) &&
      file.indexOf('checkForbiddenWords.js') === -1
    ) {
      console.error(`word reference found in file: ${file}`);
      matches.push(file);
    }
  }

  return matches;
}

async function getFilesInDirectoryAsync(dir, ext) {
  let files = [];
  const filesFromDirectory = await fsReaddir(dir).catch((err) => {
    throw new Error(err.message);
  });

  for (let file of filesFromDirectory) {
    const filePath = path.join(dir, file);
    const stat = await fsLstat(filePath);

    if (stat.isDirectory()) {
      const nestedFiles = await getFilesInDirectoryAsync(filePath, ext);
      files = files.concat(nestedFiles);
    } else {
      if (path.extname(file) === ext) {
        files.push(filePath);
      }
    }
  }

  return files;
}

searchFilesInDirectoryAsync('./', 'UNSAFE_', '.js')
  .then((filesWithForbiddenWords) => {
    const filesToCheck = filesWithForbiddenWords.filter(
      (filepath) => filepath.indexOf('checkForbiddenWords.js') === -1,
    );

    process.exit(filesToCheck.length ? 1 : 0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
