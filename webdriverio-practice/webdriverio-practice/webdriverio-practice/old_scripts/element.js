const { assert } = require("chai")

describe("Interaction with webelement", async function () {
    it("Enter value in a field", async function () {
        browser.url('/')
        // const search = $('#twotabsearchtextbox')
        await browser.$('#twotabsearchtextbox').setValue('Apple macbook')
        await browser.pause(2000)
        assert.isTrue($('#twotabsearchtextbox').isDisplayed())
    })

    it("Get text of field", async function () {
        browser.url('/')
        const label = await $('//*[contains(text(),"1996-2023, Amazon.com, Inc. or its affiliates")]')
        let text = label.getText();
        console.log(text)
        assert.equal("1996-2023, Amazon.com, Inc. or its affiliates", text)
    })

    it("Click on a field", async function () {
        browser.url('/')
        await browser.$('#twotabsearchtextbox').setValue('Apple macbook')
        const icon = await $('//*[@id="nav-search-submit-button"]')
        assert.isTrue(icon.isDisplayed())
        icon.click();
    })
})

