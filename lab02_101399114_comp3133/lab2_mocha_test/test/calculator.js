const assert = require('assert');
const calculator = require('../calculator.js');

console.log("Running test cases for calculator.js...");

// Function to display test results in your desired format
function testResult(testCase, expected, actual) {
    if (expected === actual) {
        console.log(`${testCase} expected result ${expected} PASS`);
    } else {
        console.log(`${testCase} expected result ${expected} FAIL`);
    }
}

// Test cases for add()
testResult('add(5, 2)', 7, calculator.add(5, 2));
testResult('add(5, 2)', 8, calculator.add(5, 2));

// Test cases for sub()
testResult('sub(5, 2)', 3, calculator.sub(5, 2));
testResult('sub(5, 2)', 5, calculator.sub(5, 2));

// Test cases for mul()
testResult('mul(5, 2)', 10, calculator.mul(5, 2));
testResult('mul(5, 2)', 12, calculator.mul(5, 2));

// Test cases for div()
testResult('div(10, 2)', 5, calculator.div(10, 2));
testResult('div(10, 2)', 2, calculator.div(10, 2));
