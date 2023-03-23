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

// Return Negative

function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else if (num > 0) {
    return 0 - num;
  }
}

// The highest profit wins!

function minMax(arr){
  let newArr = [];
  newArr.push(arr.sort(function(a, b) {
    return a-b;
  })[0]);
  newArr.push(arr.sort(function(a, b) {
    return a-b;
  })[arr.length - 1]);
  return newArr;
}

// Beginner Series #3 Sum of Numbers

function getSum(a, b)
{
  let counter = 0;
   if (a < b) {
     for (let i = a; i <= b; i++) {
       counter += i;
     }
     return counter;
   } else if (b < a) {
     for (let i = b; i <= a; i++) {
       counter += i;
     }
     return counter;
   } else if (a === b) {
     return counter += a;
   }
}

// Sum Mixed Array

function sumMix(x){
  let counter = 0;
  for (let i = 0; i < x.length; i++) {
    counter += parseInt(x[i], 10);
  }
  return counter;
}

// String ends with?

function solution(str, ending){
  if (str.substr(str.length - ending.length, ending.length) === ending) {
    return true;
  } else {
    return false;
  }
}

// Find the stray number

function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1] &&
       numbers[i + 1] === numbers[i + 2]) {
      return numbers[i];
    } else if (numbers[i] !== numbers[i + 1] &&
       numbers[i] === numbers[i + 2]) {
      return numbers[i + 1];
    }
  }
}

// Testing 1-2-3

var number=function(array){
  let counter = 1;
  if (array[0] === undefined) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      array[i] = `${counter}: ` + array[i];
      counter++;
    }
    return array;
  }
}

// Grasshopper - Summation

var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// L1: Set Alarm

function setAlarm(employed, vacation){
  if (employed === true &&
     vacation === false) {
    return true;
  } else {
    return false;
  }
}

// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let newArray = [];
  let positiveCount = 0;
  let negativeSum = 0;
  if (input === null) {
    return [];
  } else if (input[0] === undefined) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positiveCount++;
      } else if (input[i] < 0) {
        negativeSum += input[i];
      }
    }
    newArray.push(positiveCount);
    newArray.push(negativeSum);
  }
  return newArray;

// Simple multiplication

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
}

// Is it even?

function testEven(n) {
  return (n % 2 === 0 ? true : false);
}

// Money, Money, Money

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    let interestAmount = principal * interest;
    let taxAmount = tax * interestAmount;
    let combinedInterestTax = interestAmount - taxAmount;
    principal += combinedInterestTax;
    years++;
    console.log(principal);
    console.log(years);
  }
  return years;
}

// I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
    let petalPhrases = [
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly",
      "not at all"
    ];
    let counter = 0;
    while (nbPetals > 1) {
      nbPetals--;
      counter++;
      if (counter === 6) {
        counter = 0;
      }
      petalPhrases[counter];
    }
    return petalPhrases[counter];
}

// Find the first non-consecutive number

function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1]) {
      return null;
    } else if (arr[i + 1] - arr[i] !== 1) {
      return arr[i + 1];
    }
  }
}

// You Can't Code Under Pressure #1

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// Remove First and Last Character

function removeChar(str){
 return str.substr(1, str.length -2);
};

// Filter out the geese

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let gooselessArray = birds.filter(function(el) {
    return !geese.includes(el);
  })
  return gooselessArray;
};

// Difference of Volumes of Cuboids

function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

// Find the middle element

function gimme (triplet) {
  let unsortedTriplet = triplet.map(function(el, i) {
    return { index: i, value: el };
  });
  triplet.sort(function(a, b) {
    return a-b;
  });
  for (let i = 0; i < unsortedTriplet.length; i++) {
    if (unsortedTriplet[i].value === triplet[1]) {
      return unsortedTriplet[i].index;
    }
  }
}

// Opposites Attract

function lovefunc(flower1, flower2){
  let sheLovesMe = flower1 + flower2;
  if (sheLovesMe % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

// Two to One

function longest(s1, s2) {
  s1 = s1 + s2;
  console.log(s1);
  let s3 = [];
  let s4 = [];
  for (let i = 0; i < s1.length; i++) {
    s3.push(s1[i]);
  }
  s3.sort();
  console.log(s3);
  for (let i = 0; i < s3.length; i++) {
    if (s3[i] !== s3[i - 1]) {
      s4.push(s3[i]);
    }
  }
  return s4.join('');
}

// Get the Middle Character

unction getMiddle(s)
{
  if (s.length % 2 === 0) {
    return s[(s.length / 2) - 1] + s[s.length / 2];
  } else if (s.length % 2 === 1) {
    return s[Math.round((s.length / 2) - 1)];
  }
}

// MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}

// Convert number to reversed array of digits

function digitize(n) {
  n = n.toString();
  let a = [];
  for (let i = n.length - 1; i >= 0; i--) {
    a.push(+n[i]);
  }
  return a;
}
