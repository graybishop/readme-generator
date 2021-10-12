// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What's the project title? (Title)`,
    },
    {
        type: 'input',
        name: 'description',
        message: `Give a short description of your project. (Description)`,
    },
    {
        type: 'input',
        name: 'installation',
        message: `Any installation instructions? (Installation)`,
    },
    {
        type: 'input',
        name: 'usage',
        message: `How should it be used? (Usage)`,
    },
    {
        type: 'input',
        name: 'contribution',
        message: `How should others contribute? (Contributing)`,
    },
    {
        type: 'input',
        name: 'testing',
        message: `What are the testing instructions? (Tests)`,
    },
    {
        type: 'list',
        name: 'license',
        message: `Choose a license for your application. (license)`,
        choices: [
            'MIT',
            'GNU',
            'CC0',
            'MPL',
            'None',
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: `GitHub Username:`,
    },
    {
        type: 'input',
        name: 'email',
        message: `Email for questions about the project?`,
    },
];

// TODO: Create a function to write README file
const writeToFile = (fileName = `README.md`, data) => {
    fs.writeFile(`./output/${fileName}`, data, err => {
        if (err) {
          console.error(err)
          return
        }})
    console.log('file written')
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => writeToFile(`README.md`, generateMarkdown(answers)))
    .catch(error => console.error(error))
}

// Function call to initialize app
init();
