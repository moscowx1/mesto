const popups = Array.from(document.querySelectorAll(".popup"));

const popupEditProfile = document.querySelector(".popup_edit-profile");
const popupAddPic = document.querySelector(".popup_add-pic");
const popupImg = document.querySelector(".popup_img");

const formEditProfile = popupEditProfile.querySelector(".popup__form");
const formAddPic = popupAddPic.querySelector(".popup__form");

const profileNameInput = popupEditProfile.querySelector(".popup__profile-name");
const profileDescInput = popupEditProfile.querySelector(".popup__profile-desc");

const imgNameInput = popupAddPic.querySelector(".popup__img-name");
const imgLinkInput = popupAddPic.querySelector(".popup__img-link");

const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__desc");

const popupImgCaption =  popupImg.querySelector(".popup__caption");
const popupImgPicture =  popupImg.querySelector(".popup__img")

const openEditProfileBtn = document.querySelector(".profile__edit-button");
const openAddPicBtn = document.querySelector(".profile__add-button");

const elements = document.querySelector(".elements");

const cardTemplate = document.querySelector(".element-template").content;

let openedPopup;

const hidePopup = (popup) => {
  popup.classList.remove("popup_opened");

  window.removeEventListener("keydown", hidePopupsOnEsc);
};

const hidePopupsOnEsc = (evt) => {
  if(evt.key === "Escape")
    hidePopup(openedPopup);
}

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  openedPopup = popup;

  window.addEventListener("keydown", hidePopupsOnEsc);
};

const openEditProfilePopup = () => {
  formEditProfile.reset();

  profileNameInput.value = profileName.textContent;
  profileDescInput.value = profileDesc.textContent;

  openPopup(popupEditProfile);
}

const openAddPicPopup = () => {
  formAddPic.reset();

  openPopup(popupAddPic);
};

const submitEditProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;

  hidePopup(popupEditProfile);
};

const submitAddPic = (evt) => {
  evt.preventDefault();

  const newElem = createNewElement(imgNameInput.value, imgLinkInput.value);
  elements.prepend(newElem);

  formAddPic.reset();
  hidePopup(popupAddPic);
};

const openImg = (name, link) => {
  popupImgCaption.textContent = name;
  popupImgPicture.alt = name;
  popupImgPicture.src = link;

  openPopup(popupImg);
};

const removeElement = (evt) => {
  evt.target.closest(".element").remove();
};

const handleElementAddImgError = (evt) => {
  alert("Возникла ошибка при добавлении нового места");
  removeElement(evt);
};

const likeElement = (evt) => {
  evt.target.classList.toggle("element__like-btn_active");
};

const createNewElement = (name, link) => {
  const element = cardTemplate.cloneNode(true);

  const img = element.querySelector(".element__img");
  img.src = link;
  img.alt = `Изображение ${name}`;
  img.addEventListener("click",  () => openImg(name, link));
  img.addEventListener("error", handleElementAddImgError);

  element.querySelector(".element__name").textContent = name;
  element.querySelector(".element__like-btn").addEventListener("click", likeElement);
  element.querySelector(".element__remove-btn").addEventListener("click", removeElement);

  return element;
};

const initElements = () => {
  const newElems = initialElements.map(elem => createNewElement(elem.name, elem.link));
  elements.prepend(...newElems);
};

openEditProfileBtn.addEventListener("click",  openEditProfilePopup);
openAddPicBtn.addEventListener("click",  openAddPicPopup);

popupEditProfile.addEventListener("submit", submitEditProfile);
popupAddPic.addEventListener("submit", submitAddPic);

popups.forEach(popup =>
  popup.addEventListener("click", (evt) => {
    if(evt.target.classList.contains("popup__back") ||
       evt.target.classList.contains("popup__close"))
        hidePopup(popup);
}));

window.addEventListener("load", initElements);
