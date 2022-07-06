// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is your github username? (Do not include @)`,
        name: `username`,
        validate: async function makeRequest (answer) {
                try {
                    let response = await fetch(`https://api.github.com/users/${answer}`);
                    console.log(response.status)
                    return response.status
                } catch (err) {
                    console.log(`Valid username is required`)
                    return response.status
                }
            } 
    },
    {
        type: `input`,
        message: `What is the application's github repository?`,
        name: `repo`,
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log(`A valid repoistory is required`)
            } else return true
        }
    },
    {
        type: `input`,
        message: `What is your project's title?`,
        name: `title`,
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log(`A valid title is required`)
            } else return true 
        }
    },
    {
        type: `input`,
        message: `Project description:`,
        name: `description`,
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log(`A valid description is required`)
            } else return true 
        }
    },
    {
        type: `input`,
        message: `Installation instructions:`,
        name: `installation`,
    },
    {
        type: `input`,
        message: `Usage information:`,
        name: `usage`,
    },
    {
        type: `list`,
        message: `What license would you like to use?`,
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'ISC License'],
        name: `license`,
    },
    {
        type: `input`,
        message: `Contribution guidelines:`,
        name: `contributing`,
    },
    {
        type: `input`,
        message: `Include any tests written for your application:`,
        name: `tests`,
    },
    {
        type: `input`,
        message: `email:`,
        name: `email`,
        validate: function (answer) {
            if (!answer.includes(`@`) || answer.length < 1) {
                return console.log(`Invalid email address`) 
            } else return true
        }
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err)
        } else return console.log (`Readme file generated`)
    })
}

// TODO: Create a function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions);
    console.log(responses)

    const markdown = generateMarkdown(responses)
    console.log(markdown)

    writeToFile(`ExampleREADme.md`, markdown)
}

// Function call to initialize app
init();
