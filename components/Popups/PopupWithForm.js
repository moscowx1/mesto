import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(configs, submitHandler, formFiller) {
    super(configs);
    this._submitHandler = submitHandler;
    this._formFiller = formFiller;
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

  open() {
    this._formFiller();
    super.open();
  }

  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll("input"));
    const nameValuePair =  inputs.map(input => [input.name, input.value]);
    return Object.fromEntries(nameValuePair);
  }

  submitForm(evt) {
    evt.preventDefault();
    this._submitHandler(this._getInputValues());
    this.close();
  }
}
