
Cypress.Commands.add("launchPortal", () => {
    const url = Cypress.env("PORTAL_URL");
    if (!url) throw new Error("PORTAL_URL not defined");
    cy.visit(url);
});
