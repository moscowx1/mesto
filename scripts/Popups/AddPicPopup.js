import { FormPopup} from "./FormPopup.js";

export class AddPicPopup extends FormPopup {
  constructor(picturePopup, selectors, createCard) {
    super(selectors);

    this._picturePopup = picturePopup;
    this._createCard = createCard;
  }

  _initComponents() {
    super._initComponents();
    this._cards = document.querySelector(this._selectors.cardsSelector);

    this._name = this._element.querySelector(this._selectors.nameSelector);
    this._link = this._element.querySelector(this._selectors.linkSelector);
  }

  _submitAction() {
    const cardData = {
      name: this._name.value,
      link: this._link.value,
    };

    this._cards.prepend(this._createCard(cardData));
  }
}
