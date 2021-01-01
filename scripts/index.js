import { Card } from "./Card.js";
import {cardSelector, initialCardsData} from "./initialData.js";

import { editProfilePopupSelector, picturePopupSelector, addPicPopupSelector} from "./initialData.js";

import { PicturePopup} from "./Popups/PicturePopup.js";
import { AddPicPopup} from "./Popups/AddPicPopup.js";
import { EditProfilePopup} from "./Popups/EditProfilePopup.js";

const picturePopup = new PicturePopup(picturePopupSelector);
const addPicPopup = new AddPicPopup(picturePopup, addPicPopupSelector);
const editProfilePopup = new EditProfilePopup(editProfilePopupSelector);

const elements = document.querySelector(".elements");

const initCards = () => {
  const cards = initialCardsData.map(cardData =>
    new Card(cardData, picturePopup, cardSelector));

  elements.prepend(...cards.map(card => card.getCard()));
};

window.addEventListener("load", initCards);
