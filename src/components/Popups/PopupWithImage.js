import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(configs) {
    super(configs);
  }

  _initComponents() {
    super._initComponents();
    this._img = this._element.querySelector(this._configs.imgSelector);
    this._caption = this._element.querySelector(this._configs.captionSelector);
  }

  close() {
    this._caption.textContent = "";
    this._img.src = "";

    super.close();
  }

  open(name, link) {
    this._caption.textContent = name;
    this._img.src = link;

    super.open();
  }
}
