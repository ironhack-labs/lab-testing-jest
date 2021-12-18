function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) {
    return undefined;
  }
  let result = centValue / 100;
  return result.toFixed(2) + '$';
}

it('should return undefined when parameter passed is a string', () => {
  expect(centsToDecimals('abcdef')).toEqual(undefined);
});

// The following is required to make automated tests run. Please ignore it.
if (typeof module !== 'undefined') module.exports = { centsToDecimals };
