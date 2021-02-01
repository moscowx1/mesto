import PopupWithForm from "./PopupWithForm.js";

export default class AddPicPopup extends PopupWithForm {
  constructor(configs, renderer) {
    super(configs);

    this._renderer = renderer;
  }

  _submitAction() {
    this._renderer(this._getInputValues());
  }
}
