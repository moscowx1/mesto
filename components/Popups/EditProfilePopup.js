import PopupWithForm from "./PopupWithForm.js";

export default class EditProfilePopup extends PopupWithForm {
  constructor(configs){
    super(configs);
  }

  _initComponents() {
    super._initComponents();

    this._nameInput = this._element.querySelector(this._configs.nameInputSelector);
    this._descriptionInput = this._element.querySelector(this._configs.descriptionInputSelector);

    this._name = document.querySelector(this._configs.nameSelector);
    this._description = document.querySelector(this._configs.descriptionSelector);
  }

  _submitAction() {
    this._name.textContent = this._nameInput.value;
    this._description.textContent = this._descriptionInput.value;
  }

  open() {
    this._nameInput.value = this._name.textContent;
    this._descriptionInput.value = this._description.textContent;
    super.open();
  }
}
