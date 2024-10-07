import "./pages/index.css";
import { initialCards } from "./components/cards";
import { createCard, deleteCard, likeCard } from "./components/card";
import { openModal, closeModal, closeOnOverlay } from "./components/modal";

const cardsContainer = document.querySelector(".places__list");

const profileAddBtn = document.querySelector(".profile__add-button");
const profileEditBtn = document.querySelector(".profile__edit-button");
const modalCloseBtns = document.querySelectorAll(".popup__close");

const popupTypeNew = document.querySelector(".popup_type_new-card");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

const formEditCard = document.forms["edit-profile"];

const nameInput = formEditCard.elements.name;
const jobInput = formEditCard.elements.description;

const userNameElement = document.querySelector(".profile__title");
const userJobElement = document.querySelector(".profile__description");

const formNewCard = document.forms["new-place"];

const placeNameInput = formNewCard.elements["place-name"];
const linkInput = formNewCard.elements.link;

const imagePopup = document.querySelector(".popup_type_image");

function openImage(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  openModal(imagePopup);
}

function addCards(initialCards) {
  initialCards.forEach((data) => {
    cardsContainer.append(createCard(data, deleteCard, likeCard, openImage));
  });
}

function handleProfileEditClick() {
  nameInput.value = userNameElement.textContent;
  jobInput.value = userJobElement.textContent;
  openModal(popupTypeEdit);
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();

  const name = nameInput.value;
  const job = jobInput.value;

  userNameElement.textContent = name;
  userJobElement.textContent = job;
  closeModal(popupTypeEdit);
}

function handleFormNewSubmit(evt) {
  evt.preventDefault();

  const placeName = placeNameInput.value;
  const link = linkInput.value;

  cardsContainer.prepend(
    createCard({ name: placeName, link: link }, deleteCard, likeCard, openImage)
  );

  closeModal(popupTypeNew);
  formNewCard.reset();
}



modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", (evt) => {
    closeModal(evt.currentTarget.closest(".popup"));
  });
});

document.querySelectorAll(".popup").forEach((evt) => {
  evt.addEventListener("click", closeOnOverlay);
});

profileAddBtn.addEventListener("click", () => {
  openModal(popupTypeNew);
});

profileEditBtn.addEventListener("click", handleProfileEditClick);

formEditCard.addEventListener("submit", handleFormEditSubmit);

formNewCard.addEventListener("submit", handleFormNewSubmit);

addCards(initialCards);
