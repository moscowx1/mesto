import { FormPopup} from "./FormPopup.js";

export class EditProfilePopup extends FormPopup {
  constructor(selector){
    super(selector);
  }

  _initComponents() {
    super._initComponents();

    this._nameInput = this._element.querySelector(this._selector.nameInputSelector);
    this._descriptionInput = this._element.querySelector(this._selector.descriptionInputSelector);

    this._name = document.querySelector(this._selector.nameSelector);
    this._description = document.querySelector(this._selector.descriptionSelector);
  }

  _submitAction() {
    this._name.textContent = this._nameInput.value;
    this._description.textContent = this._descriptionInput.value;
  }

  openPopup() {
    this._nameInput.value = this._name.textContent;
    this._descriptionInput.value = this._description.textContent;
    super.openPopup();
  }
}
