export default class Card {
  constructor(data, clickHandler, removeHandler, configs) {
    this.name = data.name;
    this.link = data.link;

    this._clickHandler = clickHandler;
    this._removeHanlder = removeHandler;
    this._configs = configs;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._configs.templateSelector)
      .content
      .querySelector(this._configs.cardSelector)
      .cloneNode(true);

    return card;
  }

  _initComponents() {
    this._img = this._element.querySelector(this._configs.imgSelector);

    this._likeBtn = this._element.querySelector(this._configs.likeBtnSelector);
    this._removeBtn = this._element.querySelector(this._configs.removeBtnSelector);

    this._elementName = this._element.querySelector(this._configs.nameSelector);
  }

  removeElement() {
    this._element.remove();
  }

  _handleErrorImg() {
    this._removeElement();
    alert(this._configs.errorMsg);
  }

  _likeCard () {
    this._likeBtn.classList.toggle(this._configs.likeBtnActiveClass);
  };

  _setEventListeners() {
    this._img.addEventListener("click", this._clickHandler);
    this._img.addEventListener("error", this._handleErrorImg.bind(this));

    this._likeBtn.addEventListener("click", this._likeCard.bind(this));
    this._removeBtn.addEventListener("click", () => this._removeHanlder(this));
  }

  getCard() {
    this._element = this._getTemplate();
    this._initComponents();
    this._setEventListeners();

    this._img.src = this.link;
    this._img.alt = this.name;

    this._elementName.textContent = this.name;

    return this._element;
  }
}
