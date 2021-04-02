describe('Hello Ironhack function', () => {
  // Describes the group of tests
  it('Greets an Ironhacker', () => {
    //  Describes the test unit itself

    //  Test assertion. Here the function is called with test parameters and expected result is specified `toEqual`
    expect(helloIronhack()).toEqual('Hello Ironhackers!');
    //  Method `.toEqual` is called a "matcher" and is used to check the returned result when calling a function
  });
});

// doing my own thing to remember later

describe('alphabetPosition function', () => {
  it('should be a function', function () {
    expect(typeof alphabetPosition).toBe('function');
  });
  it('should receive 1 argument', () => {
    expect(alphabetPosition.length).toEqual(1);
  });
  it('should return a string', () => {
    expect(typeof alphabetPosition('')).toEqual('string');
  });
  it('Should pass those tests', () => {
    expect(alphabetPosition("The sunset sets at twelve o' clock.")).toEqual(
      '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
    );
    expect(alphabetPosition('The narwhal bacons at midnight.')).toBe(
      '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
    );
  });
});

describe('gooseFilter function', () => {
  it('Should pass the Mixed list test', () => {
    expect(
      gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
      ])
    ).toEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish']);
  });
});

// remove Testp5.
// assertDeepEquals becomes expect
// add ).toEqual( in the right place
describe('gooseFilter function - copy and paste from codewars basic modified', function () {
  it('Mixed list', function () {
    expect(
      gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
      ])
    ).toEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish']);
  });
  it('No geese', function () {
    expect(
      gooseFilter([
        'Mallard',
        'Barbary',
        'Hook Bill',
        'Blue Swedish',
        'Crested',
      ])
    ).toEqual(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested']);
  });
  it('All geese', function () {
    expect(
      gooseFilter([
        'African',
        'Roman Tufted',
        'Toulouse',
        'Pilgrim',
        'Steinbacher',
      ])
    ).toEqual([]);
  });
});
