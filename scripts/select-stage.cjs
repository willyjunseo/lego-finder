const fs = require('node:fs');
const path = require('node:path');
const stage = process.argv[2];
if (!['1', '2', '3'].includes(stage)) throw new Error('Choose stage 1, 2, or 3.');
const root = path.resolve(__dirname, '..');
fs.copyFileSync(path.join(root, 'lesson-stages', `0${stage}-App.js`), path.join(root, 'App.js'));
console.log(`Stage ${stage} copied to App.js. Start with npm start.`);
