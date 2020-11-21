let form = document.querySelector("#form");

let name = document.querySelector("#name");
let desc = document.querySelector("#desc");

let nameInput = document.querySelector("#name-input");
let descInput = document.querySelector("#description-input");

form.addEventListener("submit", function (evt){
  evt.preventDefault();
  name.textContent = nameInput.value;
  desc.textContent = descInput.value;
  form.classList.add("form_invisible");
});

let open_btn = document.querySelector("#form__open");
open_btn.addEventListener("click", function (){
  nameInput.value = name.textContent;
  descInput.value = desc.textContent;
  form.classList.remove("form_invisible");
});

let close_btn = document.querySelector("#form__close");
close_btn.addEventListener("click", function (){
  form.classList.add("form_invisible");
});

