const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require('util');
const writeReadFile = util.promisify(fs.writeFile);


// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "what is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "add a description to your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "how can users install this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What can users use this application for?",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to this project",
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github username?.",
    },
    {
      type: "input",
      name: "email",
      message: "what is your email address?.",
    },

    {
      type: "list",
      name: "license",
      message: "Choose a license for this project?",
      choices: [
        "Mit License",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "GNU General Public License v3.0",
      ],
    },
  ]);

/* questions()
.then((answers)=> writeReadFile('readme.md', generateMarkdown.generateMarkdown(answers))) */



// function to write README file
function writeToFile(fileName, data) {
   writeReadFile(fileName, data)
}

// function to initialize program
function init() {
  questions()
   .then((answers)=> writeToFile('README.md', generateMarkdown.generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err)); 
 
}


// function call to initialize program
init();
//writeToFile('README.md', generateMarkdown.generateMarkdown(answers))


