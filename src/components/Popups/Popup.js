export default class Popup {
  constructor(configs) {
    this._configs = configs;
    this._initComponents();

    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _initComponents() {
    this._element = document.querySelector(this._configs.popupSelector);
  }

  _handleClick(evt) {
    if (evt.target.classList.contains(this._configs.backgroundClass) ||
        evt.target.classList.contains(this._configs.closeBtnClass)) {
         this.close();
       }
  }

  setEventListeners() {
    this._element.addEventListener("click", this._handleClick.bind(this));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _setTemporaryEventListeners() {
    window.addEventListener("keydown", this._handleEscClose);
  }

  open() {
    this._setTemporaryEventListeners();
    this._element.classList.add(this._configs.popupOpenedClass);
  }

  _removeTemporaryEventListeners() {
    window.removeEventListener("keydown", this._keyHandlerWrapper);
  }

  close() {
    this._removeTemporaryEventListeners();
    this._element.classList.remove(this._configs.popupOpenedClass);
  }
}
