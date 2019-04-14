describe("Hello Ironhack function", function () { // Describes the group of tests
  it("Greets an Ironhacker", function() { //  Describes the test unit itself

    //  Test assertion. Here the function is called with test parameters and expected result is specified `toEqual`
    expect(helloIronhack()).toEqual("Hello Ironhacker!"); 
   //  Method `.toEqual` is called a "matcher" and is used to check the returned result when calling a function
  });
});