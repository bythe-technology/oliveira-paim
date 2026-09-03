import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(`${process.env.PLAYWRIGHT_MODULE}/index.mjs`).href : 'playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  try {
    for (const width of [375, 1268]) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
      for (const route of ['empresa', 'contato', 'solucoes', '']) {
        await page.goto(`${process.env.TEST_BASE_URL || 'http://127.0.0.1:3003'}/${route}`);
        const links = await page.locator('a').evaluateAll(elements => elements.map(a => a.href).filter(href => href.includes('wa.me/')));
        assert(links.length > 0);
        assert(links.every(link => link.includes('wa.me/5561999823311?')));
        assert(await page.getByText('Atendimento em todo o Brasil', { exact: true }).count());
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
        if (route === 'empresa') {
          assert(await page.getByRole('heading', { name: 'Luís Henrique Oliveira Paim', exact: true }).count());
          assert(await page.getByText('Diretor Jurídico', { exact: true }).count());
          assert(await page.getByText('Diretor Executivo', { exact: true }).count());
          await page.locator('.team-grid').scrollIntoViewIfNeeded();
          if (process.env.QA_SCREENSHOT_DIR) await page.screenshot({ path: `${process.env.QA_SCREENSHOT_DIR}/team-updated-${width}.png` });
        }
        if (route !== 'contato') assert(await page.getByRole('heading', { name: 'Gestão e segurança jurídica para iniciativas que geram impacto.' }).count());
        console.log(route || 'home', width, 'OK');
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
