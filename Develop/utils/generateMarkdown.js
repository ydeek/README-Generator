// function to generate markdown for README
function generateMarkdown(data) {
  var licenceLink = ""
  if (data.licence === "MIT") {
    licenceLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else {
    licenceLink = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }

  return `

## Title 
  ${data.title}

## Description 
${data.description}
## Table of contents 
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 


## Installation
        ${data.installation}
## Usage
${data.usage}
## Licence
${data.licence}
${licenceLink}
## Badge 
${data.badge}
## Contributors
${data.contributing}
## Test
${data.test}
## Repository
- [Project Repo](${data.repo})
## Github username 
-${data.username}
## Github Profile 
- [Github profile](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;