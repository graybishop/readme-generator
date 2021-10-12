
# readme-generator <!-- omit in toc -->

## Description <!-- omit in toc -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

CLI that generates a README for your project. This tool runs in your terminal and generates a README for your next project. Utilizing inquirer, this tool prompts the user for their project information (Title, Description, Installation, Usage, License, How to Contribute, How to Test, and How to submit Questions), and creates a README.md file they can use in their repo.

## Table of Contents   <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Video Example](#video-example)
- [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Open Source License Choice](#open-source-license-choice)
- [Tech Stack](#tech-stack)

## Installation

Clone the repo and run ```npm install```

## Usage

Run ```node index.js``` in your terminal and follow the prompts.

## Video Example

https://user-images.githubusercontent.com/8904427/136886731-5beaccc3-ce4c-42cc-bdd1-99cffff2f3e4.mp4

## Features

### Table of Contents

The tool generates a table of contents in your README. Placed under the description, the Table of Contents makes the README more accessible. 

### Open Source License Choice

User has a choice from four licenses (MIT, GNU, CC0, or MPL) or no licenses at all. The tool generates a badge on the README for the license and a link to the description. Colleted from [https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) and [https://choosealicense.com/](https://choosealicense.com/). Badges:

- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
- [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
- [![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
- [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  
## Tech Stack

- Node.JS
- [inquirer](https://www.npmjs.com/package/inquirer)
- ES Modules
