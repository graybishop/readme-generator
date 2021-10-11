// TODO: Include packages needed for this application
import inquirer from 'inquirer';

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
        message: `how should it be used? (Usage)`,
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
            'UCF',
            'BCS',
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => console.log(answers))
    .catch(error => console.error(error))
}

// Function call to initialize app
init();
