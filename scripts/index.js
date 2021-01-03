import { Card} from "./Card.js";
import { cardConfigs,
         initialCardsData} from "./cardData.js";

import { editProfilePopupConfigs,
         picturePopupConfigs,
         addPicPopupConfigs} from "./Popups/popupConfigs.js";

import { PicturePopup} from "./Popups/PicturePopup.js";
import { AddPicPopup} from "./Popups/AddPicPopup.js";
import { EditProfilePopup} from "./Popups/EditProfilePopup.js";

import { FormValidator} from "./FormValidator.js";
import { validationConfigs} from "./validatorConfigs.js";

const picturePopup = new PicturePopup(picturePopupConfigs);

const elements = document.querySelector(".elements");
const cardFuncs = {
  create: (cardData) => new Card(cardData, picturePopup, cardConfigs).getCard(),
  add: (card) => elements.prepend(card)
};

const popups = [picturePopup,
                new AddPicPopup(picturePopup, addPicPopupConfigs, cardFuncs),
                new EditProfilePopup(editProfilePopupConfigs)];

const forms = Array.from(document.querySelectorAll(validationConfigs.formSelector));
forms.forEach(form => new FormValidator(form, validationConfigs).enableValidation());

const initCards = () => {
  const cards = initialCardsData.map(cardFuncs.create);
  cards.forEach(cardFuncs.add);
};
window.addEventListener("load", initCards);
