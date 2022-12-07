const fs = require('fs');

try {
        var file = fs.readFileSync('sacks', 'utf8');
        data = file.split(/\r?\n/);
	total = 0;
        data.forEach(line => {
                comp1 = line.slice(0, line.length/2);
		comp2 = line.slice(line.length/2, line.length);
		comp1_priority = [];
		comp2_priority = [];
		//A-Z 65-90   a-z 97-122

		for (i = 0; i < comp1.length; i++) {
			char_in = comp1.charCodeAt(i);

			if (char_in >= 65 && char_in <= 90) {
				comp1_priority.push(char_in - 38) //27-52
			} else if (char_in >= 97 && char_in <= 122) {
				comp1_priority.push(char_in - 96) //1-26
			}
		}

		for (i = 0; i < comp2.length; i++) {
                        char_in = comp2.charCodeAt(i);

                        if (char_in >= 65 && char_in <= 90) {
                                comp2_priority.push(char_in - 38) //27-52
                        } else if (char_in >= 97 && char_in <= 122) {
                                comp2_priority.push(char_in - 96) //1-26
                        }
                }

		intersect = comp1_priority.filter(element => comp2_priority.includes(element));

		total += intersect[0];
		console.log(total);

        })
} catch(e) {
        console.log(e);
}
