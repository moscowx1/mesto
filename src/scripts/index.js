import Card from "../components/Card.js";
import { cardConfigs,
  initialCardsData,
  cardContainerSelector,
} from "../utils/cardData.js";
import Section from "../components/Section.js";

import { profilePopupConfigs,
  picturePopupConfigs,
  addPicPopupConfigs,
} from "../utils/popupConfigs.js";
import PopupWithImage from "../components/Popups/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/Popups/PopupWithForm.js";

import FormValidator from "../components/FormValidator.js";
import { validationConfigs } from "../utils/validatorConfigs.js";

const picturePopup = new PopupWithImage(picturePopupConfigs);

const cardRenderer = (cardData) => {
  const card = new Card(cardData,
    () => picturePopup.open(card.name, card.link),
    cardConfigs);
  const cardElem = card.getCard();
  cardSection.addItem(cardElem);
};

const cardSection = new Section({
    items: initialCardsData,
    renderer: cardRenderer,
  }, cardContainerSelector
);

new PopupWithForm(addPicPopupConfigs, cardRenderer, () => {});

const profileNameInput = document.querySelector(profilePopupConfigs.nameInputSelector);
const profileDescInput = document.querySelector(profilePopupConfigs.descriptionInputSelector);
const userInfo = new UserInfo(profilePopupConfigs);
new PopupWithForm(
  profilePopupConfigs,
  userInfo.setUserInfo,
  () => {
    const info = userInfo.getUserInfo();
    profileNameInput.value = info.name;
    profileDescInput.value = info.desc;
  }
);

const forms = Array.from(
  document.querySelectorAll(validationConfigs.formSelector));

forms.forEach((form) =>
  new FormValidator(form, validationConfigs).enableValidation());

cardSection.renderItems();
