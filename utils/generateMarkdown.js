// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

const renderLicenseSection = (license) => {
  if (license == 'None') {
    return ``
  } else{
    return`## License

${renderLicenseContent(license)}

Click on badge to read about license.`   
 }
 }


const generateMarkdown = (data) => {
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
