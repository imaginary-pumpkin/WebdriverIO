class HomePage {

    get pageHeader() { return $('//*[@class="sc-4555ca6a-0 hZEuqN"]') };
    get subHeading() { return $('(//p[@class="sc-5159831f-0 tSOdx"])[1]') };
    get supportLink() { return $("(//*[text()='Support'])[2]") };
    get acceptButton() { return $('//*[contains(text(),"ACCEPT ALL")]') };
}

module.exports = new HomePage()