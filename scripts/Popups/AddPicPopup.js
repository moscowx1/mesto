import { FormPopup} from "./FormPopup.js";

import { Card } from "./../Card.js"
import { cardSelector} from "../initialData.js";

export class AddPicPopup extends FormPopup {
  constructor(picturePopup, selector) {
    super(selector);

    this._picturePopup = picturePopup;
  }

  _initComponents() {
    super._initComponents();
    this._cards = document.querySelector(this._selector.cardsSelector);

    this._name = this._element.querySelector(this._selector.nameSelector);
    this._link = this._element.querySelector(this._selector.linkSelector);
  }

  _submitAction() {
    const data = {
      name: this._name.value,
      link: this._link.value,
    };
    const card = new Card(data, this._picturePopup, cardSelector);

    this._cards.prepend(card.getCard());
  }
}
