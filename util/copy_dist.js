const fs = require('fs');

fs.copyFile('color.d.ts', 'dist/color.d.ts', (err) => {
	if (err) {
		throw err;
	}
});
