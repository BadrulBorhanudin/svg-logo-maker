# 10 Object-oriented Programming: SVG Logo Maker

## My Task

My task is to build a Node.js command-line application from scratch since there is no starter code for this assignment-that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

Because this application won’t be deployed, I’ll provide a link to a walkthrough video that demonstrates its functionality and passes all of the tests. The link to the video is added it to the README of my project.

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./Images/10-oop-homework-demo.png)

## Running the Application

This Challenge combines many of the skills covered so far. In addition to the User Story and Acceptance Criteria, I’ve been provided some guidelines to help me get started.

My application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests as per the screenshot below:

![Screenshot showing a test is ran.](./Images/test-screenshot.png)

[Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) is used for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

A series of questions will be prompted as per the screenshot below:

![Screenshot showing the program is ran.](./Images/run-screenshot.png)

## Notes

- [Click here for the walkthrough video demonstrating the functionality of the application.](https://drive.google.com/file/d/1Yd7NspmFQ2jmqoYyjzkP19B1Qw93sKQC/view?usp=sharing)

- [Click here for the URL of the GitHub repository, with a unique name and a README that describes this project.](https://github.com/BadrulBorhanudin/svg-logo-maker)
