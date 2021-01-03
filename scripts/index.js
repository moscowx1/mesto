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
const popups = [picturePopup,
                new AddPicPopup(picturePopup, addPicPopupSelector),
                new EditProfilePopup(editProfilePopupSelector)];

const forms = Array.from(document.querySelectorAll(validationSelectors.formSelector));
forms.forEach(form => new FormValidator(form, validationSelectors).enableValidation());

const elements = document.querySelector(".elements");
const initCards = () => {
  const cards = initialCardsData.map(cardData =>
    new Card(cardData, picturePopup, cardSelector));
  elements.prepend(...cards.map(card => card.getCard()));
};
window.addEventListener("load", initCards);
