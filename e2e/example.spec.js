import { test, expect } from '@playwright/test';
import { join } from 'path';

test('hiding element', async ({ page }) => {
  await page.goto(`file://${join(__dirname, '../src/index.html')}`);
  const button = await page.getByTestId('btn');
  const element = await page.getByTestId('box');
  await expect(element).toBeVisible();

  await button.click();
  await expect(element).not.toBeVisible();
});
