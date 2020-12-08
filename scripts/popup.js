const popupEditProfile = document.querySelector("#popup-edit-profile");
const popupAddPic = document.querySelector("#popup-add-pic");
const popupImg = document.querySelector("#popup-img");

const profileNameInput = popupEditProfile.querySelector("input[name='name']");
const profileDescInput = popupEditProfile.querySelector("input[name='desc']");

const imgNameInput = popupAddPic.querySelector("input[name='name']");
const imgLinkInput = popupAddPic.querySelector("input[name='link']");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__desc");

const openEditProfileBtn = document.querySelector(".profile__edit-button");
const openAddPicBtn = document.querySelector(".profile__add-button");

const elemTemplate = document.querySelector("#element-template").content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const HidePopup = (evt) => {
  const popup = evt.target.closest(".popup");
  const duration = 300;

  popup.animate([{opacity: 0}], {duration: duration});
  setTimeout(() =>  popup.classList.remove("popup_opened"), duration);
};

const OpenPopup = (popup) => {
  popup.classList.add("popup_opened");
  popup.querySelector(".popup__close").addEventListener("click", HidePopup)
};

const AddSubmitFunc = (popup) => {
  popup.querySelector(".popup__form").addEventListener("submit", Submit);
}

let handleFunc = () => {};

const Submit = (evt) => {
  evt.preventDefault();
  handleFunc();
  HidePopup(evt);
};

const OpenEditProfileForm = () => {
  handleFunc = HandleEditProfile;
  AddSubmitFunc(popupEditProfile);
  profileNameInput.value = profileName.textContent;
  profileDescInput.value = profileDesc.textContent
  OpenPopup(popupEditProfile);
};

const HandleEditProfile = () => {
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;
};

const OpenAddPicForm = () => {
  handleFunc = HandleAddPic;
  AddSubmitFunc(popupAddPic);
  OpenPopup(popupAddPic);
};

const HandleAddPic = () => {
   AddCard(imgNameInput.value, imgLinkInput.value);
};

const OpenImg = (evt) => {
  const el = evt.target.closest(".element");

  const elImg = el.querySelector(".element__img");
  const caption = el.querySelector(".element__name").textContent;

  const img = popupImg.querySelector(".popup__img");
  img.src = elImg.src;
  img.alt = elImg.alt;

  popupImg.querySelector(".popup__caption").textContent = caption;

  OpenPopup(popupImg);
};

const AddCard = (name, link) => {
  if (!name || !link)
    return;

  const RemoveElement = (evt) => {
    evt.target.closest(".element").remove();
  };

  const newEl = elemTemplate.cloneNode(true);

  const img = newEl.querySelector(".element__img")
  img.src = link;
  img.alt = `Изображение ${name}`;
  img.addEventListener("click",  OpenImg);
  img.addEventListener("error", RemoveElement);

  newEl.querySelector(".element__name").textContent = name;

  newEl.querySelector(".element__like-btn").addEventListener("click", (evt) =>  {
    evt.target.classList.toggle("element__like-btn_active");
  });

  newEl.querySelector(".element__remove-btn").addEventListener("click", RemoveElement);

  document.querySelector(".elements").prepend(newEl);
};

const InitCards = () => {
  initialCards.forEach(z => AddCard(z.name, z.link));
};

openEditProfileBtn.addEventListener("click", OpenEditProfileForm);
openAddPicBtn.addEventListener("click", OpenAddPicForm);

window.addEventListener("load", InitCards);
