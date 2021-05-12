/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/api/3.4/global
*/

describe('centsToDecimals function', () => {
  it('Returns undefined when parameter passed is a string.', () => {
    expect(centsToDecimals('abcdef')).toEqual(undefined);
  });

  it('Returns undefined when parameter passed is a string containing number characters.', () => {
    expect(centsToDecimals('12345')).toEqual(undefined);
  });

  it('Returns undefined when NaN value is passed as a parameter.', () => {
    expect(centsToDecimals(NaN)).toEqual(undefined);
  });

  it('Returns undefined when undefined value is passed as a parameter', () => {
    expect(centsToDecimals(undefined)).toEqual(undefined);
  });

  it('Returns undefined when parameter is not passed.', () => {
    expect(centsToDecimals()).toEqual(undefined);
  });

  it('Should convert a number of cents to a string representation in a floating number format.', () => {
    // console.log(centsToDecimals(1000).slice(0, 5) === '10.00');
    expect(centsToDecimals(1000).slice(0, 5)).toEqual('10.00');

    // console.log(centsToDecimals(50273).slice(0, 6) === '502.73');
    expect(centsToDecimals(50273).slice(0, 6)).toEqual('502.73');

    // console.log(centsToDecimals(0).slice(0, 4) === '0.00');
    expect(centsToDecimals(0).slice(0, 4)).toEqual('0.00');
  });

  it('Should return a string representation of a number with `$` sign appended at the end.', () => {
    // console.log(centsToDecimals(1000) === '10.00$');
    expect(centsToDecimals(1000)).toEqual('10.00$');

    // console.log(centsToDecimals(0) === '0.00$');
    expect(centsToDecimals(0)).toEqual('0.00$');
  });
});
