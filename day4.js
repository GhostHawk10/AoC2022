const fs = require('fs');

const text = fs.readFileSync('pairs', 'utf8');

const lines = text.split('\n');
let count = 0;

readInput();

function readInput() {
	lines.pop();

	for (const line of lines) {
		pairs = line.split(',');
		left = pairs[0];
		right = pairs[1];

		left_pair = left.split('-');
		right_pair = right.split('-');

		//part1(left_pair, right_pair);
		part2(left_pair, right_pair);
	}
}

function part1(left_pair, right_pair) {
	left_min = Number(left_pair[0]);
	left_max = Number(left_pair[1]);
	right_min = Number(right_pair[0]);
	right_max = Number(right_pair[1]);

	if (left_min >= right_min && left_max <= right_max) {
		count += 1;
	} else if (right_min >= left_min && right_max <= left_max) {
		count += 1;
	}
}

function part2(left_pair, right_pair) {
	left_min = Number(left_pair[0]);
	left_max = Number(left_pair[1]);
	right_min = Number(right_pair[0]);
	right_max = Number(right_pair[1]);

	if (left_min <= right_min && left_max >= right_min) {
		count += 1;
	} else if (left_min >= right_min && left_min <= right_max) {
		count += 1;
	}
}

console.log(count);
