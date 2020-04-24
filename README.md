![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Intro to testing with Jasmine

![img](https://camo.githubusercontent.com/d3afdfc8b8075b9daf5109c4af7b8b07ab2d7c04/68747470733a2f2f7261776769746875622e636f6d2f6a61736d696e652f6a61736d696e652f6d61737465722f696d616765732f6a61736d696e652d686f72697a6f6e74616c2e737667)

## Introduction

The scope of this exercise is to get familiar with the Jasmine testing framework and learn how to write basic tests.

Up to this point, you have worked with tests in almost every lab. Tests were written prior and you would develop solution based on tests. Today you will take a bit different turn, and develop tests for already _"working"_ solution. The goal is to get basic understanding of how testing frameworks work in general and to get familiar with some of the most used testing approaches.

A friendly reminder - you will be developing tests for just one small piece of code, just one function better saying. In this case, we are talking about you developing _unit_ tests, since you will be testing just one _"unit"_ or a small component of your (imaginary) whole application. To learn more about unit (and integration) tests, check the extra resources section.

## Requirements

    expect(Function_To_Test(parameter)).toEqual(Expected_Result);

- Fork this repo
- Then clone this repo.

## Submission

- Upon completion, run the following commands:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

- Create Pull Request so your TAs can check up your work.

## Test, test, test!

In this exercise, **your goal is to rewrite the simple example tests that were written just with the `console.log()` method, and instead, implement them using the Jasmine framework.**

Here is the example of a single test, which was written using the `console.log()` and then re-written using the proper Jasmine syntax and specific Jasmine methods:

```javascript
function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) {
    return undefined;
  }

  let result = centValue / 100;

  return result.toFixed(2) + '$';
}

// Test Specs:

// Description:
// function centsToDecimals()

// Tests

// 1: Should return undefined when the parameter passed is a string
console.log('-->  should return undefined when parameter passed is a string');

// you  are  given  the following:
console.log(centsToDecimals('abcdef') === undefined);

// this is the Jasmine expression that needs to  be updated accordingly:
expect(Function_To_Test(parameter)).toEqual(Expected_Result);

// solution: replace placeholders with corresponding function/value
expect(centsToDecimals('abcdef')).toEqual(undefined);
```

Following the same logic, go through the rest of tests, making sure they are passing in the end.

### Getting Started

After cloning the repository, open the file `spec/cents-to-decimals.spec.js`. You will be working in this file.

The initial skeleton of the test suites is already set in place; however, you will notice that each test assertion `it(...)` has a placeholder saying `Function_To_Test`, instead of calling the function to test. As well, you will notice that each test assertion is missing the expected result value in the `toEqual()` (or `toBe()`) block and is instead having a placeholder `Expected_Result`.

<br>

Use the first example as the starting point and a reference for writing the rest of the tests.

```js
// Use this test suite as a starting point/reference.
it('Returns undefined when parameter passed is a string', () => {
  expect(centsToDecimals('abcdef')).toEqual(undefined);
});
```

:wink: In case you need a bit more help, check the test specs file `spec/hello-ironhacker.spec.js` as an additional reference.

### Run The Tests

To run the tests, open `SpecRunner.html` in the browser.

### Suites

#### [`describe()`](https://jasmine.github.io/tutorials/your_first_suite) Your Tests

The [describe](https://jasmine.github.io/api/edge/global.html#describe) function is used for grouping related specs (tests), typically each test file has one at the top level.

The string parameter is for naming the collection of specs.

#### Write A Test - [`it()`](https://jasmine.github.io/api/edge/global.html#it)

The [`it()`](https://jasmine.github.io/api/edge/global.html#it) matcher defines a single spec (test). It should contain one or more `expectations` that test the state of the code.

#### [Matchers - `toBe()`, `toEqual()`, etc.](https://jasmine.github.io/api/edge/matchers.html)

Additionally, depending on the scenario that you are testing for you may decide to use different matchers, such as: [`toBe`](https://jasmine.github.io/api/edge/matchers.html#toBe), [`toEqual`](https://jasmine.github.io/api/edge/matchers.html#toEqual), etc.
You can see the full list of Jasmine matchers [here](https://jasmine.github.io/api/edge/matchers.html).

## Extra Resources

- [Difference between unit and integration tests - StackOverflow](https://stackoverflow.com/questions/5357601/whats-the-difference-between-unit-tests-and-integration-tests)

**Happy coding!** :heart:
