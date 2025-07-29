import PageBase from "./pageBase";

export class SalesDashboardPage extends PageBase {
    constructor() {
        super();
    }

    text_barGraphHeader_css = "div[class^='MuiPaper']>h6";
    text_selectedCashier_css = "div[class^='MuiBox']>h6";
    button_addSale_css = "button:contains(ADD SALE)";
    button_switchCashier_css = "button:contains('SWITCH CASHIER')";
    image_bargrapgh_css = "div>svg.recharts-surface";

    validateGraph(cashier) {
        cy.get(this.image_bargrapgh_css).should('be.visible');
        cy.get(`path[name="${cashier.trim().toLowerCase()}"]`).trigger('mouseover');
        cy.wait(1000);
        cy.get('.recharts-tooltip-wrapper')
            .invoke('text')
            .then(text => {
                const amount = parseInt(text.match(/totalSalesAmount\s*:\s*(\d+)/i)?.[1] || '0');
                cy.log(`Sales amount: ${amount}`);
                cy.wrap(amount).as('salesAmount');
            });
    }


    validateSalesUpdate(cashier) {
        cy.get(`path[name="${cashier.trim().toLowerCase()}"]`).trigger('mouseover');
        cy.wait(2000);
        cy.get('.recharts-tooltip-wrapper')
            .invoke('text')
            .then(text => {
                const Updatedamount = parseInt(text.match(/totalSalesAmount\s*:\s*(\d+)/i)?.[1] || '0');
                cy.log(`Sales amount: ${Updatedamount}`);
                cy.get('@salesAmount').then((amount) => {
                    expect(Updatedamount).to.be.greaterThan(amount);
                });
            });

    }
}
