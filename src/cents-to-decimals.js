function centsToDecimals(centValue) {
  if (typeof centValue !== 'number' || isNaN(centValue)) {
    return undefined;
  }

  let result = centValue / 100;

  return result.toFixed(2) + '$';
}

// The following is required to make automated tests run. Please ignore it.
if (typeof module !== 'undefined') module.exports = { centsToDecimals };

console.log(typeof centsToDecimals(1000).slice(0, 5));