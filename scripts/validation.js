const validationSelector = {
  formSelector: '.popup__form',
  formAutoFilledInputs: 'popup__form_autofilled-inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__error_visible'
};

const showInputError = (form, input, errorMsg, selector) => {
  const errorElem = form.querySelector(`.${input.id}-error`);
  errorElem.textContent = errorMsg;
  errorElem.classList.add(selector.errorClass);

  input.classList.add(selector.inputErrorClass);
};

const hideInputError = (form, input, selector) => {
  const errorElem = form.querySelector(`.${input.id}-error`);
  errorElem.classList.remove(selector.errorClass);
  errorElem.textContent = '';

  input.classList.remove(selector.inputErrorClass);
};

const checkInputValidity = (form, input, selector) => {
  if (!input.validity.valid)
    showInputError(form, input,  input.validationMessage, selector);
  else
    hideInputError(form, input, selector);
};

const hasIndalidInput = (inputs) => {
  return inputs.some(input => !input.validity.valid);
};

const setBtnState = (btn, inactiveBtnClass, disabled) =>{
  if(disabled){
    btn.classList.add(inactiveBtnClass);
    btn.disabled = true;
  }
  else{
    btn.classList.remove(inactiveBtnClass);
    btn.disabled = false;
  }
};

const toggleBtnState = (inputs, btn, inactiveBtnClass) => {
  setBtnState(btn, inactiveBtnClass, hasIndalidInput(inputs));
};

const setEventListeners = (form, selector) => {
  const inputs = Array.from(form.querySelectorAll(selector.inputSelector));
  const submitBtn = form.querySelector(selector.submitButtonSelector);
  const autoFilledInputs = form.classList.contains(selector.formAutoFilledInputs);

  if(!autoFilledInputs)
    toggleBtnState(inputs, submitBtn, selector.inactiveButtonClass);

  form.addEventListener("reset", () => {
    inputs.forEach(input => hideInputError(form, input, selector));
    setBtnState(submitBtn, selector.inactiveButtonClass, !autoFilledInputs);
  });

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      checkInputValidity(form, input, selector);
      toggleBtnState(inputs, submitBtn, selector.inactiveButtonClass);
    });
  });
};

const enableValidation = (selector) => {
  const forms = Array.from(document.querySelectorAll(selector.formSelector));
  forms.forEach(form => setEventListeners(form, selector));
};

enableValidation(validationSelector);
