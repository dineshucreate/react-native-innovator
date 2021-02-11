const fs = require('fs');
const path = require('path');

const file = process.argv[2];
const projectRootPath = '../../';
const absoluteFilePath = path.resolve(__dirname, projectRootPath, file);
const message = fs.readFileSync(absoluteFilePath, 'utf-8');
const trelloRegExp = /^chore:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
const fixcommitRegExp = /^fix:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
const featcommitRegExp = /^feat:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
const fixRegExp = /^fixed sha /;
const preReleaseRegExp = /^chore\(release\): /;

if (
  !fixRegExp.test(message.toLowerCase()) &&
  !trelloRegExp.test(message) &&
  !preReleaseRegExp.test(message.toLowerCase()) &&
  !fixcommitRegExp.test(message.toLowerCase()) &&
  !featcommitRegExp.test(message.toLowerCase())
) {
  throw new Error(
    '⭕ Invalid commit message: please use \n Reviewee "fixed sha <sha>" OR \n feat: <newFeature> \n fix: <fixIssue> \n chore: <chore> \n with a link to the corresponding Trello card in a new line after each',
  );
}
