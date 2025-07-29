
import { Before, AfterAll } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.launchPortal();
})

AfterAll(() => {
    cy.log('Execution Completed');
})