## Jasmine Testing

Rewrite the below `console.log` test assertions using Jasmine:

To run the tests open `SpecRunner.html` in the browser.


```js
// Create a function that converts cents to decimal value
// Function should return undefined when parameter passed is a string
// Function should return undefined when NaN or undefined value is passed as a parameter
// Function should return undefined when parameter is not passed
// Function should convert value from cents to floating point number with 2 decimals
// Function should return a string representation of a number with `$` sign appended at the end

function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) return undefined;

  let result = centValue / 100;

  return result.toFixed(2) + "$";
}


// Simple tests

console.warn(' -->  Function should return undefined when parameter passed is a string');
console.log(centsToDecimals('abcdef') === undefined);
console.log(centsToDecimals('1000') === undefined);


console.warn(' -->  Function should return undefined when NaN or undefined value is passed as a parameter');
console.log(centsToDecimals(undefined) === undefined);
console.log(centsToDecimals(NaN) === undefined);

console.warn(' -->  Function should return undefined when parameter is not passed');
console.log(centsToDecimals() === undefined);

console.warn(' -->  Function should convert value from cents to floating point number with 2 decimals');
console.log(centsToDecimals(1000) === "10.00$");
console.log(centsToDecimals(50273) === "502.73$");

console.warn(' -->  Function should return a string representation of a number with `$` sign appended at the end');
console.log(centsToDecimals(0) === "0.00$");

```
