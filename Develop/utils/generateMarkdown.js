// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Description
  ${data.description}

##Table of Contents
 [Installation](##installation)
 [Usage](##usage)
 [License](###license)
 [Contributing](###contributing)
 [Tests](###tests)
 [Questions](##questions)

  ##Installation
  You must download these items, ${data.installation} to use this app.

  ##Usage
  To use this app, ${data.usage}.

  ###License
  The license for this project is ${data.license}.

  ###Contributing
  Contributors: ${data.contributors}

  ###Test
  In order to run the test, you need ${data.test}.

  ##Questions
  If you have any further questions about this application, feel free to 
  contact me via email or through my GitHub profile by clicking on one
  of the links below. Thank you!
  https://github.com/${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
