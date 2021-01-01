import { Popup} from "./Popup.js";

export class FormPopup extends Popup{
  constructor(selector){
    super(selector);
  }

  _initComponents() {
    super._initComponents();
    this._openBtn = document.querySelector(this._selector.openBtnSelector);
    this._form = this._element.querySelector(this._selector.formSelector)
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener("submit", this.submitForm.bind(this));
    this._openBtn.addEventListener("click", this.openPopup.bind(this));
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  _submitAction() { }

  submitForm(evt) {
    evt.preventDefault();
    this._submitAction();
    this.closePopup();
  }
}
