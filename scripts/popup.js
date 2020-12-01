let popup = document.querySelector(".popup");
let popupTitle = popup.querySelector('.popup__title');

let form = popup.querySelector("form");

let firstInput = popup.querySelector('input[name="firstInput"]')
let secondInput = popup.querySelector('input[name="secondInput"]')

let name = document.querySelector(".profile__name");
let desc = document.querySelector(".profile__desc");

let openEditProfileBtn = document.querySelector(".profile__edit-button");
let openAddPicBtn = document.querySelector(".profile__add-button");
let closeBtn = document.querySelector(".popup__close");

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
  handleFunc = HandleAddPic;
  OpenPopup();
}

const HandleAddPic = () => {
  const name = firstInput.value;
  const url = secondInput.value;

  let elem = document.querySelector("#element-template").content;
  let newEl = elem.cloneNode(true);

  newEl.querySelector(".element__img").src = url;
  newEl.querySelector(".element__img").alt = `Изображение ${name}`;
  newEl.querySelector(".element__name").textContent = name;

  document.querySelector(".elements").prepend(newEl);
}

form.addEventListener("submit", Submit);
openEditProfileBtn.addEventListener("click", OpenEditProfileForm);
openAddPicBtn.addEventListener("click", OpenAddPicForm);
closeBtn.addEventListener("click", HidePopup);
