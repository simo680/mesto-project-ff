const cardTemplate = document.querySelector("#card-template").content;

export function createCard(data, deleteCard, likeCard, OpenImage) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  const likeBtn = cardElement.querySelector(".card__like-button");

  likeBtn.addEventListener("click", likeCard);

  const deleteBtn = cardElement.querySelector(".card__delete-button");

  deleteBtn.addEventListener("click", deleteCard);

  cardImage.addEventListener("click", OpenImage);

  return cardElement;
}
