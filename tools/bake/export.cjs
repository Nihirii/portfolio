// Exporte la description de la pièce (tools/bake/room.json) depuis le serveur de dev.
// Prérequis : `npm start` dans un autre terminal. Usage : node tools/bake/export.cjs [url]
const { chromium } = require('playwright');
const { writeFileSync } = require('node:fs');
const path = require('node:path');

(async () => {

const url = process.argv[2] ?? 'http://localhost:4200/';
const browser = await chromium.launch();
const page = await browser.newPage();
// la 3D n'est chargée qu'en mode « salon » (la 2D est la vue par défaut)
await page.addInitScript(() => {
  localStorage.setItem('salon-aide-commandes', '1');
  localStorage.setItem('salon-mode', '3d');
});
await page.goto(url);
await page.waitForFunction(() => window.__salonExport, null, { timeout: 120000 });
const json = await page.evaluate(() => window.__salonExport());
const out = path.join(__dirname, 'room.json');
writeFileSync(out, json);
const data = JSON.parse(json);
const roles = {};
data.meshes.forEach((m) => (roles[m.role] = (roles[m.role] ?? 0) + 1));
console.log(`room.json : ${(json.length / 1e6).toFixed(1)} Mo, ${data.meshes.length} meshes`, roles, `${data.lights.length} lampes`);
await browser.close();
})();
