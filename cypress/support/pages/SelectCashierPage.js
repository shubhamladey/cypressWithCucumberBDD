import PageBase from "./pageBase";

export class SelectCashierPage extends PageBase {
    constructor() {
        super();
    }

    button_radio_css = "input[type='radio']";
    button_next_css = "button:contains('Next')";
    text_selectBoxHeader_css = "h5";

    selectCashier(CashierName) {
        cy.get(`label:contains(${CashierName})`).find(this.button_radio_css).click();
    }
}
