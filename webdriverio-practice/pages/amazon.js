class AmazonPage {

    get parent() {
        return $('#nav-xshop');
    }
    get childElements() {
        return this.parent.$$('a');
    }
    get getTextForA() {
        return this.childElements.filter(element => {
            console.log(element.getText());
        });
    }
}
module.exports = new AmazonPage();