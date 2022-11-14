const getLicenseData = require('./getLicenseData');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, contributions, tests, license} = data;

  const {badge: licenseBadge, text: licenseText}  = getLicenseData(license);

  const readmeContent =
      `${licenseBadge}
  # ${title}  
  ## Description  
  ${description}
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [Contributions](#Contributions)
  4. [Tests](#Tests)
  ## Installation  
  ${installation}
  ## Usage  
  ${usage}
  ## Contributions  
  ${contributions}  
  ## Tests  
  ${tests}
  ## License  
  ${licenseText}`;

  return readmeContent;
}

module.exports = generateMarkdown;
