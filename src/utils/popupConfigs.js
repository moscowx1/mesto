const popupConfigs = {
  popupOpenedClass: "popup_opened",
  closeBtnClass: "popup__close",
  backgroundClass: "popup__back"
};

export const picturePopupConfigs = {
  popupSelector: ".popup_img",
  imgSelector: ".popup__img",
  captionSelector: ".popup__caption",
};
picturePopupConfigs.__proto__ = popupConfigs;

const formPopupConfigs = {
  formSelector: ".popup__form"
};
formPopupConfigs.__proto__ = popupConfigs;

export const addPicPopupConfigs = {
  popupSelector: ".popup_add-pic",
  nameSelector: ".popup__img-name",
  linkSelector: ".popup__img-link",
  openElementSelector: ".profile__add-button",
  cardsSelector: ".elements"
};
addPicPopupConfigs.__proto__ = formPopupConfigs;

export const confirmDeletePopupConfigs = {
  popupSelector: ".popup_confirm-delete"
};
confirmDeletePopupConfigs.__proto__ = formPopupConfigs;

export const changeAvatarPopupConfigs = {
  popupSelector: ".popup_change-avatar",
  linkSelector: ".popup__img-link",
  openElementSelector: ".profile__avatar-wrapper",
}
changeAvatarPopupConfigs.__proto__ = formPopupConfigs;

export const profilePopupConfigs = {
  popupSelector: ".popup_edit-profile",
  openElementSelector: ".profile__edit-button",
  avatarSelector: ".profile__avatar",
  nameInputSelector: ".popup__profile-name",
  descriptionInputSelector: ".popup__profile-desc",
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__desc"
};
profilePopupConfigs.__proto__ = formPopupConfigs;
