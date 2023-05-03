const { Assertion, assert } = require("chai");

describe("Interaction with webelement", async function () {
    it("Get header value", async function () {
        browser.url('https://www.freshworks.com/')
        const button = await $('//*[contains(text(),"ACCEPT ALL")]')
        await button.waitForDisplayed();
        button.click()
        const header = await $('//*[@class="sc-4555ca6a-0 hZEuqN"]')
        let text = header.getText()
        console.log(text);
        assert.equal('Hello business impact. Goodbye software bloat.', text);
    })
})

