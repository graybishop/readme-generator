// imports inquirer, fs (from Node.js), and generateMarkdown(my script)
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

/**
 * Array of questions formatted for inquirer
 */
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


/**
 * Given a file name and data, creates a new file in the /output/ directory with the text(data)
 * @param {*} data Data to be written to file
 * @param {string} fileName Name of file, defaults to 'README.md'
 */
const writeToFile = (data, fileName = `README.md`) => {
    fs.writeFile(`./output/${fileName}`, data, err => {
        if (err) {
          console.error(err)
          return
        }})
    console.log('file written')
}

/**
 * Starts the prompts
 */
const init =()=> {
    inquirer
    .prompt(questions)
    .then(answers => writeToFile(generateMarkdown(answers)))
    .catch(error => console.error(error))
}

// Function call to initialize app
init();
