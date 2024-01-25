import { test, expect } from '@playwright/test'

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => await page.goto('/'))

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle('Página Inicial')
  })
})
