const popupForm = document.querySelector("#popup-form");
const popupFormTitle = popupForm.querySelector('.popup__title');

const form = popupForm.querySelector("form");

const firstInput = popupForm.querySelector('input[name="firstInput"]')
const secondInput = popupForm.querySelector('input[name="secondInput"]')

const name = document.querySelector(".profile__name");
const desc = document.querySelector(".profile__desc");

const popupWithImg = document.querySelector("#popup-img");

const openEditProfileBtn = document.querySelector(".profile__edit-button");
const openAddPicBtn = document.querySelector(".profile__add-button");

const closeFormBtn = popupForm.querySelector(".popup__close");
const closeImgBtn = popupWithImg.querySelector(".popup__close");

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
}

const OpenPopup = (popup) => {
  popup.classList.add("popup_opened");
}

let handleFunc = () => {};

const Submit = (evt) => {
  evt.preventDefault();
  handleFunc();
  HidePopup(evt);
};

const SetFormValues = (title, input1, input2) => {
  popupFormTitle.textContent = title;
  firstInput.value = input1;
  secondInput.value = input2;

  firstInput.placeholder = "";
  secondInput.placeholder = "";
}

const OpenEditProfileForm = () => {
  SetFormValues("Редактировать профиль", name.textContent, desc.textContent);

  handleFunc = HandleEditProfile;
  OpenPopup(popupForm);
}

const HandleEditProfile = () => {
  name.textContent = firstInput.value;
  desc.textContent = secondInput.value;
}

const OpenAddPicForm = () => {
  SetFormValues("Новое место", "", "");
  firstInput.placeholder = "Название"
  secondInput.placeholder = "Ссылка на картинку"

  handleFunc = HandleAddPic;
  OpenPopup(popupForm);
}

const HandleAddPic = () => {
   AddCard(firstInput.value, secondInput.value);
}

const OpenImg = (evt) => {
  const el = evt.target.closest(".element");

  const elImg = el.querySelector(".element__img");
  const src = elImg.src;
  const alt = elImg.alt;
  const caption = el.querySelector(".element__name").textContent;

  const popupImg = popupWithImg.querySelector(".popup__img");
  popupImg.src = src;
  popupImg.alt = alt;

  popupWithImg.querySelector(".popup__caption").textContent = caption;

  OpenPopup(popupWithImg);
}

const AddCard = (name, link) => {
  if (!name || !link)
    return;

  const RemoveElement = (evt) => {
    evt.target.closest(".element").remove();
  }

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
}

const InitCards = () => {
  initialCards.forEach(z => AddCard(z.name, z.link));
}

form.addEventListener("submit", Submit);

openEditProfileBtn.addEventListener("click", OpenEditProfileForm);
openAddPicBtn.addEventListener("click", OpenAddPicForm);
closeFormBtn.addEventListener("click", HidePopup);
closeImgBtn.addEventListener("click", HidePopup);

window.addEventListener("load", InitCards);
