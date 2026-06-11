#!/usr/bin/env node

// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// If run as a CLI, parse args and print result
if (require.main === module) {
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
  try {
    switch (op.toLowerCase()) {
      case 'add':
        // addition
        result = add(a, b);
        break;
      case 'subtract':
        // subtraction
        result = subtract(a, b);
        break;
      case 'multiply':
        // multiplication
        result = multiply(a, b);
        break;
      case 'divide':
        // division
        result = divide(a, b);
        break;
      default:
        console.error(`Unsupported operation: ${op}`);
        console.error('Supported operations: add, subtract, multiply, divide');
        process.exit(5);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(4);
  }

  console.log(result);
}

module.exports = { add, subtract, multiply, divide };
