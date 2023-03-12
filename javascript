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

// Grasshopper - Grade book

function getGrade (s1, s2, s3) {
  if ((s1 + s2 + s3) / 3 >= 90) {
    return 'A';
  } else if ((s1 + s2 + s3) / 3 >= 80 && (s1 + s2 + s3) / 3 < 90) {
    return 'B';
  } else if ((s1 + s2 + s3) / 3 >= 70 && (s1 + s2 + s3) / 3 < 80) {
    return 'C';
  } else if ((s1 + s2 + s3) / 3 >= 60 && (s1 + s2 + s3) / 3 < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// Grasshopper - Debug sayHello

function sayHello(name) {
  return 'Hello, ' + name;
}

// Sort and Star

function twoSort(s) {
  s = s.sort();
  return s[0].split('').join('***');
}

// Grasshopper - Messi goals function

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// A Needle in the Haystack

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return 'found the needle at position ' + i;
    }
  }
}

// Calculate BMI

function bmi(weight, height) {
  
  let calculatedBmi = weight / Math.pow(height, 2);
  
  if (calculatedBmi <= 18.5) {
    return "Underweight";
  } else if (calculatedBmi > 18.5 && calculatedBmi <= 25) {
    return "Normal";
  } else if (calculatedBmi > 25 && calculatedBmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
    
}

// Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  
  switch (current) {
      case 'green':
        return 'yellow';
        break;
      case 'yellow':
        return 'red';
        break;
      default:
        return 'green';
        break;
  }

}
