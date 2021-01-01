import { Card } from "./Card.js";
import {cardSelector, initialCardsData, picturePopupSelector} from "./initialData.js";
import { PicturePopup} from "./Popups/PicturePopup.js";

const picturePopup = new PicturePopup(picturePopupSelector);

const cardErrorMsg = "Возникла ошибка при добавлении нового места";

const popups = Array.from(document.querySelectorAll(".popup"));

const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupAddPic = document.querySelector(".popup_add-pic");

const formEditProfile = popupEditProfile.querySelector(".popup__form");
const formAddPic = popupAddPic.querySelector(".popup__form");

const profileNameInput = popupEditProfile.querySelector(".popup__profile-name");
const profileDescInput = popupEditProfile.querySelector(".popup__profile-desc");

const imgNameInput = popupAddPic.querySelector(".popup__img-name");
const imgLinkInput = popupAddPic.querySelector(".popup__img-link");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__desc");

const openEditProfileBtn = document.querySelector(".profile__edit-button");
const openAddPicBtn = document.querySelector(".profile__add-button");

const elements = document.querySelector(".elements");

let openedPopup;

const hidePopup = (popup) => {
  popup.classList.remove("popup_opened");

  window.removeEventListener("keydown", hidePopupsOnEsc);
};

const hidePopupsOnEsc = (evt) => {
  if(evt.key === "Escape")
    hidePopup(openedPopup);
}

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  openedPopup = popup;

  window.addEventListener("keydown", hidePopupsOnEsc);
};

const openEditProfilePopup = () => {
  formEditProfile.reset();

  profileNameInput.value = profileName.textContent;
  profileDescInput.value = profileDesc.textContent;

  openPopup(popupEditProfile);
}

const openAddPicPopup = () => {
  formAddPic.reset();

  openPopup(popupAddPic);
};

const submitEditProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;

  hidePopup(popupEditProfile);
};

const submitAddPic = (evt) => {
  evt.preventDefault();

  const initData = {
    name: imgNameInput.value,
    link: imgLinkInput.value
  };

  const card = new Card(getCardData(initData), picturePopup, cardSelector);
  elements.prepend(card.getCard());

  formAddPic.reset();
  hidePopup(popupAddPic);
};

const getCardData = (initData) => {
  return {
    name: initData.name,
    link: initData.link,
    errorMsg: cardErrorMsg
  };
};

const initCards = () => {
  const cards = initialCardsData.map(cardData =>
    new Card(getCardData(cardData), picturePopup, cardSelector));

  elements.prepend(...cards.map(card => card.getCard()));
};

openEditProfileBtn.addEventListener("click",  openEditProfilePopup);
openAddPicBtn.addEventListener("click",  openAddPicPopup);

popupEditProfile.addEventListener("submit", submitEditProfile);
popupAddPic.addEventListener("submit", submitAddPic);

popups.forEach(popup =>
  popup.addEventListener("click", (evt) => {
    if(evt.target.classList.contains("popup__back") ||
       evt.target.classList.contains("popup__close"))
        hidePopup(popup);
}));

window.addEventListener("load", initCards);
