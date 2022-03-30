/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
https://jestjs.io/docs/using-matchers
*/

const { centsToDecimals } = require("../src/cents-to-decimals");

describe('centsToDecimals function', () => {
  // Describes the suite / group of tests

  // Use this test suite as a starting point/reference.

  it('should returns undefined when parameter passed is a string.', () => {
    // console.log(centsToDecimals('abcdef') === undefined);

    // expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals('abcdef')).toEqual(undefined);
  });

  // Fix the below test suites:

  it('should returns undefined when parameter passed is a string containing number characters.', () => {
    // console.log(centsToDecimals('12345') === undefined);

    // ... complete the test assertion below
    expect(centsToDecimals('12345')).toEqual(undefined);
  });

  it('should returns undefined when NaN value is passed as a parameter.', () => {
    // console.log(centsToDecimals(NaN) === undefined);

    // ... complete the test assertion below
    expect(centsToDecimals(NaN)).toEqual(undefined);
  });

  it('should returns undefined when undefined value is passed as a parameter', () => {
    // console.log(centsToDecimals(undefined) === undefined);

    // ... complete the test assertion below
    expect(centsToDecimals(undefined)).toEqual(undefined);
  });

  it('should returns undefined when parameter is not passed.', () => {
    // console.log(centsToDecimals() === undefined);

    // ... complete the test assertion below
    expect(centsToDecimals()).toEqual(undefined);
  });

  it('Should convert a number of cents to a string representation in a floating number format.', () => {
    // console.log(centsToDecimals(1000).slice(0, 5) === '10.00');

    // ... complete the test assertion below
    expect(centsToDecimals(1000).slice(0,5)).toEqual('10.00');

    // console.log(centsToDecimals(50273).slice(0, 6) === '502.73');

    // ... complete the test assertion below
    expect(centsToDecimals(50273).slice(0,6)).toEqual('502.73');

    // console.log(centsToDecimals(0).slice(0, 4) === '0.00');

    // ... complete the test assertion below
    expect(centsToDecimals(0).slice(0,4)).toEqual('0.00');
  });

  it('Should return a string representation of a number with `$` sign appended at the end.', () => {
    // console.log(centsToDecimals(1000) === '10.00$');

    // ... complete the test assertion below
    expect(centsToDecimals(1000)).toEqual('10.00$');

    // console.log(centsToDecimals(0) === '0.00$');

    // ... complete the test assertion below
    expect(centsToDecimals(0)).toEqual('0.00$');
  });
});
