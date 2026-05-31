const fs = require('fs');
const path = require('path');

function walk(dir){
  const list = [];
  const files = fs.readdirSync(dir);
  files.forEach(f=>{
    const p = path.join(dir,f);
    const stat = fs.statSync(p);
    if(stat.isDirectory()) list.push(...walk(p));
    else if(/\.(js|jsx|ts|tsx)$/.test(f)) list.push(p);
  });
  return list;
}

function analyze(file){
  const src = fs.readFileSync(file,'utf8');
  const issues = [];
  const usesUseTranslation = /useTranslation/.test(src) || /from\s+['\"]react-i18next['\"]/.test(src);
  // detect JSX text nodes: >some text< (avoid tags)
  const jsxTextRegex = />\s*([^<\n].*?)\s*</g;
  const hasJsxText = jsxTextRegex.test(src);
  // detect top-level t or i18n.t assigned to const/let/var
  const topLevelT = /^[ \t]*(?:const|let|var|export\s+const|export\s+let)[^=]*=\s*(?:t\(|i18n\.t\()/m.test(src);
  // detect any i18n.t or t( usage
  const usesT = /\bi18n\.t\(|\bt\(/.test(src);

  if(hasJsxText && !usesUseTranslation){
    issues.push('JSX has visible text nodes but file does not use useTranslation()');
  }
  if(topLevelT){
    issues.push('Top-level translation call (t() or i18n.t()) assigned to constant before component render');
  }
  if(usesT && !usesUseTranslation){
    issues.push('Calls to t() or i18n.t() present but useTranslation() not used');
  }
  return issues;
}

const base = path.join('src');
const pagesDir = path.join(base,'pages');
const componentsDir = path.join(base,'components');
const files = [];
if(fs.existsSync(pagesDir)) files.push(...walk(pagesDir));
if(fs.existsSync(componentsDir)) files.push(...walk(componentsDir));

const results = [];
files.forEach(f=>{
  const issues = analyze(f);
  if(issues.length) results.push({file:f, issues});
});

console.log(JSON.stringify(results, null, 2));
