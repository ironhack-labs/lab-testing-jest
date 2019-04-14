/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/2.0/introduction
*/

describe("centsToDecimals function", function () { // Describes the suite / group of tests
  it("Returns undefined when parameter passed is a string", function () {
    expect(centsToDecimals('abcdef')).toEqual(undefined);
  });

  it("Returns undefined when parameter passed is a string containing number characters", function () {
    // ... complete the below test assertion
    expect(Function_To_Test(parameter)).toEqual(expectedResult);
  });

  it("Returns undefined when NaN value is passed as a parameter", function () {
    expect(centsToDecimals(NaN)).toEqual(undefined);
  });

  it("Returns undefined when undefined value is passed as a parameter", function () {
    // ... complete the below test assertion 
    expect(Function_To_Test(parameter)).toEqual(expectedResult);    
  });

  it("Returns undefined when parameter is not passed.", function () {
    // ... complete the below test assertion
    expect(Function_To_Test(parameter)).toEqual(expectedResult);    

  });

  it("Returns undefined when parameter is not passed.", function () {
    // ... complete the below test assertion
    expect(Function_To_Test(parameter)).toEqual(expectedResult);    
  });

  it("Should convert a number of cents to a string represenation of a floating point number.", function () {
    // ... complete the below test assertion
    expect(Function_To_Test(parameter)).toEqual(expectedResult);    
  });

  it("Should convert a number of cents and return a string represenation of a floating point number.", function () {
    // ... complete the below test assertion
    expect(Function_To_Test(parameter)).toEqual(expectedResult);    
  });

  it("Should return a string representation of a number with `$` sign appended at the end.", function () {
    // ... complete the below test assertion
    expect(Function_To_Test(parameter)).toEqual(expectedResult);    
  });
});
