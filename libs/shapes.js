// Define a base class "Shape" to represent common properties of shapes
class Shape {
  constructor() {
    // Initialise color property
    this.color = "";
  }

  // Method to set the color of the shape
  setColor(colorVar) {
    this.color = colorVar;
  }
}

// Define a derived class "Triangle" that extends the "Shape" class
class Triangle extends Shape {
  // Method to render the SVG representation of a triangle
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Define a derived class "Square" that extends the "Shape" class
class Square extends Shape {
  // Method to render the SVG representation of a square
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

// Define a derived class "Circle" that extends the "Shape" class
class Circle extends Shape {
  // Method to render the SVG representation of a circle
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

// Export the derived classes (Triangle, Square, Circle) for use in other modules
module.exports = { Triangle, Square, Circle };