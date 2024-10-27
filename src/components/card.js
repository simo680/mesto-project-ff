import { removeLikeCard, checkLikeCard, removeCard } from "./api";

const cardTemplate = document.querySelector("#card-template").content;

export function createCard(
  data,
  profileId,
  handleDeleteCard,
  handleLikeCard,
  openCard
) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  const likeBtn = cardElement.querySelector(".card__like-button");
  const deleteBtn = cardElement.querySelector(".card__delete-button");
  const likeCount = cardElement.querySelector(".card__like-counter");
  const cardId = data._id;

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  likeCount.textContent = data.likes.length;

  if (data.likes.some((elem) => elem._id === profileId)) {
    likeBtn.classList.add("card__like-button_is-active");
  }

  if (data.owner._id !== profileId) {
    deleteBtn.remove();
  } else {
    deleteBtn.addEventListener("click", () =>
      handleDeleteCard(cardElement, cardId)
    );
  }

  likeBtn.addEventListener("click", () =>
    handleLikeCard(event, cardId, likeCount)
  );

  cardImage.addEventListener("click", openCard);

  return cardElement;
}

export function handleDeleteCard(cardElem, cardId) {
  removeCard(cardId)
    .then(() => {
      cardElem.remove();
    })
    .catch((err) => {
      console.log(`Ошибка при удалении карточки: ${err}`);
    });
}

export function handleLikeCard(event, cardId, likeCount) {
  const target = event.target;
  
  if (target.classList.contains("card__like-button_is-active")) {
    const isLiked = target.classList.contains("card__like-button_is-active");
    const likeMethod = isLiked ? removeLikeCard : checkLikeCard;
    likeMethod(cardId)
      .then((data) => {
        likeCount.textContent = data.likes.length;
        target.classList.remove("card__like-button_is-active");
      })
      .catch((err) =>
        console.log(`Ошибка при ${isLiked ? "удалении" : "добавлении"} лайка'`)
      );
  }
}
