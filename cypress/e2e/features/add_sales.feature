Feature: Sales Flow for Cashier

  Background:
    Given user is on "select cashier" page

  @e2e
  Scenario Outline: Validate sale summary dashboard is updated after submitting sale for given items
    When user "select cashier" name "<Cashier>"
    Then validate the details of graph on "Sales Dashboard" page for "<Cashier>"
    When user clicks on "Add Sale"
    And user adds the following items:
      | Item Name    | Quantity |
      | Apple        | 2        |
      | Orange       | 1        |
      | Strawberries | 3        |
    And user submits the sale
    Then verify sales summary should be updated for "<Cashier>" on "Sales Dashboard" page
    Examples:
      | Cashier   |
      | Cashier 1 |
      | Cashier 2 |

  Scenario: Validate user can switch the cashier and add more sales
    When user "select cashier" name "Cashier 3"
    Then validate user is on "Sales Dashboard" page
    When user clicks on "Switch Cashier"
    And user "select cashier" name "Cashier 2"
    Then validate the details of graph on "Sales Dashboard" page for "Cashier 2"
    When user clicks on "Add Sale"
    And user adds the following items:
      | Item Name    | Quantity |
      | Apple        | 2        |
      | Orange       | 1        |
      | Strawberries | 3        |
    And user submits the sale
    Then verify sales summary should be updated for "Cashier 2" on "Sales Dashboard" page
