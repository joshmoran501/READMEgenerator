// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const fetch = require("node-fetch")
const util = require("util")

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is your github username? (Do not include @)`,
        name: `username`,
        default: `joshmoran501`,
        validate: async function makeRequest (answer) {  
            let GitHubUsername = await fetch(`https://api.github.com/users/${answer}`);
                if(GitHubUsername.statusText === `Not Found`) {console.log(`valid username required`)} else return true;
                }
    },
    {
        type: `input`,
        message: `What is the application's github repository?`,
        name: `repo`,
        default: `READMEgenerator`,
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
        default: `README Generator`,
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
        default: `Generates a professional README file based on command line prompts`,
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
        default: `no instructions`,
    },
    {
        type: `input`,
        message: `Usage information:`,
        name: `usage`,
        default: `Use this to quickly make a professional README so you can get back to coding!`,
    },
    {
        type: `list`,
        message: `What license would you like to use?`,
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'ISC License', 'Other'],
        name: `license`,
        default: `MIT License`,
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
        default: `joshmoran501@gmail.com`,
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

const writeFileAsync = util.promisify(writeToFile)

// TODO: Create a function to initialize app
async function init() {
    try {
        const responses = await inquirer.prompt(questions);
        console.log(module)

        const markdown = 
        generateMarkdown(responses)
        console.log(markdown)

        await writeFileAsync('ExampleREADme.md', markdown)
    } catch (error) {
        console.log(error)
    }
};

// Function call to initialize app
init();
