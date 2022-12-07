const fs = require('fs');
const windowSize = 4;

function hasDupes(arr) {
    return new Set(arr).size !== arr.length
}

fs.readFile('signal', 'utf8', (err, data) => {
  let window = data.substring(0, windowSize);

  for (let i = windowSize; i < data.length; i++) {
    window = window.substring(1) + data.charAt(i);

    if (!hasDupes(window)) {
        console.log(i+1);
        break;
    }
  }
});
