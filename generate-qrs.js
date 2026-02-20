const QRCode = require('qrcode');
const fs = require('fs');

const baseDomain = process.argv[2];
if (!baseDomain) {
  console.log('Usage: node generate-qrs.js https://your-domain.com');
  process.exit(1);
}

const refs = ['danny', 'alex', 'sam'];
fs.mkdirSync('qrcodes', { recursive: true });

(async () => {
  for (const ref of refs) {
    const url = `${baseDomain.replace(/\/$/, '')}/?ref=${encodeURIComponent(ref)}`;
    await QRCode.toFile(`qrcodes/${ref}.png`, url, { width: 512, margin: 1 });
    console.log(`Created qrcodes/${ref}.png -> ${url}`);
  }
})();
