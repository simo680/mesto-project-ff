// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const placesList = document.querySelector(".places__list");
// const popupContent = document.querySelector(".popup__content");
const addButton = document.querySelector(".profile__add-button");
// const editButton = document.querySelector(".profile__edit-button");

// @todo: Функция создания карточки

function createCard(imgValue, titleValue, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector("img").src = imgValue;
  cardElement.querySelector(".card__title").textContent = titleValue;

  const deleteButton = cardElement.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

// для 6 спринта сделал эту кнопочку

// addButton.addEventListener("click", () => {
//   const title = document.querySelector(".popup__input_type_card-name");
//   const image = document.querySelector(".popup__input_type_url");

//   createCard(title.value, image.value, deleteCard);

//   title.value = "";
//   image.value = "";
// });

// @todo: Функция удаления карточки

function deleteCard(event) {
  const card = event.target.closest(".card");
  card.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((elem) => {
  const cardElement = createCard(elem.link, elem.name, deleteCard);
  placesList.append(cardElement);
});
