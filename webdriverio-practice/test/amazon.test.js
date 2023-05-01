const amazonPage = require("../pages/amazon");

describe("Amazon page elements handle", function () {

    it("Get text of all main links", async function () {
        browser.url("https://www.amazon.in/");
        await amazonPage.getTextForA;
    })

})