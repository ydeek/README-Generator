// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description 
  ${data.description}

  ## Table of Contents 

`;
}

function private_function() {
  console.log("This only works here")
}

module.exports = {
  generateMarkdown
}
