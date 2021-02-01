import PopupWithForm from "./PopupWithForm.js";

export default class AddPicPopup extends PopupWithForm {
  constructor(configs, renderer) {
    super(configs);

    this._renderer = renderer;
  }

  _initComponents() {
    super._initComponents();
    this._name = this._element.querySelector(this._configs.nameSelector);
    this._link = this._element.querySelector(this._configs.linkSelector);
  }

  _submitAction() {
    this._renderer(this._getInputValues());
  }
}
