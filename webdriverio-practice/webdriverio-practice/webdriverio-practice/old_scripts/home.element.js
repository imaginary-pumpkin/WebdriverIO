const homePage = require("../pages/homepage")

describe("Home page elements handle", function () {

    it("Verify home page elements", async function () {
        browser.url("https://www.freshworks.com/");
        await homePage.acceptButton.waitForDisplayed();
        await homePage.acceptButton.click();
        console.log(homePage.pageHeader.getText());
        console.log(homePage.subHeading.getText());
        await homePage.supportLink.click();
        await browser.pause();
    })
})