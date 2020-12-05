const popupForm = document.querySelector("#popup-form");
const popupFormTitle = popupForm.querySelector('.popup__title');

const form = popupForm.querySelector("form");

const firstInput = popupForm.querySelector('input[name="firstInput"]')
const secondInput = popupForm.querySelector('input[name="secondInput"]')

const name = document.querySelector(".profile__name");
const desc = document.querySelector(".profile__desc");

const popupImg = document.querySelector("#popup-img");

const openEditProfileBtn = document.querySelector(".profile__edit-button");
const openAddPicBtn = document.querySelector(".profile__add-button");

const closeFormBtn = popupForm.querySelector(".popup__close");
const closeImgBtn = popupImg.querySelector(".popup__close");

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
  evt.target.closest(".popup").classList.remove("popup_opened");
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

  const src = el.querySelector(".element__img").src;
  const alt = el.querySelector(".element__img").alt;
  const caption = el.querySelector(".element__name").textContent;

  popupImg.querySelector(".popup__img").src = src;
  popupImg.querySelector(".popup__img").alt = alt;
  popupImg.querySelector(".popup__caption").textContent = caption;

  OpenPopup(popupImg);
}

const AddCard = (name, link) => {
  if (!name || !link)
    return;

  const RemoveElement = (evt) => {
    evt.target.closest(".element").remove();
  }

  const elem = document.querySelector("#element-template").content;
  const newEl = elem.cloneNode(true);

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
