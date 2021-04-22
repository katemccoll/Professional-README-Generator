// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "license",
            message: "WHat is your full name",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Self-explaining name)",
        },
        {
            type: "input",
            name: "project-description",
            message: "What is your project about? (What can your project do?)",
        },
        {
            type: "input",
            name: "live-link",
            message: "Link to your project (use empty value to skip)",
        },
        {
            type: "input",
            name: "visuals",
            message: "Are there any screenshots or videos/GIFs you would like to use? (use empty value to skip)",
        },
        {
            type: "input",
            name: "installation",
            message: "Are there any installations or requirements for your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Include usage commands or instructions",
        },
        {
            type: "input",
            name: "test",
            message: "Include a test command",
        },
        {
            type: "input",
            name: "questions",
            message: "Enter your email address for people if they have questions or want help",
        },
        {
            type: "input",
            name: "github",
            message: "github url?",
        },
        {
            type: "input",
            name: "contributing",
            message: "Say if you are open for contributions and what that would be",
        },
        {
            type: "input",
            name: "author-or-acknowledgement",
            message: "Show appreciation for those who helped the project",
        },
        {
            type: "input",
            name: "license",
            message: "How is it licensed",
        },
    ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
