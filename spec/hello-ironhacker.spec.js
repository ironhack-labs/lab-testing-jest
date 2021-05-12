describe('Hello Ironhack function', () => {
  // Describes the group of tests
  //Condición 1: Crear una funcion llamada helloIronhack
  it('should create a function named helloIronhack', () => {
    //Lo que espera de la condicion 1: que el tipo de dato de helloIronhack sea una funcion
    expect(typeof helloIronhack).toBe('function');
  });
  //Condicion 2: Saludar a un ironahcker
  it('Greets an Ironhacker', () => {
    //  Describes the test unit itself
    //  Test assertion. Here the function is called with test parameters and expected result is specified `toEqual`
    //Lo que espera de la condición 2: que devuelva un string "Hello Ironhacker!"
    expect(helloIronhack()).toEqual('Hello Ironhackers!');
    //  Method `.toEqual` is called a "matcher" and is used to check the returned result when calling a function
  });

});

