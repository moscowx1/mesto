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
} from "../utils/popupConfigs.js";
import PopupWithImage from "../components/Popups/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/Popups/PopupWithForm.js";
import PopupWithAutoFilledForm from "../components/Popups/PopupWithAutoFilledForm.js";

import FormValidator from "../components/FormValidator.js";
import { validationConfigs } from "../utils/validatorConfigs.js";

const picturePopup = new PopupWithImage(picturePopupConfigs);

const createCard = (cardData) => {
  const card = new Card(cardData,
    () => picturePopup.open(card.name, card.link),
    cardConfigs);
  return card.getCard();
}

const cardSection = new Section({
    items: initialCardsData,
    renderer: (cardData) => {
      const cardElem = createCard(cardData);
      cardSection.addItem(cardElem);
    },
  }, cardContainerSelector
);

const addPicPopup = new PopupWithForm(
  addPicPopupConfigs,
  (cardData) => {
    const cardElem = createCard(cardData);
    cardSection.addItem(cardElem);
});


const userInfo = new UserInfo(profilePopupConfigs);
const profilePopup = new PopupWithAutoFilledForm(
  profilePopupConfigs,
  userInfo.setUserInfo,
  userInfo.getUserInfo,
);

const popups = [picturePopup, addPicPopup, profilePopup];
popups.forEach(popup => popup.setEventListeners());

const forms = Array.from(document.querySelectorAll(validationConfigs.formSelector));
const validators = Object.fromEntries(forms.map(form => [form.getAttribute("name"), new FormValidator(form, validationConfigs)]));
Object.values(validators).forEach(validator => validator.enableValidation());

cardSection.renderItems();
