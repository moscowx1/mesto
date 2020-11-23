let popup = document.querySelector(".popup");

let name = document.querySelector(".profile__name");
let desc = document.querySelector(".profile__desc");

let nameInput = popup.querySelector('input[name="name"]')
let descInput = popup.querySelector('input[name="desc"]')

let openBtn = document.querySelector(".profile__edit-button");
let closeBtn = document.querySelector(".popup__close");

const HidePopup = () => {
  popup.classList.remove("popup_opened");
}

const OpenPopup = () => {
  nameInput.value = name.textContent;
  descInput.value = desc.textContent;
  popup.classList.add("popup_opened");
}

const Submit = (evt) => {
  evt.preventDefault();
  name.textContent = nameInput.value;
  desc.textContent = descInput.value;
  HidePopup();
}

popup.addEventListener("submit", Submit);
openBtn.addEventListener("click", OpenPopup);
closeBtn.addEventListener("click", HidePopup);
