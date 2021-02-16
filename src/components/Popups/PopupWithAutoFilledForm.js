import PopupWithForm from "./PopupWithForm.js";

export default class PopupWithAutoFilledForm extends PopupWithForm {
  constructor(configs, submitHandler, formDataGetter) {
    super(configs, submitHandler);
    this._formDataGetter = formDataGetter;
  }

  _initComponents() {
    super._initComponents();

    this._profileNameInput = this._form.querySelector(this._configs.nameInputSelector);
    this._profileDescInput = this._form.querySelector(this._configs.descriptionInputSelector);
  }

  open() {
    const data = this._formDataGetter();
    this._profileNameInput.value = data.name;
    this._profileDescInput.value = data.about;

    super.open();
  }
}
