const{helloIronhack} = require('../src/hello-ironhacker') //Para os testes rodarem é preciso digitar essa linha de código para importar o respectivo arquivo do src

describe('Hello Ironhack function', () => {
  // Describes the group of tests
  it('should greet an Ironhacker', () => {
    //  Describes the test unit itself

    //  Test assertion. Here the function is called with test parameters and expected result is specified `toEqual`
    expect(helloIronhack()).toEqual('Hello Ironhackers!');
    //  Method `.toEqual` is called a "matcher" and is used to check the returned result when calling a function
  });
});
