import "../pages/index.css";

import Card from "../components/Card.js";
import { cardConfigs,
         initialCardsData,
         cardContainerSelector,
} from "../utils/cardData.js";
import Section from "../components/Section.js";

import { profilePopupConfigs,
         picturePopupConfigs,
         addPicPopupConfigs,
         confirmDeletePopupConfigs,
         changeAvatarPopupConfigs
} from "../utils/popupConfigs.js";
import PopupWithImage from "../components/Popups/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/Popups/PopupWithForm.js";
import PopupWithAutoFilledForm from "../components/Popups/PopupWithAutoFilledForm.js";

import FormValidator from "../components/FormValidator.js";
import { validationConfigs,
         formValidationSelectors } from "../utils/validatorConfigs.js";
import PopupWithSubmit from "../components/Popups/PopupWithSubmit";

import Api from "../components/Api.js";

const api = new Api();

const userInfo = new UserInfo(profilePopupConfigs, api);
await userInfo.initProfile();

const picturePopup = new PopupWithImage(picturePopupConfigs);

let cardForRemove;
const confirmDeletePopup = new PopupWithSubmit(
  confirmDeletePopupConfigs,
  () => {
    if (cardForRemove) {
      api.removeCard(cardForRemove.getId())
        .then(() => {
          cardForRemove.removeElement();
          confirmDeletePopup.close();
        });
  }}
);

const isCardLiked = (cardData) => cardData.likes.some(like => like._id == userInfo.info._id);

const createCard = (data) => {
  data.canRemove = data.owner._id === userInfo.info._id;
  data.isLiked = isCardLiked(data);
  const card = new Card(data,
    () => picturePopup.open(data.name, data.link),
    (card) => {
      cardForRemove = card;
      confirmDeletePopup.open();
    },
    (id, isLiked) => {
      api.toggleCardLine(id, isLiked)
        .then((data) => {
          card.updateData(data, isCardLiked(data));
          card.updateLikes();
        });
    },
    cardConfigs);
  return card.getCard();
};

const cardSection = new Section(
    await api.getCards(),
    (cardData) => {
      const cardElem = createCard(cardData);
      cardSection.addItem(cardElem);
    }, cardContainerSelector
);

const addPicPopup = new PopupWithForm(
  addPicPopupConfigs,
  (initData) => {
    api.addCard(initData)
      .then(data => {
        const elem = createCard(data)
        cardSection.addItem(elem)
      })
      .finally(() => addPicPopup.close());
  });

const changeAvatarPopup = new PopupWithForm(
  changeAvatarPopupConfigs,
  (avatar) => {
    api.setUserAvatar(avatar)
      .then(() => userInfo.setUserAvatar(avatar.avatar))
      .finally(() => changeAvatarPopup.close());
  });

const profilePopup = new PopupWithAutoFilledForm(
  profilePopupConfigs,
  (data) => {
    api.setUserInfo(data)
      .then(data => userInfo.setUserInfo(data))
      .finally(() => profilePopup.close());
  },
  userInfo.getUserInfo,
);

const popups = [picturePopup, addPicPopup, profilePopup, confirmDeletePopup, changeAvatarPopup];
popups.forEach(popup => popup.setEventListeners());

const formAddPic = document.querySelector(formValidationSelectors.formAddPic);
const validatorAddPic = new FormValidator(formAddPic, validationConfigs);
validatorAddPic.enableValidation();

const formProfile = document.querySelector(formValidationSelectors.formProfile);
const validatorProfile = new FormValidator(formProfile, validationConfigs);
validatorProfile.enableValidation();

const formChangeAvatar = document.querySelector(formValidationSelectors.formChangeAvatar);
const validatorChangeAvatar = new FormValidator(formChangeAvatar, validationConfigs);
validatorChangeAvatar.enableValidation();

cardSection.renderItems();
