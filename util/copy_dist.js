import fs from 'fs';

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

fs.copyFile('color.d.ts', 'dist/color.d.ts', (err) => {
  if (err) {
    console.warn('working dir: ' + process.cwd());
    throw err;
  }
});
