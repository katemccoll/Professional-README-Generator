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
            message: "What is the title of your project?",
        },
        {
            name: "description",
            message: "What is your project about?",
        },
        {
            type: "input",
            name: "liveLink",
            message: "Link to your project",
        },
        {
            type: "input",
            name: "technologiesUsed",
            message: "Which technologies did you use?",
        },
        {
            type: "input",
            name: "results",
            message: "Do you want to include an image or a gif? (enter path)",
        },
        {
            type: "input",
            name: "install",
            message: "What are the requirements for your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "Include usage commands or instructions",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address",
        },
        {
            type: "input",
            name: "github",
            message: "GitHub username",
        },
        {
            type: "input",
            name: "contribution",
            message: "Message for budding contributors",
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
${answers.description}

### Live Link: 
${answers.liveLink}    

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Results](#results)
- [Contribution](#contribution)
- [License](#license)
- [Questions](#questions)


## Installation
${answers.install}

## Usage
${answers.usage}

## Results
![photo](${answers.results})


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


