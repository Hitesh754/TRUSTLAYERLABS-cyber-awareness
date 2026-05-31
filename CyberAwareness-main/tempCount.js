const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.resolve('src/data/cyberCrimeStations.ts'), 'utf8');
const entries = content.split(/\n(?=\s*\{)/).filter(Boolean).slice(1).map(block => {
  const m = block.match(/state:\s*"([^"]+)"/);
  const i = block.match(/id:\s*"([^"]+)"/);
  return { id: i?.[1], state: m?.[1] };
});
const states = ['Uttarakhand','Punjab','West Bengal','Delhi','Puducherry'];
for (const state of states) {
  console.log(state + ':', entries.filter(e => e.state === state).length);
}
