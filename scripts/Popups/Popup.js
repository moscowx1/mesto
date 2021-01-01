export class Popup {
  constructor(selector){
    this._selector = selector;
    this._initComponents();
    this._setEventListeners();
  }

  _initComponents() {
    this._element = document.querySelector(this._selector.popupSelector);
  }

  _handleClick(evt) {
    if(evt.target.classList.contains(this._selector.backgroundClass) ||
       evt.target.classList.contains(this._selector.closeBtnClass))
     this.closePopup();
  }

  _setEventListeners() {
    this._element.addEventListener("click", this._handleClick.bind(this));
  }

  _handleKey(evt) {
    if(evt.key === "Escape")
      this.closePopup();
  }

  _setTemporaryEventListeners() {
    this._keyHandlerWrapper = this._handleKey.bind(this);
    window.addEventListener("keydown", this._keyHandlerWrapper);
  }

  openPopup() {
    this._setTemporaryEventListeners();
    this._element.classList.add(this._selector.popupOpenedClass);
  }

  _removeTemporaryEventListeners() {
    window.removeEventListener("keydown", this._keyHandlerWrapper);
  }

  closePopup() {
    this._removeTemporaryEventListeners();
    this._element.classList.remove(this._selector.popupOpenedClass);
  }
}
