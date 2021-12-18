const { helloIronhack } = require("../src/hello-ironhacker");

describe('Hello Ironhack function', () => {
  it('should greet an Ironhacker', () => {
    expect(helloIronhack()).toEqual('Hello Ironhacker!');
  });
});
