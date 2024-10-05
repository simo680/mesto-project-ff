import "./pages/index.css";
import { initialCards } from "./components/cards";
import { createCard } from "./components/card";
import { openModal, closeModal, closeOnOverlay } from "./components/modal";

const placesList = document.querySelector(".places__list");

const profileAddBtn = document.querySelector(".profile__add-button");
const profileEditBtn = document.querySelector(".profile__edit-button");
const modalCloseBtns = document.querySelectorAll(".popup__close");

const popupTypeNew = document.querySelector(".popup_type_new-card");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

const formElement = document.forms["edit-profile"];

const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;

const formElementNew = document.forms["new-place"];

const placeNameInput = formElementNew.elements["place-name"];
const linkInput = formElementNew.elements.link;

function deleteCard(evt) {
  const card = evt.target.closest(".card");
  card.remove();
}

function likeCard(evt) {
  if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
}

function openImage(evt) {
  const image = document.querySelector(".popup_type_image");
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  openModal(image);
}

function addCard(initialCards) {
  initialCards.forEach((data) => {
    placesList.append(createCard(data, deleteCard, likeCard, openImage));
  });
}

addCard(initialCards);

profileAddBtn.addEventListener("click", () => {
  openModal(popupTypeNew);
});

profileEditBtn.addEventListener("click", () => {
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
  openModal(popupTypeEdit);
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", (evt) => {
    closeModal(evt.currentTarget.closest(".popup"));
  });
});

document.querySelectorAll(".popup").forEach((evt) => {
  evt.addEventListener("click", closeOnOverlay);
});

function handleFormSubmit(evt) {
  evt.preventDefault();

  const name = nameInput.value;
  const job = jobInput.value;

  const userNameElement = document.querySelector(".profile__title");
  const userJobElement = document.querySelector(".profile__description");

  userNameElement.textContent = name;
  userJobElement.textContent = job;
}

formElement.addEventListener("submit", handleFormSubmit);

function HandleFormNewSubmit(evt) {
  evt.preventDefault();

  const placeName = placeNameInput.value;
  const link = linkInput.value;

  placesList.prepend(
    createCard({ name: placeName, link: link }, deleteCard, likeCard, openImage)
  );

  closeModal(popupTypeNew);
  formElementNew.reset();
}

formElementNew.addEventListener("submit", HandleFormNewSubmit);
