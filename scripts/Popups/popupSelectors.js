const popupSelectors = {
  popupOpenedClass: "popup_opened",
  closeBtnClass: "popup__close",
  backgroundClass: "popup__back"
};

export const picturePopupSelectors = {
  popupSelector: ".popup_img",
  imgSelector: ".popup__img",
  captionSelector: ".popup__caption",
};
picturePopupSelectors.__proto__ = popupSelectors;


const formPopupSelectors = {
  formSelector: ".popup__form"
};
formPopupSelectors.__proto__ = popupSelectors;

export const addPicPopupSelectors = {
  popupSelector: ".popup_add-pic",
  nameSelector: ".popup__img-name",
  linkSelector: ".popup__img-link",
  openBtnSelector: ".profile__add-button",
  cardsSelector: ".elements"
};
addPicPopupSelectors.__proto__ = formPopupSelectors;

export const editProfilePopupSelectors = {
  popupSelector: ".popup_edit-profile",
  openBtnSelector: ".profile__edit-button",
  nameInputSelector: ".popup__profile-name",
  descriptionInputSelector: ".popup__profile-desc",
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__desc"
};
editProfilePopupSelectors.__proto__ = formPopupSelectors;
