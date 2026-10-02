const {test,expect}=require("@playwright/test")

test("Validate Signature", async function({page})
{
    await page.goto("https://dss-demo.nowina.lu/validation")

    await page.locator("//input[@id='signedFile']").setInputFiles('./Signed_PDF/test-valid-signature-signed-LTA.pdf')

    await page.locator("//button[normalize-space()='Submit']").click()

    await expect(page.locator("(//div[@class='badge mr-2 badge-success'][normalize-space()='TOTAL_PASSED'])[1]")).toBeVisible()

    await expect(page.locator("//i[@data-original-title='TOTAL_PASSED']")).toBeVisible()

    await page.locator("//div[@class='card-header bg-primary collapsed']").click()

    await expect(page.locator("(//div[@class='badge mr-2 badge-success'][normalize-space()='PASSED'])[1]")).toBeVisible()

    await expect(page.locator("//dd[normalize-space()='1 valid signatures, out of 1']")).toBeVisible()
})