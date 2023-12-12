/* 1. Convert Minutes into Seconds.

Write a function that takes an integer minutes and converts it to seconds.

*Examples*

    convert(5) ➞ 300
    convert(3) ➞ 180
    convert(2) ➞ 120 */

function secondsToMinutes(number) {
  console.log(number * 60);
  return number * 60;
}

secondsToMinutes(10);

/* 2. Return the Next Number from the Integer Passed.

Create a function that takes a number as an argument, increments the number by +1 and returns the result.

*Examples*

    addition(0) ➞ 1
    addition(9) ➞ 10
    addition(-3) ➞ -2 */

function plusOne(number) {
  console.log(number + 1);
  return number + 1;
}
plusOne(5);

/* 3. Area of a Triangle.

Write a function that takes the base and height of a triangle and return its area.

*Examples*

    triArea(3, 2) ➞ 3
    triArea(7, 4) ➞ 14
    triArea(10, 10) ➞ 50 */

function triangleArea(base, height) {
  console.log((base * height) / 2);
}

triangleArea(3, 2);

/* 4. Convert Age to Days.

Create a function that takes the age in years and returns the age in days.

*Examples*

    calcAge(65) ➞ 23725
    calcAge(0) ➞ 0
    calcAge(20) ➞ 7300 */

function ageToDays(number) {
  console.log(number * 365);
  return number * 365;
}

ageToDays(65);

/* 5. Power Calculator.

Create a function that takes voltage and current and returns the calculated power.

*Examples*

    circuitPower(230, 10) ➞ 2300
    circuitPower(110, 3) ➞ 330
    circuitPower(480, 20) ➞ 9600 */

function calculatePower(voltage, current) {
  console.log(voltage * current);
  return voltage * current;
}

calculatePower(230, 10);

/* 6. Return Something to Me!.

Write a function that returns the string "something" joined with a space " " and the given argument a.

*Examples*

    giveMeSomething("is better than nothing") ➞ "something is better than nothing"
    giveMeSomething("Bob Jane") ➞ "something Bob Jane"
    giveMeSomething("something") ➞ "something something" */

function textSomething(a) {
  console.log(`something ${a}`);
  return `something ${a}`;
}

textSomething("is better");

/* 7. Sum of Polygon Angles.

Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

*Examples*

    sumPolygon(3) ➞ 180
    sumPolygon(4) ➞ 360
    sumPolygon(6) ➞ 720 */

function sumPolygon(number) {
  console.log((number - 2) * 180);
  return (number - 2) * 180;
}

sumPolygon(3);

/* 8. Convert Hours and Minutes into Seconds.

Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

*Examples*

    convert(1, 3) ➞ 3780
    convert(2, 0) ➞ 7200
    convert(0, 0) ➞ 0 */

function convertToSeconds(a, b) {
  result1 = a * 3600;
  result2 = b * 60;
  console.log(result1 + result2);
  return result1 + result2;
}

convertToSeconds(1, 3);
