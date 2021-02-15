export default class Section {
  constructor(items, renderer, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  clear() {
    this._container.innerHtml = '';
  }

  renderItems() {
    console.log(1);
    this.clear();
    this._items.forEach(item => this._renderer(item));
  }
}
