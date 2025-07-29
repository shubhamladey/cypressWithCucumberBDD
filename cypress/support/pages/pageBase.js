/// <reference types="cypress"/>

class PageBase {
    constructor() {
        if (this.constructor === PageBase) {
            throw "You cannot create object of pageBase, please Extend!";
        }
    }

    text_pageHeader_css = "header>h1";

    validatePageTitle(title) {
        cy.get(this.text_pageHeader_css).should('have.text', title);
    }

    clickButtonByLabel(label) {
        cy.contains("button", label).click();
    }

    assertTextVisible(text) {
        cy.contains(text).should("be.visible");
    }
    
    mousehover(locator) {
        try {
            cy.get(locator).trigger("mouseover")
        } catch (err) {
            err.message
        }
    }

}

export default PageBase;