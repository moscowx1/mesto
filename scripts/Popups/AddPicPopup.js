import { FormPopup} from "./FormPopup.js";

export class AddPicPopup extends FormPopup {
  constructor(picturePopup, selectors, cardFuncs) {
    super(selectors);

    this._picturePopup = picturePopup;
    this._cardFuncs = cardFuncs;

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

    const card = this._cardFuncs.create(cardData);
    this._cardFuncs.add(card);
  }
}
