// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArray = [
  {
    name:`GNU AGPLv3`,
    url: `https://opensource.org/licenses/AGPL-3.0`
  },
  {
    name:`GNU GPLv3`,
    url: `https://opensource.org/licenses/GPL-3.0`
  },
  {
    name:`GNU LGPLv3`,
    url: `https://opensource.org/licenses/LGPL-3.0`
  },
  {
    name:`Mozilla Public License 2.0`,
    url: `https://opensource.org/licenses/MPL-2.0`
  },
  {
    name:`Apache License 2.0`,
    url: `https://opensource.org/licenses/Apache-2.0`
  },
  {
    name:`MIT License`,
    url: `https://opensource.org/licenses/MIT`
  },
  {
    name:`Boost Software License 1.0`,
    url: `https://opensource.org/licenses/BSL-1.0`
  },
  {
    name:`The Unlicense`,
    url: `https://opensource.org/licenses/unlicense`
  },
  {
    name:`ISC License`,
    url: `https://opensource.org/licenses/ISC`
  },
]


let license = data.license

function renderLicenseBadge () {
  if (license !== ``) {
    markdown +=   `[![GitHub license](https://img.shields.io/github/license/${data.username}/${data.repo})]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  if (license !== ``) {
    licenceIndex=licenseArray.indexOf(license)
    markdown += licenseArray[licenceIndex].url
  } else return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license !== ``) {
    markdown += `## License: ${license}`
  } else return ``
  renderLicenseLink()
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contents = `## Table of contents`
    if (data.installation !== ``) {
      contents += `[Installation](#installation)`
    };
    if (data.usage !== ``) {
      contents += `[Usage](#usage)`
    };
    if (data.contributing !== ``) {
      contents += `[Contributing](#contributing)`
    };
    if (data.license !== ``) {
      contents += `[License](#License)`
    };

  let markdown = 
  `# ${data.title}`

  renderLicenseBadge()
  
  `## Description
  
  ${data.description}`

  markdown += contents
  
  if (data.installation !== ``) {
    markdown += `## Installation\
    ${data.installation}`
  }

  if (data.usage !== ``) {
    markdown += `## Usage\
    ${data.usage}`
  }

  renderLicenseSection()
}

module.exports = generateMarkdown;
