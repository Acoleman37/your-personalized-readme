// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else {
    return license;
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const {tableofcontents, tests, features, credits, ...otherData} = data;
  return `# ${otherData.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${otherData.username}/${otherData.repoName}?style=flat&logo=appveyor)
  ![badge](https://img.shields.io/badge/license-${renderLicenseBadge(otherData.license)}-blue)

  ## Description
  
  ${otherData.description}

  ## Installation

  ${otherData.installation}

  ## Usage

  ${otherData.usage}

  ## Questions

  ${otherData.questions} </br>
    
  GitHub: https://github.com/${otherData.username} </br>
  Email: ${otherData.email}

  ## Tests

  ${tests}

  ## Features

  ${features}

  ## Contributing

  ${otherData.contribution}

  ## Credits

  ${credits}

  ## License

  This project was made with the ${otherData.license} license.

  `;
}

module.exports = generateMarkdown;
