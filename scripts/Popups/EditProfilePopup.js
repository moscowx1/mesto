import { FormPopup} from "./FormPopup.js";

export class EditProfilePopup extends FormPopup {
  constructor(selectors){
    super(selectors);
  }

  _initComponents() {
    super._initComponents();

    this._nameInput = this._element.querySelector(this._selectors.nameInputSelector);
    this._descriptionInput = this._element.querySelector(this._selectors.descriptionInputSelector);

    this._name = document.querySelector(this._selectors.nameSelector);
    this._description = document.querySelector(this._selectors.descriptionSelector);
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
