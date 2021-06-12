/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
https://jestjs.io/docs/using-matchers
*/
const { centsToDecimals } = require("../src/cents-to-decimals");

describe('centsToDecimals function', () => {
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals('12345')).toEqual(undefined);
  });

  it('should returns undefined when NaN value is passed as a parameter.', () => {
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals(NaN)).toEqual(undefined);
  });

  it('should returns undefined when undefined value is passed as a parameter', () => {
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals(undefined)).toEqual(undefined);
  });

  it('should returns undefined when parameter is not passed.', () => {
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals()).toEqual(undefined);
  });

  it('Should convert a number of cents to a string representation in a floating number format.', () => {
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals(1000).slice(0, 5)).toEqual('10.00');      
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals(50273).slice(0, 6)).toEqual('502.73');
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals(0).slice(0, 4)).toEqual('0.00');
  });

  it('Should return a string representation of a number with `$` sign appended at the end.', () => {
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals(1000)).toEqual('10.00$');
    expect(Function_To_Test(parameter)).toEqual(Expected_Result);
    expect(centsToDecimals(0)).toEqual('0.00$');
  });
});