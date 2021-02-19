import Popup from "./Popup";

export default class PopupWithSubmit extends Popup {
  constructor(configs, submitHandler) {
    super(configs);
    this._submitHandler = submitHandler;
  }

  _initComponents() {
    super._initComponents();
    this._form = this._element.querySelector(this._configs.formSelector)
    this._submitBtn = this._form.querySelector(this._configs.submitBtnSelector);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this.submitForm.bind(this));
  }

  setLoading(isLoading) {
    if (isLoading) {
      this._submitBtn.classList.add(this._configs.submitBtnLoading)
    }
    else {
      this._submitBtn.classList.remove(this._configs.submitBtnLoading)
    }
  }

  submitForm(evt) {
    this.setLoading(true);
    evt.preventDefault();
    this._submitHandler();
  }

  close() {
    this.setLoading(false);
    super.close();
  }
}
