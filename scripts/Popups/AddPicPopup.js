import { FormPopup} from "./FormPopup.js";

import { Card } from "../Card.js"
import { cardSelector} from "../cardData.js";

export class AddPicPopup extends FormPopup {
  constructor(picturePopup, selector, createCard) {
    super(selector);

    this._picturePopup = picturePopup;
    this._createCard = createCard;
  }

  _initComponents() {
    super._initComponents();
    this._cards = document.querySelector(this._selector.cardsSelector);

    this._name = this._element.querySelector(this._selector.nameSelector);
    this._link = this._element.querySelector(this._selector.linkSelector);
  }

  _submitAction() {
    const cardData = {
      name: this._name.value,
      link: this._link.value,
    };

    this._cards.prepend(this._createCard(cardData));
  }
}
