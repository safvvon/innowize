const http = require('http');
const { spawn } = require('child_process');

async function main() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--remote-debugging-port=9426',
    '--headless=new',
    'about:blank'
  ]);
  await new Promise(r => setTimeout(r, 1500));
  const targets = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9426/json', res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
  const ws = new WebSocket(targets[0].webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 1;
  const send = (m, p = {}) => new Promise(res => {
    const i = id++;
    const h = e => {
      const msg = JSON.parse(e.data);
      if (msg.id === i) { ws.removeEventListener('message', h); res(msg.result); }
    };
    ws.addEventListener('message', h);
    ws.send(JSON.stringify({ id: i, method: m, params: p }));
  });

  await send('Page.navigate', { url: 'https://drive.google.com/file/d/1p_uVBDvay8eC5QuxgE7aH3WQV_coFDwr/preview?autoplay=1&vq=hd1080' });
  await new Promise(r => setTimeout(r, 4000));

  const pageInfo = await send('Runtime.evaluate', {
    expression: `
      ({
        title: document.title,
        videoCount: document.querySelectorAll('video').length,
        videoSrc: document.querySelector('video')?.src,
        videoResolution: document.querySelector('video') ? { w: document.querySelector('video').videoWidth, h: document.querySelector('video').videoHeight } : null
      })
    `,
    returnByValue: true
  });

  console.log('Preview Page Info:', pageInfo.result.value);
  chrome.kill();
}

main().catch(err => console.error(err));
