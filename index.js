// Import necessary modules and shapes from the "shapes" module
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./libs/shapes");

// Function to prompt the user for input
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Choose shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Check if the entered text is more than 3 characters
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        // If more than 3 characters, recursively call promptUser to ask the question again
        promptUser();
      } else {
        // If input is valid, call the writeToFile function to generate the SVG file
        writeToFile("logo.svg", answers);
      }
    });
}

// Function to generate the SVG file based on user input
function writeToFile(fileName, answers) {
  // Initialize an empty string to store the SVG content
  let svgString = "";

  // Start the SVG file with width, height, and XML namespace
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

  // Start a group element to contain the shape and text
  svgString += "<g>";

  // Insert the chosen shape into the SVG content
  svgString += `${answers.shape}`;

  // Initialise a variable to hold the specific shape object
  let shapeChoice;

  // Based on the chosen shape, add the corresponding SVG code to the string
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
  }

  // Add the text element to the SVG content with user-defined properties
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;

  // Close the group element
  svgString += "</g>";

  // Close the SVG file
  svgString += "</svg>";

  // Use the file system module to write the SVG file
  fs.writeFile(fileName, svgString, (err) => {
    // Log any errors or a success message to the console
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// Start the process by calling the promptUser function
promptUser();
