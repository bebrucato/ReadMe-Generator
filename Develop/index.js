// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      }, 
      {
        type: 'input',
        message: 'Provide a brief description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Provide the installation instructions. What must be downloaded?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How is this app used?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'How do I test this app?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What license are you using?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
]
    `
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
 
// TODO: Create a function to initialize app
function init() {}
 
// Function call to initialize app
init();
