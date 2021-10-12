/**
 * Given a license name, returns a string with the badge image and embedded link
 * @param {'MIT' | 'GNU' | 'CC0' | 'MPL'} license 
 * @returns MD formatted image with link
 */
const renderLicenseContent = (license) => {
  switch (license) {
    case `MIT`:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`    
    case `GNU`:
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`    
    case `CC0`:
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`    
    case `MPL`:
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
 }

 /**
  * Given a license name, returns the correct license section for the README
  * @param { 'MIT' | 'GNU' | 'CC0' | 'MPL' | 'None'} license The name of the license as a string
  * @returns Either an empty string when 'None' is passed to it or the license section of the readme.
  */
const renderLicenseSection = (license) => {
  if (license == 'None') {
    return ``
  } else{
    return`## License

${renderLicenseContent(license)}

Click on badge to read about license.`   
 }
 }

/**
 * Generates body text of the readme by reading the answers passed to it. 
 * @param {*} data Answer object returned from inquirer prompts
 * @returns Body text of the README as a string
 */
const generateMarkdown = (data) => {
  //ternary next to contribution adds license to table of contents, only if there is one.
  return `
# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)${data.license == 'None'? '' : '\n- [License](#license)'}
- [Testing](#testing)
- [Questions?](#questions)

## Description

${data.description}
  
## Installation

${data.installation}

## Usage

${data.usage}
  
## Contribution

${data.contribution}

## Testing

${data.testing}
  
${renderLicenseSection(data.license)}

## Questions?

Contact me on GitHub:
[${data.username}](https://github.com/${data.username})

Send me an Email:
[${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
