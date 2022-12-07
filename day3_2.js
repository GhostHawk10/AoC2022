const fs = require('fs');

try {
        var file = fs.readFileSync('sacks', 'utf8');
        data = file.split(/\r?\n/);

	total2 = 0;
	groups = []

	for (i=0; i < data.length; i+=3) {
		groups.push(data[i] + " " + data[i+1] + " " + data[i+2]);
	}

	groups.forEach(group => {
		lines = group.split(" ");
		line1 = lines[0];
		line1_priority = prioritize(line1);
		line2 = lines[1];
		line2_priority = prioritize(line2);
		line3 = lines[2];
		line3_priority = prioritize(line3);

		intersect = line1_priority.filter(element => line2_priority.includes(element));
		intersect2 = intersect.filter(element => line3_priority.includes(element));
		total2 += intersect2[0]
		console.log(total2);
	})

} catch(e) {
        console.log(e);
}

function prioritize(line_in) {
	line_priority = []
	for (i = 0; i < line_in.length; i++) {
                char_in = line_in.charCodeAt(i);

                if (char_in >= 65 && char_in <= 90) {
                        line_priority.push(char_in - 38) //27-52
                } else if (char_in >= 97 && char_in <= 122) {
                        line_priority.push(char_in - 96) //1-26
                }
        }

	return line_priority;
}
