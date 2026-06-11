#!/usr/bin/env node

// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division

// Usage examples:
// node src/calculator.js add 2 3
// node src/calculator.js subtract 5 2
// node src/calculator.js multiply 4 2
// node src/calculator.js divide 10 2

const [,, op, aStr, bStr] = process.argv;

function usage() {
  console.error('Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>');
  process.exit(2);
}

if (!op || !aStr || !bStr) usage();

const a = Number(aStr);
const b = Number(bStr);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Operands must be valid numbers');
  process.exit(3);
}

let result;
switch (op.toLowerCase()) {
  case 'add':
    // addition
    result = a + b;
    break;
  case 'subtract':
    // subtraction
    result = a - b;
    break;
  case 'multiply':
    // multiplication
    result = a * b;
    break;
  case 'divide':
    // division
    if (b === 0) {
      console.error('Error: Division by zero');
      process.exit(4);
    }
    result = a / b;
    break;
  default:
    console.error(`Unsupported operation: ${op}`);
    console.error('Supported operations: add, subtract, multiply, divide');
    process.exit(5);
}

// Print the result to stdout
console.log(result);
