// USING `console.log()`


// Test Specs:

// Description:
// function centsToDecimals()



// Tests

// Should return undefined when the parameter passed is a string

// Should return undefined when NaN or undefined value is passed as a parameter

// Should return undefined when the parameter is not passed

// Should convert value from cents to floating point number with 2 decimals

// Should return a string representation of a number with `$` sign appended at the end





// Test Specs:

// Description:
console.log(
  "%c function centsToDecimals() :",
  "background: black; color: white"
);



// Tests:

// 1
console.log("\n -->  should return undefined when parameter passed is a string");

console.log(centsToDecimals("abcdef") === undefined);
console.log(centsToDecimals("1000") === undefined);


// 2
console.log(
  "\n -->  should return undefined when NaN or undefined value is passed as a parameter"
);

console.log(centsToDecimals(undefined) === undefined);
console.log(centsToDecimals(NaN) === undefined);


// 3
console.log("\n -->  should return undefined when the parameter is not passed");
console.log(centsToDecimals() === undefined);


// 4
console.log(
  "\n -->  should convert value from cents to a string, representing floating point number with 2 decimals"
);

console.log(centsToDecimals(1000).slice(0, 5) === "10.00"); 
console.log(centsToDecimals(50273).slice(0, 6) === "502.73");
// Instead of the entire string, we just want numbers without currency   -> 10.00$


// 5
console.log(
  "\n -->  should return a string representation of a number with `$` sign appended at the end"
);

console.log(centsToDecimals(0) === "0.00$");
console.log(centsToDecimals(999) === "9.99$");

