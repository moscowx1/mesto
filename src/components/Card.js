export default class Card {
  constructor(data, clickHandler, removeHandler, configs) {
    this._data = data;

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
    if(this._data.isLiked)
      this._likeBtn.classList.add(this._configs.likeBtnActiveClass);

    this._removeBtn = this._element.querySelector(this._configs.removeBtnSelector);

    if (!this._data.canRemove)
      this._removeBtn.classList.add(this._configs.removeBtnInvisibleClass);

    this.likeCount = this._element.querySelector(this._configs.likeCountSelector);
    this.likeCount.textContent = this._data.likes.length;

    this._elementName = this._element.querySelector(this._configs.nameSelector);
  }

  removeElement() {
    this._element.remove();
  }

  _handleErrorImg() {
    this.removeElement();
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

    this._img.src = this._data.link;
    this._img.alt = this._data.name;

    this._likeCount = this._data.likes.length;

    this._elementName.textContent = this._data.name;

    return this._element;
  }
}
