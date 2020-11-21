let popup = document.querySelector("#popup");

let name = document.querySelector("#name");
let desc = document.querySelector("#desc");

let nameInput = document.querySelector("#name-input");
let descInput = document.querySelector("#description-input");

popup.addEventListener("submit", function (evt){
  evt.preventDefault();
  name.textContent = nameInput.value;
  desc.textContent = descInput.value;
  popup.classList.remove("popup_opened");
});

let open_btn = document.querySelector("#form__open");
open_btn.addEventListener("click", function (){
  nameInput.value = name.textContent;
  descInput.value = desc.textContent;
  popup.classList.add("popup_opened");
});

let close_btn = document.querySelector("#popup__close");
close_btn.addEventListener("click", function (){
  popup.classList.remove("popup_opened");
});

