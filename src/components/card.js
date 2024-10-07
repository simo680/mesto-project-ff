const cardTemplate = document.querySelector("#card-template").content;

export function createCard(data, deleteCard, likeCard, openImage) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  const likeBtn = cardElement.querySelector(".card__like-button");
  const deleteBtn = cardElement.querySelector(".card__delete-button");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  likeBtn.addEventListener("click", () => likeCard(likeBtn));

  deleteBtn.addEventListener("click", () => deleteCard(cardElement));

  cardImage.addEventListener("click", openImage);

  return cardElement;
}

export function deleteCard(card) {
  card.remove();
}

export function likeCard(button) {
  button.classList.toggle("card__like-button_is-active");
}
