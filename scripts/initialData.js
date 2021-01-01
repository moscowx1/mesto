export const initialCardsData = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];

export const cardSelector = {
  templateSelector: ".element-template",
  cardSelector: ".element",
  nameSelector: ".element__name",
  imgSelector: ".element__img",
  likeBtnSelector: ".element__like-btn",
  likeBtnActiveClass: "element__like-btn_active",
  removeBtnSelector: ".element__remove-btn"
};

export const picturePopupSelector = {
  popupSelector: ".popup_img",
  popupOpenedClass: "popup_opened",
  imgSelector: ".popup__img",
  captionSelector: ".popup__caption",
  closeBtnClass: "popup__close",
  backgroundClass: "popup__back"
}

export const cardErrorMsg = "Возникла ошибка при добавлении нового места";

export const addPicPopupSelector = {
  popupSelector: ".popup_add-pic",
  popupOpenedClass: "popup_opened",
  closeBtnClass: "popup__close",
  backgroundClass: "popup__back",
  formSelector: ".popup__form",
  nameSelector: ".popup__img-name",
  linkSelector: ".popup__img-link",
  openBtnSelector: ".profile__add-button",
  cardsSelector: ".elements"
}

export const editProfilePopupSelector = {
  popupSelector: ".popup_edit-profile",
  popupOpenedClass: "popup_opened",
  closeBtnClass: "popup__close",
  backgroundClass: "popup__back",
  formSelector: ".popup__form",
  openBtnSelector: ".profile__edit-button",
  nameInputSelector: ".popup__profile-name",
  descriptionInputSelector: ".popup__profile-desc",
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__desc"
}
