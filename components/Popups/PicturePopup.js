import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
  constructor(configs){
    super(configs);
  }

  _initComponents() {
    super._initComponents();
    this._img = this._element.querySelector(this._configs.imgSelector);
    this._caption = this._element.querySelector(this._configs.captionSelector);
  }

  closePopup() {
    this._caption.textContent = "";
    this._img.src = "";

    super.closePopup();
  }

  openPopup(name, link) {
    this._caption.textContent = name;
    this._img.src = link;

    super.openPopup();
  }
}
