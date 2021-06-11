const helloIronhack = require('../src/hello-ironhacker').helloIronhack 

function helloIronhack() {
  return 'Hello Ironhackers!';
}

// The following is required to make automated tests run. Please ignore it.
if (typeof module !== 'undefined') module.exports = { helloIronhack };
