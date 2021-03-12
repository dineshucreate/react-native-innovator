const fs = require('fs');
const path = require('path');

const file = process.argv[2];
const projectRootPath = '../../';
const absoluteFilePath = path.resolve(__dirname, projectRootPath, file);
const message = fs.readFileSync(absoluteFilePath, 'utf-8');
const trelloRegExp = /^chore:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
const fixCommitRegExp = /^fix:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
const featCommitRegExp = /^feat:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
const docsCommitRegExp = /^docs:\s.+\n(\s*)https:\/\/trello.com\/c\/([0-9a-zA-Z]{8})/;
const fixRegExp = /^fixed sha /;
const preReleaseRegExp = /^chore\(release\): /;

if (
  !trelloRegExp.test(message) &&
  !fixCommitRegExp.test(message.toLowerCase()) &&
  !featCommitRegExp.test(message.toLowerCase()) &&
  !docsCommitRegExp.test(message.toLowerCase()) &&
  !fixRegExp.test(message.toLowerCase()) &&
  !preReleaseRegExp.test(message.toLowerCase())
) {
  throw new Error(
    '⭕ Invalid commit message: please use \n Reviewee "fixed sha <sha>" OR \n feat: <newFeature> \n fix: <fixIssue> \n chore: <chore> \n docs: <docs> \n with a link to the corresponding Trello card in a new line after each',
  );
}
