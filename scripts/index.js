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

const closeEditProfileBtn = popupEditProfile.querySelector(".popup__close");
const closeAddPicBtn = popupAddPic.querySelector(".popup__close");
const closePopupImg = popupImg.querySelector(".popup__close");

const editProfileBack = popupEditProfile.querySelector(".popup__back");
const addPicBack = popupAddPic.querySelector(".popup__back");
const imgBack = popupImg.querySelector(".popup__back");

const elements = document.querySelector(".elements");

const cardTemplate = document.querySelector(".element-template").content;

const hidePopupFromEvent = (evt) => {
  const popup = evt.target.closest(".popup");
  hidePopup(popup);
};

const hidePopup = (popup) => {
  popup.classList.remove("popup_opened");

  if(popup.classList.contains("popup_edit-profile"))
    formEditProfile.reset();
  else if(popup.classList.contains("popup_add-pic"))
    formAddPic.reset();
};

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

const openEditProfilePopup = () => {
  profileNameInput.value = profileName.textContent;
  profileDescInput.value = profileDesc.textContent;

  openPopup(popupEditProfile);
}

const submitEditProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;

  hidePopup(popupEditProfile);
};

const HandleKey = (evt) => {
  if(evt.key === "Escape"){
    hidePopup(popupAddPic);
    hidePopup(popupEditProfile);
  }
}

const submitAddPic = (evt) => {
  evt.preventDefault();

  const newElem = createNewElement(imgNameInput.value, imgLinkInput.value);
  elements.prepend(newElem);

  formAddPic.reset();
  hidePopup(popupAddPic);
};

const openImg = (evt) => {
  const el = evt.target.closest(".element");

  const elImg = el.querySelector(".element__img");
  const caption = el.querySelector(".element__name").textContent;

  popupImgPicture.src = elImg.src;
  popupImgPicture.alt = elImg.alt;

  popupImgCaption.textContent = caption;

  popupImg.classList.add("popup_opened");
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
  img.addEventListener("click",  openImg);
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
openAddPicBtn.addEventListener("click", () => openPopup(popupAddPic));

popupEditProfile.addEventListener("submit", submitEditProfile);
popupAddPic.addEventListener("submit", submitAddPic);

closeEditProfileBtn.addEventListener("click", hidePopupFromEvent);
closeAddPicBtn.addEventListener("click", hidePopupFromEvent);
closePopupImg.addEventListener("click", hidePopupFromEvent);

editProfileBack.addEventListener("click", hidePopupFromEvent);
addPicBack.addEventListener("click", hidePopupFromEvent);
imgBack.addEventListener("click", hidePopupFromEvent);

window.addEventListener("load", initElements);
window.addEventListener("keydown", HandleKey);
