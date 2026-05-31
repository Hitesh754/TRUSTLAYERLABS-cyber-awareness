const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');
const enPath = path.join(localesDir, 'en', 'translation.json');

function readJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.error('Failed to read JSON', p, e);
    process.exit(1);
  }
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

const en = readJson(enPath);
if (!en.complaint) {
  console.error('English locale has no complaint namespace');
  process.exit(1);
}

const complaintKeys = Object.keys(en.complaint);

const dirs = fs.readdirSync(localesDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log('Found locales:', dirs.join(', '));

for (const dir of dirs) {
  const filePath = path.join(localesDir, dir, 'translation.json');
  if (!fs.existsSync(filePath)) {
    console.warn('Missing translation.json for', dir);
    continue;
  }
  const obj = readJson(filePath);
  if (!obj.complaint) obj.complaint = {};

  let added = 0;
  for (const key of complaintKeys) {
    if (!(key in obj.complaint)) {
      obj.complaint[key] = en.complaint[key];
      added++;
    }
  }
  if (added > 0) {
    writeJson(filePath, obj);
    console.log(`Updated ${dir}: added ${added} complaint keys`);
  } else {
    console.log(`No changes for ${dir}`);
  }
}

console.log('Done.');
