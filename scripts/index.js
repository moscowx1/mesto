import { Card} from "./Card.js";
import { cardSelector,
         initialCardsData} from "./cardData.js";

import { editProfilePopupSelector,
         picturePopupSelector,
         addPicPopupSelector} from "./Popups/popupSelectors.js";

import { PicturePopup} from "./Popups/PicturePopup.js";
import { AddPicPopup} from "./Popups/AddPicPopup.js";
import { EditProfilePopup} from "./Popups/EditProfilePopup.js";

import { FormValidator} from "./FormValidator.js";
import { validationSelectors} from "./validatorData.js";

const picturePopup = new PicturePopup(picturePopupSelector);

const createCard = (cardData) => {
  return new Card(cardData, picturePopup, cardSelector).getCard();
};


const popups = [picturePopup,
                new AddPicPopup(picturePopup, addPicPopupSelector, createCard),
                new EditProfilePopup(editProfilePopupSelector)];

const forms = Array.from(document.querySelectorAll(validationSelectors.formSelector));
forms.forEach(form => new FormValidator(form, validationSelectors).enableValidation());

const elements = document.querySelector(".elements");
const initCards = () => {
  const cards = initialCardsData.map(createCard);
  elements.prepend(...cards);
};
window.addEventListener("load", initCards);
