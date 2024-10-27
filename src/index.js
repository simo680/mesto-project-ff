import "./pages/index.css";
import {
  createCard,
  handleDeleteCard,
  handleLikeCard,
} from "./components/card";
import { enableValidation, clearValidation } from "./components/validation";
import { openModal, closeModal, closeOnOverlay } from "./components/modal";
import {
  editUserInfo,
  getInitialCards,
  getUserInfo,
  addCard,
  updateAvatar,
} from "./components/api";

const cardsContainer = document.querySelector(".places__list");

const profileAddBtn = document.querySelector(".profile__add-button");
const profileEditBtn = document.querySelector(".profile__edit-button");
const modalCloseBtns = document.querySelectorAll(".popup__close");

const popupTypeNew = document.querySelector(".popup_type_new-card");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeAvatar = document.querySelector(".popup_type_change-avatar");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

const formNewCard = document.forms["new-place"];
const formEditCard = document.forms["edit-profile"];
const formEditAvatar = document.forms["update-avatar"];

const formNewCardButton = formNewCard.querySelector(".popup__button");
const formEditCardButton = formEditCard.querySelector(".popup__button");
const formEditAvatarButton = formEditAvatar.querySelector(".popup__button");

const nameInput = formEditCard.elements.name;
const jobInput = formEditCard.elements.description;

const changeAvatar = document.querySelector(".popup__input_type_url");

const userNameElement = document.querySelector(".profile__title");
const userJobElement = document.querySelector(".profile__description");
const avatarElement = document.querySelector(".profile__image");

const placeNameInput = formNewCard.elements["place-name"];
const linkInput = formNewCard.elements.link;

const imagePopup = document.querySelector(".popup_type_image");

let profileId;

const validationData = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function renderLoading(isLoading, element) {
  if (isLoading) {
    element.textContent = "Сохранение...";
  } else {
    element.textContent = "Сохранить";
  }
}

function openCard(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupCaption.textContent = evt.target.alt;
  openModal(imagePopup);
}

function addCards(initialCards) {
  initialCards.forEach((data) => {
    cardsContainer.append(
      createCard(data, profileId, handleDeleteCard, handleLikeCard, openCard)
    );
  });
}

function renderUser(api) {
  userNameElement.textContent = api.name;
  userJobElement.textContent = api.about;
  avatarElement.style.backgroundImage = `url(${api.avatar})`;
  profileId = api._id;
}

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cardsData]) => {
    renderUser(userData);
    addCards(cardsData);
  })
  .catch((err) => {
    console.error(`Ошибка загрузки данных: ${err}`);
  });

function handleProfileEditClick() {
  openModal(popupTypeEdit);
  nameInput.value = userNameElement.textContent;
  jobInput.value = userJobElement.textContent;
  clearValidation(formEditCard, validationData);
}

function handleFormEditSubmit(evt) {
  evt.preventDefault();

  renderLoading(true, formEditCardButton);

  editUserInfo(nameInput.value, jobInput.value)
    .then((api) => {
      userNameElement.textContent = api.name;
      userJobElement.textContent = api.job;
      closeModal(popupTypeEdit);
    })
    .catch((err) => {
      console.error(`Ошибка изменения данных: ${err}`);
    })
    .finally(() => {
      renderLoading(false, formEditCardButton);
    });
}

function handleFormNewSubmit(evt) {
  evt.preventDefault();

  renderLoading(true, formNewCardButton);

  addCard(placeNameInput.value, linkInput.value)
    .then((data) => {
      cardsContainer.prepend(
        createCard(data, profileId, handleDeleteCard, handleLikeCard, openCard)
      );
      closeModal(popupTypeNew);
      formNewCard.reset();
      clearValidation(formNewCard, validationData);
    })
    .catch((err) => {
      console.log(`Ошибка добавления карточки: ${err}`);
    })
    .finally(() => {
      renderLoading(false, formNewCardButton);
    });
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
  formNewCard.reset();
});

avatarElement.addEventListener("click", () => {
  openModal(popupTypeAvatar);
  formEditAvatar.reset();
  clearValidation(formEditCard, validationData);
});

formEditAvatar.addEventListener("submit", (evt) => {
  evt.preventDefault();

  renderLoading(true, formEditAvatarButton);
  updateAvatar(changeAvatar.value)
    .then((data) => {
      avatarElement.style.backgroundImage = `url(${data.avatar})`;
      formEditAvatar.reset();
      closeModal(popupTypeAvatar);
    })
    .catch((err) => {
      console.log(`Ошибка загрузка изображения: ${err}`);
    })
    .finally(() => {
      renderLoading(false, formEditAvatarButton);
    });
});

profileEditBtn.addEventListener("click", handleProfileEditClick);

formEditCard.addEventListener("submit", handleFormEditSubmit);

formNewCard.addEventListener("submit", handleFormNewSubmit);

getInitialCards()
  .then((result) => {
    addCards(result);
  })
  .catch((err) => {
    console.log(`возникла ошибка: ${err}`);
  });

enableValidation(validationData);
