function helloIronhack() {
  return 'Hello Ironhackers!';
}

// doing my own thing to remember later

function alphabetPosition(text) {
  let textClean = text.toLowerCase().replace(/[_\W]+/g, '');
  let result = '';
  for (let letter of textClean) {
    let num = letter.charCodeAt(0) - 96;
    if (num >= 0) result += num + ' ';
  }
  return result.trim();
}

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  return birds.filter(function (cur) {
    return !geese.includes(cur);
  });
}
