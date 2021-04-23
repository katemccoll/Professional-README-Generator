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
            name: "name",
            message: "What is your full name",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Self-explaining name)",
        },
        {
            type: "input",
            name: "projectDescription",
            message: "What is your project about? (What can your project do?)",
        },
        {
            type: "input",
            name: "liveLink",
            message: "Link to your project (use empty value to skip)",
        },
        {
            type: "input",
            name: "technologiesUsed",
            message: "Which technologies did you use?",
        },
        {
            type: "input",
            name: "visuals",
            message: "Are there any screenshots or videos/GIFs you would like to use? (use empty value to skip)",
        },
        {
            type: "input",
            name: "install",
            message: "Are there any installations or requirements for your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Include usage commands or instructions",
        },
        {
            type: "input",
            name: "tests",
            message: "Include any test commands",
        },
        {
            type: "input",
            name: "emailQuestions",
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
            name: "authorAcknowledgement",
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
// function writeToFile(fileName, data) {}

const generateREADME = (answers) =>
    `
    #${answers.title}
    
    ## Description
    ${answers.description}
    
    ### Live Link
    ${answers.liveLink}    
    
    badges
    
    ## Table of Contents
    1. []()
    2. []()
    3. []()
    4. []()
    5. []()
    6. []()
    7. []()
    8. []()
    
    ## Installation instructions
    ${answers.install}
    
    ## Usage Information
    ${answers.usage}
    
    ## Test Instructions
    ${answers.tests}
    
    ## License
    ${answers.license}
    
    ## Contribution Guidelines
    ${answers.contributing}
    
    ## Questions
    ${answers.emailQuestions}`;


// TODO: Create a function to initialize app
// function init() {}
const init = () => {
    questions()
        .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
        .then( () => console.log("You have successfully written your README"))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
