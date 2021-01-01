import { Popup} from "./Popup.js";

export class PicturePopup extends Popup {
  constructor(selector){
    super(selector);
  }

  _initComponents() {
    super._initComponents();
    this._img = this._element.querySelector(this._selector.imgSelector);
    this._caption = this._element.querySelector(this._selector.captionSelector);
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
