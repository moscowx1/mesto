const popupSelector = {
  popupOpenedClass: "popup_opened",
  closeBtnClass: "popup__close",
  backgroundClass: "popup__back"
};

export const picturePopupSelector = {
  popupSelector: ".popup_img",
  imgSelector: ".popup__img",
  captionSelector: ".popup__caption",
};
picturePopupSelector.__proto__ = popupSelector;


const formPopupSelector = {
  formSelector: ".popup__form"
};
formPopupSelector.__proto__ = popupSelector;

export const addPicPopupSelector = {
  popupSelector: ".popup_add-pic",
  nameSelector: ".popup__img-name",
  linkSelector: ".popup__img-link",
  openBtnSelector: ".profile__add-button",
  cardsSelector: ".elements"
};
addPicPopupSelector.__proto__ = formPopupSelector;

export const editProfilePopupSelector = {
  popupSelector: ".popup_edit-profile",
  openBtnSelector: ".profile__edit-button",
  nameInputSelector: ".popup__profile-name",
  descriptionInputSelector: ".popup__profile-desc",
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__desc"
};
editProfilePopupSelector.__proto__ = formPopupSelector;
