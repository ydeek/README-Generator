var fs = require("fs");
var inq = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    // console.log("Hello from init")
    inq.prompt([{
        type: "input",
        name: "title",
        message: "Please provide your project title",
        default: "Generate a README.md file"
    }, {
        type: "input",
        name: "description",
        message: "Please describe your project"
    }, {
        type: "input",
        name: "installation",
        message: "Provide your installation instructions here"
    }, {
        type: "input",
        name: "usage",
        message: "What is the usage of the project?"

    }, {
        type: "list",
        name: "licence",
        message: "please pick a licence ",
        choices: ["MIT", "BSD"]
    }, {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties if any"
    }, {
        type: "input",
        name: "test",
        message: "Please provide the project tests"
    }, {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    }, {
        type: "input",
        name: "username",
        message: "What is your github username?"
    }, {
        type: "input",
        name: "repository",
        message: "What is your repository link?"


    }]).then(res => {
        console.log(res)
        const file_content = generateMarkdown(res)
        fs.writeFileSync("READ_AGAIN.md", file_content)
    })
}

// function call to initialize program
init();

