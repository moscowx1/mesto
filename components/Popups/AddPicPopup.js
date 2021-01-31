import { FormPopup} from "./FormPopup.js";

export class AddPicPopup extends FormPopup {
  constructor(picturePopup, configs, cardFuncs) {
    super(configs);

    this._picturePopup = picturePopup;
    this._cardFuncs = cardFuncs;
  }

  _initComponents() {
    super._initComponents();
    this._name = this._element.querySelector(this._configs.nameSelector);
    this._link = this._element.querySelector(this._configs.linkSelector);
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
