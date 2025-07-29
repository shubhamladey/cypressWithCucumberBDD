import { SelectCashierPage } from "./SelectCashierPage";
import { SalesDashboardPage } from "./SalesDashboardPage";
import { AddSalePage } from "./AddSalePage";

class PageFactory {
  getPage(pageName) {
    switch (pageName.toLowerCase()) {
      case "select cashier":
        return new SelectCashierPage();
      case "sales dashboard":
        return new SalesDashboardPage();
      case "add sale":
        return new AddSalePage();
      default:
        throw new Error(`Page '${pageName}' not found`);
    }
  }
}

export const pageFactory = new PageFactory();