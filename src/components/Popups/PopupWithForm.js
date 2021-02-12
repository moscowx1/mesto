import PopupWithSubmit from "./PopupWithSubmit.js";

export default class PopupWithForm extends PopupWithSubmit {
  constructor(configs, submitHandler) {
    super(configs);

    this._submitHandler = () => submitHandler(this._getInputValues());
  }

  _initComponents() {
    super._initComponents();
    this._openElement = document.querySelector(this._configs.openElementSelector);
  }

  setEventListeners() {
    super.setEventListeners();
    this._openElement.addEventListener("click", this.open.bind(this));
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll("input"));
    const nameValuePair =  inputs.map(input => [input.name, input.value]);
    return Object.fromEntries(nameValuePair);
  }
}
