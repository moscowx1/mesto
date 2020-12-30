export  class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._link = data.link;
    this._errorMsg = data.errorMsg;

    this._selector = selector;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._selector.templateSelector)
      .content
      .querySelector(this._selector.cardSelector)
      .cloneNode(true);

    return card;
  }

  _initComponents() {
    this._img = this._element.querySelector(this._selector.imgSelector);

    this._likeBtn = this._element.querySelector(this._selector.likeBtnSelector);
    this._removeBtn = this._element.querySelector(this._selector.removeBtnSelector);

    this._elementName = this._element.querySelector(this._selector.nameSelector);
  }

  _removeElement() {
    this._element.remove();
  }

  _handleErrorImg() {
    this._removeElement();
    alert(this._errorMsg);
  }

  _likeCard () {
    this._likeBtn.classList.toggle(this._selector.likeBtnActiveClass);
  };

  _setEventListeners() {
    //this._img.addEventListener("click", () => openImg(this._name, this._link));~
    this._img.addEventListener("error", this._handleErrorImg.bind(this));

    this._likeBtn.addEventListener("click", this._likeCard.bind(this));
    this._removeBtn.addEventListener("click", this._removeElement.bind(this));
  }

  getCard() {
    this._element = this._getTemplate();
    this._initComponents();
    this._setEventListeners();

    this._img.src = this._link;
    this._img.alt = this._name;

    this._elementName.textContent = this._name;

    return this._element;
  }
}
