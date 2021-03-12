# Reviewee-Circle CI config doc

## Steps:
1. Create `.circleci` folder in root directory of project
1. Create `config.yml` file in `.circleci` folder
1. Copy below content in `config.yml` file and replace `github_repo_name` with name of your repo everywhere in this file


```
version: 2
notify:
 webhooks:
   - url: https://api.reviewee.it/notification/ci
jobs:
 node:
   working_directory: ~/github_repo_name
   docker:
     - image: circleci/node:10.15.3
   environment:
     - REVIEWEE_URL: https://api.reviewee.it
     - COMMITS_CHECK_ENDPOINT: repository/github_repo_name/haveRejectedCommits
     - COMMITS_CHECK_INDICATOR: \"success\":true
   steps:
     - run:
         name: Check rejected commits
         command: wget ${REVIEWEE_URL}/${COMMITS_CHECK_ENDPOINT} -q -O - | grep -q ${COMMITS_CHECK_INDICATOR}
     - checkout
     - restore_cache:
         key: yarn-v1-{{ checksum "yarn.lock" }}-{{ arch }}
     - restore_cache:
         key: node-v1-{{ checksum "package.json" }}-{{ arch }}
     - save_cache:
         key: yarn-v1-{{ checksum "yarn.lock" }}-{{ arch }}
         paths:
           - ~/.cache/yarn
     - save_cache:
         key: node-v1-{{ checksum "package.json" }}-{{ arch }}
         paths:
           - node_modules
         
 
workflows:
 version: 2
 node-android-ios:
   jobs:
     - node
```
