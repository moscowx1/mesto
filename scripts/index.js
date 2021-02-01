import Card from "../components/Card.js";
import { cardConfigs,
         initialCardsData,
         cardContainerSelector} from "../utils/cardData.js";

import { editProfilePopupConfigs,
         picturePopupConfigs,
         addPicPopupConfigs} from "../utils/popupConfigs.js";

import PopupWithImage from "../components/Popups/PopupWithImage.js";
import AddPicPopup from "../components/Popups/AddPicPopup.js";
import EditProfilePopup from "../components/Popups/EditProfilePopup.js";

import FormValidator from "../components/FormValidator.js";
import { validationConfigs } from "../utils/validatorConfigs.js";

import Section from "../components/Section.js";

const picturePopup = new PopupWithImage(picturePopupConfigs);

const cardRenderer = (cardData) => {
  const card = new Card(cardData, picturePopup, cardConfigs);
  const cardElem =  card.getCard();
  cardSection.addItem(cardElem);
}

const cardSection = new Section({
  items: initialCardsData,
  renderer: cardRenderer
}, cardContainerSelector);

const popups = [picturePopup,
                new AddPicPopup(picturePopup, addPicPopupConfigs,cardRenderer),
                new EditProfilePopup(editProfilePopupConfigs)];

const forms = Array.from(document.querySelectorAll(validationConfigs.formSelector));
forms.forEach(form => new FormValidator(form, validationConfigs).enableValidation());

cardSection.renderItems();
