/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/api/3.4/global
*/

describe('centsToDecimals function', () => {

  it('Returns undefined when parameter passed is a string.', () => {

    expect(centsToDecimals('abcdef')).toEqual(undefined);
  });

  it('Returns undefined when parameter passed is a string containing number characters.', () => {
    expect(centsToDecimals('12345')).toBeUndefined();
  });

  it('Returns undefined when NaN value is passed as a parameter.', () => {
    expect(centsToDecimals(NaN)).toBeUndefined();
  });

  it('Returns undefined when undefined value is passed as a parameter', () => {
    expect(centsToDecimals(undefined)).toBeUndefined();
  });

  it('Returns undefined when parameter is not passed.', () => {
    expect(centsToDecimals()).toBeUndefined();
  });

  it('Should convert a number of cents to a string representation in a floating number format.', () => {
    expect(centsToDecimals(1000).slice(0, 5)).toBe('10.00');
    expect(centsToDecimals(50273).slice(0, 6)).toBe('502.73');
    expect(centsToDecimals(0).slice(0, 4)).toBe('0.00');
  });

  it('Should return a string representation of a number with `$` sign appended at the end.', () => {
    expect(centsToDecimals(1000)).toBe('10.00$');
    expect(centsToDecimals(0)).toBe('0.00$');
  });
});
