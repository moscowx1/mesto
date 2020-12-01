const popup = document.querySelector(".popup");
const popupTitle = popup.querySelector('.popup__title');

const form = popup.querySelector("form");

const firstInput = popup.querySelector('input[name="firstInput"]')
const secondInput = popup.querySelector('input[name="secondInput"]')

const name = document.querySelector(".profile__name");
const desc = document.querySelector(".profile__desc");

const openEditProfileBtn = document.querySelector(".profile__edit-button");
const openAddPicBtn = document.querySelector(".profile__add-button");
const closeBtn = document.querySelector(".popup__close");

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

let handleFunc = () => {};

const HidePopup = () => {
  popup.classList.remove("popup_opened");
}

const OpenPopup = () => {
  popup.classList.add("popup_opened");
}

const Submit = (evt) => {
  evt.preventDefault();
  handleFunc();
  HidePopup();
};

const OpenEditProfileForm = () => {
  popupTitle.textContent = "Редактировать профиль";
  firstInput.value = name.textContent;
  secondInput.value = desc.textContent;

  handleFunc = HandleEditProfile;
  OpenPopup();
}

const HandleEditProfile = () => {
  name.textContent = firstInput.value;
  desc.textContent = secondInput.value;
}

const OpenAddPicForm = () => {
  popupTitle.textContent = "Новое место";
  firstInput.placeholder = "Название"
  secondInput.placeholder = "Ссылка на картинку"

  handleFunc = HandleAddPic;
  OpenPopup();
}

const HandleAddPic = () => {
   AddCard(firstInput.value, secondInput.value);
}

const AddCard = (name, link) => {
  const elem = document.querySelector("#element-template").content;
  const newEl = elem.cloneNode(true);

  newEl.querySelector(".element__img").src = link;
  newEl.querySelector(".element__img").alt = `Изображение ${name}`;
  newEl.querySelector(".element__name").textContent = name;

  document.querySelector(".elements").prepend(newEl);
}

const AddCards = () => {
  initialCards.forEach(z => AddCard(z.name, z.link));
}

form.addEventListener("submit", Submit);
openEditProfileBtn.addEventListener("click", OpenEditProfileForm);
openAddPicBtn.addEventListener("click", OpenAddPicForm);
closeBtn.addEventListener("click", HidePopup);
window.addEventListener("load", AddCards);
