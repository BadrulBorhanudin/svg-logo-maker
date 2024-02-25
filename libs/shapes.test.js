// Import the shape classes (Triangle, Square, Circle) from the "shapes.js" module
const { Triangle, Square, Circle } = require("./shapes.js");

// Describe block for testing the Triangle class
describe("Triangle test", () => {
  // Test case for a triangle with a blue background
  test("test for a triangle with a blue background", () => {
    // Create an instance of the Triangle class
    const shape = new Triangle();
    
    // Set the color of the triangle to "blue"
    shape.setColor("blue");

    // Expect the rendered SVG representation to match the expected value
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

// Describe block for testing the Square class
describe("Square test", () => {
  // Test case for a square with a purple background
  test("test for a square with a purple background", () => {
    // Create an instance of the Square class
    const shape = new Square();
    
    // Set the color of the square to "purple"
    shape.setColor("purple");

    // Expect the rendered SVG representation to match the expected value
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    );
  });
});

// Describe block for testing the Circle class
describe("Circle test", () => {
  // Test case for a circle with a #ca00ca background
  test("test for a circle with a #ca00ca background", () => {
    // Create an instance of the Circle class
    const shape = new Circle();
    
    // Set the color of the circle to "#ca00ca"
    shape.setColor("#ca00ca");

    // Expect the rendered SVG representation to match the expected value
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
    );
  });
});