import { Card} from "./Card.js";
import { cardSelectors,
         initialCardsData} from "./cardData.js";

import { editProfilePopupSelectors,
         picturePopupSelectors,
         addPicPopupSelectors} from "./Popups/popupSelectors.js";

import { PicturePopup} from "./Popups/PicturePopup.js";
import { AddPicPopup} from "./Popups/AddPicPopup.js";
import { EditProfilePopup} from "./Popups/EditProfilePopup.js";

import { FormValidator} from "./FormValidator.js";
import { validationConfigs} from "./validatorData.js";

const picturePopup = new PicturePopup(picturePopupSelectors);

const createCard = (cardData) => {
  return new Card(cardData, picturePopup, cardSelectors).getCard();
};

const popups = [picturePopup,
                new AddPicPopup(picturePopup, addPicPopupSelectors, createCard),
                new EditProfilePopup(editProfilePopupSelectors)];

const forms = Array.from(document.querySelectorAll(validationConfigs.formSelector));
forms.forEach(form => new FormValidator(form, validationConfigs).enableValidation());

const elements = document.querySelector(".elements");
const initCards = () => {
  const cards = initialCardsData.map(createCard);
  elements.prepend(...cards);
};
window.addEventListener("load", initCards);
