const fs = require('fs');
const path = require('path');
const localesDir = path.join('src','i18n','locales');
const enPath = path.join(localesDir,'en','translation.json');
let en;
try{
  en = JSON.parse(fs.readFileSync(enPath,'utf8'));
}catch(e){
  console.error('EN_PARSE_ERROR', e.message);
  process.exit(1);
}
const enNav = en.nav || {};
const enAuthAccess = (en.auth && en.auth.accessTerminal) || 'Access Terminal';
const langs = fs.readdirSync(localesDir).filter(d => d !== 'en' && fs.existsSync(path.join(localesDir,d,'translation.json')));
const changed = [];
langs.forEach(lang => {
  const p = path.join(localesDir, lang, 'translation.json');
  try{
    const raw = fs.readFileSync(p,'utf8');
    const obj = JSON.parse(raw);
    obj.auth = obj.auth || {};
    if(obj.auth.accessTerminal === undefined){
      obj.auth.accessTerminal = enAuthAccess;
    }
    obj.nav = obj.nav || {};
    Object.keys(enNav).forEach(k => {
      if(obj.nav[k] === undefined){
        obj.nav[k] = enNav[k];
      }
    });
    fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n', 'utf8');
    changed.push(p);
  }catch(e){
    console.error('SKIP', lang, e.message);
  }
});
console.log(JSON.stringify({changed}, null, 2));
