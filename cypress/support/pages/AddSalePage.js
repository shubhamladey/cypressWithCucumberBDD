import PageBase from "./pageBase";

export class AddSalePage extends PageBase {
    constructor() {
        super();
    }

    button_back_css = "button:contains('Back')";
    text_tableTitle_css = "h4";
    text_tableHeaders_css = "thead>tr>th";
    text_itemName_css = "tbody>tr>td:nth-child(1)";
    textbox_quantity_css = "tbody>tr>td:nth-child(3) div>input"
    button_submit_css = 'button:contains("SUBMIT")';

    addItem(itemName, qty) {
        const fruits = ["Apple","Orange","Strawberries"]
        cy.get("input").eq(fruits.indexOf(itemName)).type('{selectall}').type(qty);
    }

    submitSale() {
        cy.contains('Submit').click();
    }
}