# Jasmine Testing



<br>

![img](https://camo.githubusercontent.com/d3afdfc8b8075b9daf5109c4af7b8b07ab2d7c04/68747470733a2f2f7261776769746875622e636f6d2f6a61736d696e652f6a61736d696e652f6d61737465722f696d616765732f6a61736d696e652d686f72697a6f6e74616c2e737667)



The scope of this exercise is to get familiar with the Jasmine testing framework and learning how to write basic tests. During the exercise you will  rewrite the below simple example tests that were written using `console.log` and instead implement them using the Jasmine framework.

The simple `console.log` tests were given below as a reference.



##### `example.js`

```js
function centsToDecimals(centValue) {
  if (typeof centValue !== "number" || isNaN(centValue)) {
    return undefined;
  }

  let result = centValue / 100;

  return result.toFixed(2) + "$";
}


// USING `console.log()`


// Test Specs:

// Description:
// function centsToDecimals()



// Tests

// Should return undefined when the parameter passed is a string

// Should return undefined when NaN or undefined value is passed as a parameter

// Should return undefined when the parameter is not passed

// Should convert value from cents to floating point number with 2 decimals


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


```



<br>



### Getting Started



After cloning the repository, open the file`spec/centsToDecimalsSpec.js`. You will be working in this file.



The initial skeleton of the test suites is already set in place, however you will notice that each test assertion `it(...)` has a placeholder saying `Function_To_Test`, instead of calling the function to test. 

As well you'll notice that each test assertion is missing the expected result value in the `toEqual()` ( or `toBe()`) block and is instead having a placeholder `Expected_Result`.



<br>

Use the first example as the starting point and a reference for writting the rest of the tests.

```js
 // Use this test suite as a starting point/reference.
it("Returns undefined when parameter passed is a string", function () {
  expect(centsToDecimals('abcdef')).toEqual(undefined);
});
```



<br>



Additionaly you may want to take a look at the test specs file `spec/hello-ironhacker-spec.js` as an additional reference.



<br>



#### Suites: [`describe()`](https://jasmine.github.io/tutorials/your_first_suite) Your Tests

The [describe](https://jasmine.github.io/api/edge/global.html#describe) function is used for grouping related specs (tests), typically each test file has one at the top level. 

The string parameter is for naming the collection of specs.



<br>

#### Suites: Write A Test -  [`it()`](https://jasmine.github.io/api/edge/global.html#it) 

The [`it()`](https://jasmine.github.io/api/edge/global.html#it) matcher defines a single spec (test). It should contain one or more `expectations` that test the state of the code.



<br>

#### [Matchers - `toBe()`, `toEqual()`, etc.](https://jasmine.github.io/api/edge/matchers.html)

Additionally, depending on the scenario that you are testing for you may decide to use different matchers, such as: [`toBe`](https://jasmine.github.io/api/edge/matchers.html#toBe), [`toEqual`](https://jasmine.github.io/api/edge/matchers.html#toEqual), etc.
You can see the full list of Jasmin matchers [here](https://jasmine.github.io/api/edge/matchers.html).

<br>



## Run The Tests

To run the tests open `SpecRunner.html` in the browser.



<br>
