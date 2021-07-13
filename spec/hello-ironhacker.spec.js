const {helloIronhack} = require("../src/hello-ironhacker")

describe('Hello Ironhack function', () => {
  it ('should be a function', () => {
    expect (typeof helloIronhack).toBe('function');
  })

  it('should greet an Ironhacker', () => {
    expect ('Hello Ironhackers!')
  

    //  Test assertion. Here the function is called with test parameters and expected result is specified `toEqual`
    expect(helloIronhack()).toEqual('Hello Ironhackers!');
    //  Method `.toEqual` is called a "matcher" and is used to check the returned result when calling a function
  });
});
