/// <reference types = "cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { pageFactory } from "../../support/pages/PageFactory";

Given(/^(?:validate )?user is on "(.*)" page$/, (pageName) => {
  const titles = {
    'select cashier': 'List of Cashiers',
    'Sales Dashboard': 'View Sales Dashboard',
    'Add sales': 'Sale Details',
  };
  pageFactory.getPage(pageName).validatePageTitle(titles[pageName]);
});

When(/^user "(.*)" name "(.*)"$/, (pageName, cashierName) => {
  pageFactory.getPage(pageName).selectCashier(cashierName);
  pageFactory.getPage(pageName).clickButtonByLabel('Next');
});

Then(/^validate the details of graph on "(.*)" page for "(.*)"$/, (pageName, cashier) => {
  pageFactory.getPage(pageName).validatePageTitle("View Sales Dashboard");
  pageFactory.getPage(pageName).assertTextVisible('Cashier Sales Statistics')
  pageFactory.getPage(pageName).validateGraph(cashier);
});


When(/^user clicks on "(.*)"$/, (buttonLabel) => {
  cy.contains("button", buttonLabel).click();
});

When("user adds the following items:", (table) => {
  const items = table.hashes();
  items.forEach(item => {
    pageFactory.getPage("Add Sale").addItem(item["Item Name"], Number(item.Quantity));
  });
});


When("user submits the sale", () => {
  pageFactory.getPage("Add Sale").submitSale();
});


Then(/^verify sales summary should be updated for "(.*)" on "(.*)" page$/, (cashier, pageName) => {
  pageFactory.getPage(pageName).validateSalesUpdate(cashier);
});
