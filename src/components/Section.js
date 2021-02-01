export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderAndAddItem(item) {
    const element = this._renderer(item);
    this._container.append(element);
  }

  clear() {
    this._container.innerHtml = '';
  }

  renderItems() {
    this.clear();
    this._items.forEach(item => this._renderer(item));
  }
}
