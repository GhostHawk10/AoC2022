const fs = require('fs');

function compareNumbers(a, b) {
  return a - b;
}

try {
	var file = fs.readFileSync('calories', 'utf8');
	data = file.split(/\r?\n/);
	elves = [];

	sum = 0;
	data.forEach(line => {
		if (line === "") {
			elves.push(sum);
			sum = 0;
		} else {
			sum += Number(line);
		}
	})
	max_elf = Math.max(...elves);
	elves_sorted = elves.sort(compareNumbers).reverse().slice(0, 3);
	top3 = 0;
	for(i = 0; i < elves_sorted.length; i++) {
		top3 += elves_sorted[i];
	}

	console.log(max_elf);
	console.log(top3);
} catch(e) {
	console.log(e);
}
