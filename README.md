## NLP API Project

## Table of Contents

* [Table of contents](#table-of-contents)
* [Project description](#project-description)
* [Usage](#usage)
* [Dependencies](#dependencies)

## Project description
[(Back to top)](#table-of-contents)

The aim of the project is to use the [Meaningcloud Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis) to run Natural Language Processing on articles or blogs found on the internet.  The user provides a link to be analysed, and is provided with the results in their browser.

## Usage
[(Back to top)](#table-of-contents)

To build a dist folder of produciton code type `npm run build-prod` in a terminal.  To start the server and run the project type `npm run start`.  You can now view the project running in a browser at [localhost:8081](http://localhost:8080/).

To run the project in Development Mode use `npm run build-dev-server` in your terminal.  This will open the main page in your browser.  The server also needs to be running or the fetch calls will fail.

## Dependencies
[(Back to top)](#table-of-contents)

Node version 14.21.3.  The other dependencies can be found in the package.json file.