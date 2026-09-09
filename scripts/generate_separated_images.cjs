const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const imgPath = path.resolve('public/images/vr_hero_model_transparent.png');
const src = PNG.sync.read(fs.readFileSync(imgPath));

const W = src.width;
const H = src.height;

function getCollarRimY(x) {
  if (x < 380) {
    return 605;
  } else if (x <= 405) {
    const t = (x - 380) / (405 - 380);
    return 605 + t * 33; // 605 -> 638
  } else if (x <= 600) {
    const t = (x - 405) / (600 - 405);
    return 638 - t * 71; // 638 -> 567
  } else {
    return 567;
  }
}

// 1. Create Body PNG (Head completely removed, full body, collar and chest intact)
const body = new PNG({ width: W, height: H });
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    const rim = getCollarRimY(x);
    
    // In body: keep everything at or below the collar rim
    if (y >= rim) {
      body.data[idx] = src.data[idx];
      body.data[idx+1] = src.data[idx+1];
      body.data[idx+2] = src.data[idx+2];
      body.data[idx+3] = src.data[idx+3];
    } else {
      body.data[idx] = 0;
      body.data[idx+1] = 0;
      body.data[idx+2] = 0;
      body.data[idx+3] = 0;
    }
  }
}

// 2. Create Head PNG:
// Head, headset, face, hair, and neck stalk rounded into the socket
const head = new PNG({ width: W, height: H });

// Neck socket center and radius for a natural rounded neck base
const neckSocketCenterX = 485;
const neckSocketCenterY = 600;
const neckRadiusX = 110; // covers x from 375 to 595
const neckMaxDepthY = 700;

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    const rim = getCollarRimY(x);
    
    let isHead = false;
    let r = src.data[idx];
    let g = src.data[idx+1];
    let b = src.data[idx+2];
    let a = src.data[idx+3];
    
    if (a > 0) {
      if (y < rim) {
        // Head, hair, face, upper neck
        isHead = true;
      } else {
        // Neck stalk inside the collar socket
        // Check if inside anatomical neck cylinder / socket
        const dx = (x - neckSocketCenterX) / neckRadiusX;
        if (Math.abs(dx) <= 1.0 && y <= neckMaxDepthY) {
          // Bottom rounding
          const depth = y - rim;
          const maxDepthForX = 75 * Math.sqrt(1 - dx * dx * 0.6);
          if (depth <= maxDepthForX) {
            isHead = true;
            // Sample color from neck just above rim
            const sampleY = Math.min(Math.round(rim - 6), 570);
            const sampleIdx = (sampleY * W + x) * 4;
            if (src.data[sampleIdx + 3] > 40) {
              const shadowFactor = Math.max(0.4, 1 - (depth / 100));
              r = Math.round(src.data[sampleIdx] * shadowFactor);
              g = Math.round(src.data[sampleIdx + 1] * shadowFactor);
              b = Math.round(src.data[sampleIdx + 2] * shadowFactor);
              const fade = depth > maxDepthForX - 15 ? (maxDepthForX - depth) / 15 : 1;
              a = Math.round(255 * Math.max(0, Math.min(1, fade)));
            } else {
              isHead = false;
            }
          }
        }
      }
    }
    
    if (isHead) {
      head.data[idx] = r;
      head.data[idx+1] = g;
      head.data[idx+2] = b;
      head.data[idx+3] = a;
    } else {
      head.data[idx] = 0;
      head.data[idx+1] = 0;
      head.data[idx+2] = 0;
      head.data[idx+3] = 0;
    }
  }
}

fs.writeFileSync('public/images/vr_hero_body.png', PNG.sync.write(body));
fs.writeFileSync('public/images/vr_hero_head.png', PNG.sync.write(head));
console.log('Saved enhanced vr_hero_body.png and vr_hero_head.png');
