// function 1 - hello world

/ Write a function "greet" that returns "hello world!"

function greet() {
  return "hello world!";
}

// Sentence Smash

function smash (words) {
  return words.join(' ');
};

// Convert Number to a String!

function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

// Even or Odd

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else if (number % 2 !== 0) {
    return "Odd";
  }
}

// Grasshopper - Check for factor

function checkForFactor (base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}
