export function openModal(elem) {
  elem.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeOnEscape);
}

export function closeModal(elem) {
  elem.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeOnEscape);
}

export function closeOnEscape(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".popup_is-opened"));
  }
}

export function closeOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}
