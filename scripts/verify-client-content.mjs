import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(`${process.env.PLAYWRIGHT_MODULE}/index.mjs`).href : 'playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  try {
    for (const width of [375, 1268]) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
      const routes = ['', 'empresa', 'contato', 'solucoes', 'diagnostico', 'privacidade', 'conteudos', 'solucoes/bpo-financeiro', 'solucoes/assessoria-empresarial', 'solucoes/gestao-de-pessoas', 'solucoes/compliance-juridico', 'conteudos/diagnostico-empresarial', 'conteudos/bpo-financeiro-organizacao', 'conteudos/contratos-como-protecao', 'conteudos/compliance-lgpd-pmes'];
      for (const route of routes) {
        await page.goto(`${process.env.TEST_BASE_URL || 'http://127.0.0.1:3003'}/${route}`);
        assert.equal(page.url().includes(route), true);
        assert((await page.title()).length > 10);
        assert(await page.locator('meta[name="description"]').getAttribute('content'));
        assert(await page.locator('meta[property="og:title"]').getAttribute('content'));
        assert(await page.locator('link[rel="canonical"]').getAttribute('href'));
        const links = await page.locator('a').evaluateAll(elements => elements.map(a => a.href).filter(href => href.includes('wa.me/')));
        assert(links.length > 0);
        assert(links.every(link => link.includes('wa.me/5561999823311?')));
        assert(await page.getByText('Atendimento em todo o Brasil', { exact: true }).count());
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
        assert.equal(await page.locator('img').evaluateAll(images => images.some(image => image.complete && image.naturalWidth === 0)), false);
        if (route === 'empresa') {
          assert(await page.getByRole('heading', { name: 'Luís Henrique Oliveira Paim', exact: true }).count());
          assert(await page.getByText('Diretor Jurídico', { exact: true }).count());
          assert(await page.getByText('Diretor Executivo', { exact: true }).count());
          await page.locator('.team-grid').scrollIntoViewIfNeeded();
          if (process.env.QA_SCREENSHOT_DIR) await page.screenshot({ path: `${process.env.QA_SCREENSHOT_DIR}/team-updated-${width}.png` });
        }
        if (route === 'empresa' || route === '') assert(await page.getByRole('heading', { name: 'Gestão e segurança jurídica para iniciativas que geram impacto.' }).count());
        if (route === 'solucoes') assert(await page.getByRole('heading', { name: 'Assessoria integrada para iniciativas de impacto.' }).count());
        console.log(route || 'home', width, 'OK');
      }
      await page.close();
    }
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
