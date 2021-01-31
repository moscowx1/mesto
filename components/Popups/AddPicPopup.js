import FormPopup from "./FormPopup.js";

export default class AddPicPopup extends FormPopup {
  constructor(picturePopup, configs, renderer) {
    super(configs);

    this._picturePopup = picturePopup;
    this._renderer = renderer;
  }

  _initComponents() {
    super._initComponents();
    this._name = this._element.querySelector(this._configs.nameSelector);
    this._link = this._element.querySelector(this._configs.linkSelector);
  }

  _submitAction() {
    const cardData = {
      name: this._name.value,
      link: this._link.value,
    };

    this._renderer(cardData);
  }
}
