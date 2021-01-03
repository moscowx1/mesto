export class Popup {
  constructor(configs){
    this._configs = configs;
    this._initComponents();
    this._setEventListeners();
  }

  _initComponents() {
    this._element = document.querySelector(this._configs.popupSelector);
  }

  _handleClick(evt) {
    if(evt.target.classList.contains(this._configs.backgroundClass) ||
       evt.target.classList.contains(this._configs.closeBtnClass)){
        this.closePopup();
       }
  }

  _setEventListeners() {
    this._element.addEventListener("click", this._handleClick.bind(this));
  }

  _handleKey(evt) {
    if(evt.key === "Escape"){
      this.closePopup();
    }
  }

  _setTemporaryEventListeners() {
    this._keyHandlerWrapper = this._handleKey.bind(this);
    window.addEventListener("keydown", this._keyHandlerWrapper);
  }

  openPopup() {
    this._setTemporaryEventListeners();
    this._element.classList.add(this._configs.popupOpenedClass);
  }

  _removeTemporaryEventListeners() {
    window.removeEventListener("keydown", this._keyHandlerWrapper);
  }

  closePopup() {
    this._removeTemporaryEventListeners();
    this._element.classList.remove(this._configs.popupOpenedClass);
  }
}
