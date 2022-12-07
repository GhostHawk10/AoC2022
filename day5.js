const fs = require('fs');
let counter = 1;
try {
	var file = fs.readFileSync('crates', 'utf8');
	data = file.split(/\r?\n/);

	stacks = [[], ['T', 'F', 'V', 'Z', 'C', 'W', 'S', 'Q'], ['B', 'R', 'Q'], ['S', 'M', 'P', 'Q', 'T', 'Z', 'B'], ['H', 'Q', 'R', 'F', 'V', 'D'], ['P', 'T', 'S', 'B', 'D', 'L', 'G', 'J'], ['Z', 'T', 'R', 'W'], ['J', 'R', 'F', 'S', 'N', 'M', 'Q', 'H'], ['W', 'H', 'F', 'N', 'R'], ['B', 'R', 'P', 'Q', 'T', 'Z', 'J']];

	commands = [];

	data.forEach(line => {
		counter += 1;

		if (counter >= 11) {
			command = line.split(" ");
			commands.push([command[1], command[3], command[5]]);
		}
	})

	commands.forEach(cmd => {
		//part1(cmd);
		part2(cmd);
	})

	for (i = 0; i < stacks.length; i++) {
		console.log(stacks[i].at(0));
	}
	
} catch(e) {
	console.log(e);
}

function part1(cmd) {
	for (i = 0; i < cmd[0]; i++) {
		crate = stacks[cmd[1]].at(0);
		stacks[cmd[1]].shift();
		stacks[cmd[2]].unshift(crate);
	}
}

function part2(cmd) {
	crates = [];

	for (i = 0; i < cmd[0]; i++) {
		crate = stacks[cmd[1]].at(0);
		crates.unshift(crate);
		stacks[cmd[1]].shift();
	}

	for (i = 0; i < crates.length; i++) {
		crate = crates[i];
		stacks[cmd[2]].unshift(crate);
	}
}
