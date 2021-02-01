import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(configs){
    super(configs);
  }

  _initComponents() {
    super._initComponents();
    this._openBtn = document.querySelector(this._configs.openBtnSelector);
    this._form = this._element.querySelector(this._configs.formSelector)
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this.submitForm.bind(this));
    this._openBtn.addEventListener("click", this.open.bind(this));
  }

  close() {
    super.close();
    this._form.reset();
  }

  _submitAction() { }

  submitForm(evt) {
    evt.preventDefault();
    this._submitAction();
    this.close();
  }
}
