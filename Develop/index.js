var fs = require("fs")
var inq = require("inquirer")
var utils = require("./utils/generateMarkdown");
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    console.log("Hello from init")
    inq.prompt([{
        type: "input",
        name: "description",
        message: "What is your name?"
    }, {
        type: "input",
        name: "confirmation",
        message: "Isthat your name?"
    }, {
        type: "input",
        name: "title",
        message: "How old are you?"


    }]).then(res => {
        console.log(res)
        const file_content = utils.generateMarkdown(res)
        fs.writeFile("READ_AGAIN.md", file_content, () => {
            console.log("I wrote a file")
        })
    })
}

// function call to initialize program
init();
