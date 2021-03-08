// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "MIT"){
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]"
  }else if (license == "APACHE 2.O"){
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  }else if (license == "GPL 3.0"){
    license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)]"
  }else if(license == "BSD 3"){
    license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)]"
  }else {
    license = "None"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.title}

## Description
  ${data.description}

## Table of Contents
 [Installation](#installation)

 [Usage](#usage)

 [License](#license)
 
 [Contributing](#contributing)

 [Tests](#tests)

 [Screenshots](#screenshots)

 [Questions](#questions)

## Installation
You must download these items, ${data.installation} to use this app.

## Usage
To use this app, ${data.usage}.

## License
The license for this project is ${data.license}.

${renderLicenseBadge(license)}

## Contributing
Contributors: ${data.contributors}

## Test
In order to run the test, you must ${data.test}.

[Demo Video]()

## Screenshots
[Command Line]()

[Generated ReadMe]()

## Questions
If you have any further questions about this application, feel free to 
contact me via email or through my GitHub profile by clicking on one
of the links below. Thank you!

https://github.com/${data.username}

${data.email}
`;
}

module.exports = generateMarkdown;
