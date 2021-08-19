const assertEqual = (actual, expected) => {
  return actual === expected ?
    `✅ Assertion Passed: ${actual} === ${expected}`
    : `⛔️ Assertion Failed: ${actual} !== ${expected}`;
};

// Test Code
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual('Johnny', 'Johnny');
assertEqual(34, 3);