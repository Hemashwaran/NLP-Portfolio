import fs from 'fs';
import path from 'path';

const contentFile = path.resolve('src/data/content.ts');
const text = fs.readFileSync(contentFile, 'utf8');

// Match any placeholder in brackets like [MY NAME], [CONFIRM...], [VERIFY...], [PLACEHOLDER]
const placeholderRegex = /\[(MY [A-Z\s]+|REG NO|PROGRAMME[A-Z,\s]*|MAM'S NAME|SEM|LAB \d|CONFIRM[^\]]*|REVIEW BY NATIVE SPEAKER|VERIFY MY ANSWER|WHICH QUESTION|DATES|PLACEHOLDER[^\]]*)\]/g;

const matches = [];
let match;
const lines = text.split('\n');

lines.forEach((line, lineIndex) => {
  let m;
  while ((m = placeholderRegex.exec(line)) !== null) {
    matches.push({
      placeholder: m[0],
      line: lineIndex + 1,
      snippet: line.trim().slice(0, 80)
    });
  }
});

console.log('='.repeat(70));
console.log('BUILD-TIME PLACEHOLDER AUDIT REPORT (Honesty Rules)');
console.log('='.repeat(70));
console.log(`Total Placeholders Found: ${matches.length}`);
console.log('These indicate fields where user input or confirmation is required:');
console.log('-'.repeat(70));

const summary = {};
matches.forEach(m => {
  summary[m.placeholder] = (summary[m.placeholder] || 0) + 1;
  console.log(`Line ${String(m.line).padEnd(4)} | ${m.placeholder.padEnd(28)} | ${m.snippet}`);
});

console.log('-'.repeat(70));
console.log('Summary Count by Tag:');
Object.entries(summary).forEach(([tag, count]) => {
  console.log(`  ${tag.padEnd(30)}: ${count} occurrence(s)`);
});
console.log('='.repeat(70));
console.log('Refer to PLACEHOLDERS.md for instructions on filling each field.');
console.log('='.repeat(70));
