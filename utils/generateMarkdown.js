// function to generate markdown for README
function generateMarkdown(data) {

  let badege = "";

  if (data.license === "Mit License") {

    badege = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (data.license === "Mozilla Public License 2.0") {

    badege ="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (data.license === "Apache License 2.0") {

    badege ="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if (data.license === "GNU General Public License v3.0") {

    badege ="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }


 return  `# Project Title:  ${data.title}

 ${badege}

  ## Description
  ${data.description}
  
  
  ## Table of Contents
  1. [Installation](#installation)

  2. [Usage](#usage)

  3. [License](#license)

  4. [Contribution](#contribution)

  5. [Tests](#tests)

  6. [Questions](#questions)

  7. [Tutorial](#video)
  
  
  ## Installation <a name='installation'></a>
  ${data.installation}
  
  ## Usage <a name='usage'></a>
  ${data.usage}
  
  ## License <a name='license'></a>
  ${data.license}
  
  ## Contributing <a name='contribution'></a>
  ${data.contributing}
  
  ## Tests <a name='tests'></a>
  
  ## Questions <a name='questions'></a>
  Github Profile: [Github] (https://github.com/${data.email})

  Contact: send me an email at ${data.email}  if you have any questions concerning this project or you would like to collaborate on any other project

  ## Video <a name='video'></a>
  [![Video](./video/Untitled_%20Jan%2024%2C%202023%209_20%20PM.webm)

`;
}

module.exports = {generateMarkdown};
