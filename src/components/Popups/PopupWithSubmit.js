import Popup from "./Popup";

export default class PopupWithSubmit extends Popup {
  constructor(configs, submitHandler) {
    super(configs);
    this._submitHandler = submitHandler;
  }

  _initComponents() {
    super._initComponents();
    this._form = this._element.querySelector(this._configs.formSelector)
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this.submitForm.bind(this));
  }

  submitForm(evt) {
    evt.preventDefault();
    this._submitHandler();
    this.close();
  }
}
