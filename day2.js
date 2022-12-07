const fs = require('fs');

let rpc = {
	A: 1, //rock
	B: 2, //paper
	C: 3, //siccors
	X: 1,
	Y: 2,
	Z: 3
}

try {
        var file = fs.readFileSync('guide', 'utf8');
        data = file.split(/\r?\n/);
        points = 0;
        data.forEach(line => {
		round = line.split(" ");
		opponent = round[0];
		you = round[1];

		if (!isNaN(rpc[you]) && !isNaN(rpc[opponent])) {
			partOne(you, opponent);
		}
        })

	console.log(points);
} catch(e) {
        console.log(e);
}

function partOne(you, opponent) {
	if ((rpc[you] == 1 && rpc[opponent] == 3) || (rpc[you] == 2 && rpc[opponent] == 1) || (rpc[you] == 3 && rpc[opponent] == 2)) {
                points += (rpc[you] + 6);
        }

        if ((rpc[you] == 3 && rpc[opponent] == 1) || (rpc[you] == 1 && rpc[opponent] == 2) || (rpc[you] == 2 && rpc[opponent] == 3)) {
                points += rpc[you];
        }

        if (rpc[you] == rpc[opponent]) {
                points += (rpc[you] + 3);
        }
}

function partTwo(you, opponent) {
	if (rpc[you] == 1) { //lose
                if (rpc[opponent] == 1) {
                        you = 3;
                } else if (rpc[opponent] == 2) {
                        you = 1;
                } else if (rpc[opponent] == 3) {
                        you = 2;
                }

                points += you;
        } else if (rpc[you] == 2) { //draw
                you = rpc[opponent];
                points += (you + 3);
        } else if (rpc[you] == 3) { //win
                if (rpc[opponent] == 1) {
                        you = 2;
                } else if (rpc[opponent] == 2) {
                        you = 3;
                } else if (rpc[opponent] == 3) {
                        you = 1;
                }
                points += (you + 6);
        }
}
