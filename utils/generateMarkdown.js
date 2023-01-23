// function to generate markdown for README
function generateMarkdown(data) {
 return  `# Project Title:  ${data.title}


  ## Description
  ${data.description}
  
  
  ## Table of Contents
  
  [Installation] (#installation)
  [Usage] (#usage)
  [License] (#license)
  [Contribution] (#contribution)
  [Tests] (#tests)
  [Questions] (#questions)
  
  
  ## Installation <a name='installation'></a>
  ${data.installation}
  
  # #Usage <a name='usage'></a>
  ${data.usage}
  
  ## License <a name='license'></a>
  ${data.license}
  
  ## Contributing <a name='contribution'></a>
  ${data.contribution}
  
  ## Tests <a name='tests'></a>
  
  ## Questions <a name='questions'></a>
  [Github](https://github.com/${data.email})
  email: ${data.email} . you can send me an email if you have any questions concerning this project

  

`;
}

module.exports = {generateMarkdown};
