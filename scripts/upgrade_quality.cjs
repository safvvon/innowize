const fs = require('fs');

let txt = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

// Upgrade all coverImages and photo fullUrls to ultra-high resolution
txt = txt.replace(/=w1200/g, '=w2400');
txt = txt.replace(/=w1800/g, '=w2400');
txt = txt.replace(/=w600/g, '=w1200');

fs.writeFileSync('src/data/portfolioData.ts', txt);
console.log('Successfully upgraded all portfolio media to ultra-high resolution (w2400 & w1200)!');
