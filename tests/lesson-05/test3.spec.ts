import { test } from '@playwright/test';

test('Product page', async ({ page }) => {
    await test.step('Navigate to material website', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click Bai hoc 3: Todo page', async () => {
        await page.click("//a[@href = '03-xpath-todo-list.html']");
    });

    await test.step('Add new 100 todo item', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id = 'new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id = 'add-task']").click();
        }
    });

    await test.step('Delete todo item le', async () => {
        page.on('dialog', async dialog => await dialog.accept());

        for (let i = 99; i >= 1; i -= 2) {
            await page.locator(`(//button[contains(text(),"Delete")])[${i}]`).click();
        }
    });
});