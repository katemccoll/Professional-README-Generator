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
            message: "What is your full name?",
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
            name: "email",
            message: "Enter your email address for people if they have questions or want help",
        },
        {
            type: "input",
            name: "github",
            message: "github url?",
        },
        {
            type: "input",
            name: "contribution",
            message: "Say if you are open for contributions and what that would be",
        },
        {
            type: "checkbox",
            name: "license",
            choices: ["MIT", "GNU-v3.0", "Apache-v2.0", "Boost-v1.0"],
            default: ["MIT"]
        },
    ]);
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const generateREADME = (answers) => {


    const softwareLicense = {
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "GNU-v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        "Apache-v2.20": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "Boost-v1.0": "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    };


    return `
#${answers.title}

${softwareLicense[answers.license]}

    
## Description
${answers.projectDescription}

### Live Link: 
${answers.liveLink}    

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Contribution](#contribution)
- [License](#license)
- [Questions](#questions)


## Installation
${answers.install}


## Usage
${answers.usage}

## Tests
${answers.tests}


## License

${answers.license} License

Copyright (c) ${new Date().getFullYear()} ${answers.name}

## Contribution
${answers.contribution}

## Questions 
If you have any questions, please contact me by \
Email: ${answers.email} \
GitHub: [${answers.github}](https://github.com/${answers.github})
`;

}
// TODO: Create a function to initialize app
// function init() {}
const init = () => {
    questions()
        .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
        .then(() => console.log("You have successfully written your README"))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();


