import {test,expect} from '@playwright/test';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';
const url=pathToFileURL(resolve('index.html')).href;
for(let i=0;i<30;i++){
  test('typing and layout '+i,async({page})=>{
    await page.goto(url);
    const row=page.locator('.r').nth(100+i*10);
    await row.scrollIntoViewIfNeeded();
    await row.click();
    await page.keyboard.type('x'.repeat(200));
    await expect(row).toContainText('x'.repeat(200));
    const h=await page.evaluate(()=>{document.getElementById('d').scrollTop=5000;return document.getElementById('d').scrollHeight});
    expect(h).toBeGreaterThan(1000);
  });
}
