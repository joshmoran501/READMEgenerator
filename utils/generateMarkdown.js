// Array including all options for licences in the prompt section and URLs to information about the license.
const licenseArray = [
  {
    name:'GNU AGPLv3',
    url: `https://opensource.org/licenses/AGPL-3.0`
  },
  {
    name:'GNU GPLv3',
    url: `https://opensource.org/licenses/GPL-3.0`
  },
  {
    name:'GNU LGPLv3',
    url: `https://opensource.org/licenses/LGPL-3.0`
  },
  {
    name:'Mozilla Public License 2.0',
    url: `https://opensource.org/licenses/MPL-2.0`
  },
  {
    name:'Apache License 2.0',
    url: `https://opensource.org/licenses/Apache-2.0`
  },
  {
    name:'MIT License',
    url: `https://opensource.org/licenses/MIT`
  },
  {
    name:'Boost Software License 1.0',
    url: 'https://opensource.org/licenses/BSL-1.0'
  },
  {
    name:'The Unlicense',
    url: `https://opensource.org/licenses/unlicense`
  },
  {
    name:'ISC License',
    url: `https://opensource.org/licenses/ISC`
  },
  {
    name: 'Other',
    url: `Please add URL manually`
  },
]

function generateMarkdown(responses) {
  //Logical arguments to determine what is included in the table of contents. There will always be a license to table of contents will always exist. 
  let contents = `## Table of contents
  `
  if (responses.installation !== ``) {
    contents += `
* [Installation](#installation)`
  };
  if (responses.usage !== ``) {
    contents += `
* [Usage](#usage)`
  };
  if (responses.contributing !== ``) {
    contents += `
* [Contributing](#how-to-contribute)`
  };
  if (responses.license !== ``) {
    contents += `
* [License](#license)`
  };

// License is of type list, so there will always be an option, I chose what appears to be the most common licenses based on https://choosealicense.com/
  function renderLicenseLink() {
    licenceIndex=licenseArray.map(object => object.name).indexOf( responses.license)
    markdown += `
## License:

  This app utilizes ${responses.license}. For further information, please consult ${licenseArray[licenceIndex].url}.

  `
  } 

// Generate Markdown, License badge generated using the github repository. Must set licence in repository for shields.io to detect it.
  let markdown = 
  `# ${responses.title}

  ![GitHub license](https://img.shields.io/github/license/${responses.username}/${responses.repo})
  
## Description:
  
  ${responses.description}
  
  `

  markdown += contents
  
if (responses.installation !== ``) {
  markdown += `

## Installation:

  ${responses.installation}
  `
}

if (responses.usage !== ``) {
  markdown += `
## Usage:

  ${responses.usage}
  `
}

renderLicenseLink()


if (responses.contributing !== ``) {
  markdown += `
## How to Contribute:

  ${responses.contributing}
  `
}

if (responses.tests !== ``) {
  markdown += `
## Tests:

  ${responses.tests}
  `
}

// Questions section
markdown += `
## Questions?

  Github: [${responses.username}](https://github.com/${responses.username})

  Email: [${responses.email}](${responses.email})
  `
return markdown
}

module.exports = generateMarkdown;

