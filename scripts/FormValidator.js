export class FormValidator {
  constructor(form, configs){
    this._form = form;
    this._configs = configs;

    this._initComponents();
  }

  _initComponents() {
    this._inputs = Array.from(this._form.querySelectorAll(this._configs.inputSelector));
    this._submitBtn = this._form.querySelector(this._configs.submitButtonSelector);
    this._autoFilledInputs = this._form.classList.contains(this._configs.formAutoFilledInputs);
  }

  _showInputError(input) {
    const errorElem = this._form.querySelector(`.${input.id}-error`);
    errorElem.textContent = input.validationMessage;
    errorElem.classList.add(this._configs.errorClass);

    input.classList.add(this._configs.inputErrorClass);
  }

  _hideInputError(input) {
    const errorElem = this._form.querySelector(`.${input.id}-error`);
    errorElem.textContent = '';
    errorElem.classList.remove(this._configs.errorClass);

    input.classList.remove(this._configs.inputErrorClass);
  };

  _hasIndalidInput() {
    return this._inputs.some(input => !input.validity.valid);
  }

  _setSubmitBtnState(disabled) {
    if(disabled){
      this._submitBtn.classList.add(this._configs.inactiveButtonClass);
    }
    else{
      this._submitBtn.classList.remove(this._configs.inactiveButtonClass);
    }

    this._submitBtn.disabled = disabled;
  }

  _handleFormReset() {
    this._inputs.forEach(input => this._hideInputError(input));
    this._setSubmitBtnState(!this._autoFilledInputs);
  }

  _checkInputValidity(input) {
    if (!input.validity.valid){
      this._showInputError(input);
    }
    else{
      this._hideInputError(input);
    }
  }

  _handleInput(input) {
    this._checkInputValidity(input);
    this._setSubmitBtnState(this._hasIndalidInput());
  }

  _setEventListeners() {
    this._form.addEventListener("reset", this._handleFormReset.bind(this));

    this._inputs.forEach(input =>
      input.addEventListener("input", () => this._handleInput(input)));
  }

  enableValidation() {
    if(!this._autoFilledInputs){
      this._setSubmitBtnState(this._hasIndalidInput());
    }

    this._setEventListeners();
  }
}
