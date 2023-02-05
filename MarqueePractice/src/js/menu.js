import { MenuItem } from "./menuItem";

export default class Menu {
  constructor(el) {
    // .menu element
    this.DOM = { el: el };
    // the menu items
    this.DOM.menuItems = this.DOM.el.querySelectorAll(".c__menu__item");
    // array of MenuItem
    this.menuItems = [];
    this.DOM.menuItems.forEach((menuItem) =>
      this.menuItems.push(new MenuItem(menuItem))
    );
  }
}
