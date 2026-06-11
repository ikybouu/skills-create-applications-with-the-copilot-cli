#!/usr/bin/env node

// Supported operations:
// - addition
// - subtraction
// - multiplication
// - division
// - modulo
// - power (exponentiation)
// - square root

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

function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of negative number');
  return Math.sqrt(n);
}

// If run as a CLI, parse args and print result
if (require.main === module) {
  const args = process.argv.slice(2);
  const op = args[0];

  function usage() {
    console.error('Usage: node src/calculator.js <operation> <num1> [num2]\nSupported operations: add, subtract, multiply, divide, modulo, pow, power, sqrt');
    process.exit(2);
  }

  if (!op) usage();

  const opLower = op.toLowerCase();
  let a, b;

  try {
    if (opLower === 'sqrt' || opLower === 'squareroot') {
      if (args.length < 2) usage();
      a = Number(args[1]);
      if (Number.isNaN(a)) {
        console.error('Operand must be a valid number');
        process.exit(3);
      }
      const result = squareRoot(a);
      console.log(result);
      process.exit(0);
    } else {
      if (args.length < 3) usage();
      a = Number(args[1]);
      b = Number(args[2]);
      if (Number.isNaN(a) || Number.isNaN(b)) {
        console.error('Operands must be valid numbers');
        process.exit(3);
      }

      let result;
      switch (opLower) {
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
        case 'modulo':
        case 'mod':
          result = modulo(a, b);
          break;
        case 'pow':
        case 'power':
        case 'exp':
          result = power(a, b);
          break;
        default:
          console.error(`Unsupported operation: ${op}`);
          console.error('Supported operations: add, subtract, multiply, divide, modulo, pow, sqrt');
          process.exit(5);
      }

      console.log(result);
      process.exit(0);
    }
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(4);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
