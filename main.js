/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\nvar cardTemplate = document.querySelector(\"#card-template\").content;\nfunction createCard(data, deleteCard, likeCard, openImage) {\n  var cardElement = cardTemplate.querySelector(\".card\").cloneNode(true);\n  var cardImage = cardElement.querySelector(\".card__image\");\n  var cardTitle = cardElement.querySelector(\".card__title\");\n  var likeBtn = cardElement.querySelector(\".card__like-button\");\n  var deleteBtn = cardElement.querySelector(\".card__delete-button\");\n  cardImage.src = data.link;\n  cardImage.alt = data.name;\n  cardTitle.textContent = data.name;\n  likeBtn.addEventListener(\"click\", function () {\n    return likeCard(likeBtn);\n  });\n  deleteBtn.addEventListener(\"click\", function () {\n    return deleteCard(cardElement);\n  });\n  cardImage.addEventListener(\"click\", openImage);\n  return cardElement;\n}\nfunction deleteCard(card) {\n  card.remove();\n}\nfunction likeCard(button) {\n  button.classList.toggle(\"card__like-button_is-active\");\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/cards.js":
/*!*********************************!*\
  !*** ./src/components/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/cards.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   closeOnEscape: () => (/* binding */ closeOnEscape),\n/* harmony export */   closeOnOverlay: () => (/* binding */ closeOnOverlay),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(elem) {\n  elem.classList.add(\"popup_is-opened\");\n  document.addEventListener(\"keydown\", closeOnEscape);\n}\nfunction closeModal(elem) {\n  elem.classList.remove(\"popup_is-opened\");\n  document.removeEventListener(\"keydown\", closeOnEscape);\n}\nfunction closeOnEscape(evt) {\n  if (evt.key === \"Escape\") {\n    closeModal(document.querySelector(\".popup_is-opened\"));\n  }\n}\nfunction closeOnOverlay(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.target);\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards */ \"./src/components/cards.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n\n\n\n\nvar cardsContainer = document.querySelector(\".places__list\");\nvar profileAddBtn = document.querySelector(\".profile__add-button\");\nvar profileEditBtn = document.querySelector(\".profile__edit-button\");\nvar modalCloseBtns = document.querySelectorAll(\".popup__close\");\nvar popupTypeNew = document.querySelector(\".popup_type_new-card\");\nvar popupTypeEdit = document.querySelector(\".popup_type_edit\");\nvar popupImage = document.querySelector(\".popup__image\");\nvar popupCaption = document.querySelector(\".popup__caption\");\nvar formEditCard = document.forms[\"edit-profile\"];\nvar nameInput = formEditCard.elements.name;\nvar jobInput = formEditCard.elements.description;\nvar userNameElement = document.querySelector(\".profile__title\");\nvar userJobElement = document.querySelector(\".profile__description\");\nvar formNewCard = document.forms[\"new-place\"];\nvar placeNameInput = formNewCard.elements[\"place-name\"];\nvar linkInput = formNewCard.elements.link;\nvar imagePopup = document.querySelector(\".popup_type_image\");\nfunction openImage(evt) {\n  popupImage.src = evt.target.src;\n  popupImage.alt = evt.target.alt;\n  popupCaption.textContent = evt.target.alt;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(imagePopup);\n}\nfunction addCards(initialCards) {\n  initialCards.forEach(function (data) {\n    cardsContainer.append((0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(data, _components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card__WEBPACK_IMPORTED_MODULE_2__.likeCard, openImage));\n  });\n}\nfunction handleProfileEditClick() {\n  nameInput.value = userNameElement.textContent;\n  jobInput.value = userJobElement.textContent;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeEdit);\n}\nfunction handleFormEditSubmit(evt) {\n  evt.preventDefault();\n  var name = nameInput.value;\n  var job = jobInput.value;\n  userNameElement.textContent = name;\n  userJobElement.textContent = job;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeEdit);\n}\nfunction handleFormNewSubmit(evt) {\n  evt.preventDefault();\n  var placeName = placeNameInput.value;\n  var link = linkInput.value;\n  cardsContainer.prepend((0,_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)({\n    name: placeName,\n    link: link\n  }, _components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _components_card__WEBPACK_IMPORTED_MODULE_2__.likeCard, openImage));\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeNew);\n  formNewCard.reset();\n}\nmodalCloseBtns.forEach(function (modalCloseBtn) {\n  modalCloseBtn.addEventListener(\"click\", function (evt) {\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(evt.currentTarget.closest(\".popup\"));\n  });\n});\ndocument.querySelectorAll(\".popup\").forEach(function (evt) {\n  evt.addEventListener(\"click\", _components_modal__WEBPACK_IMPORTED_MODULE_3__.closeOnOverlay);\n});\nprofileAddBtn.addEventListener(\"click\", function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeNew);\n});\nprofileEditBtn.addEventListener(\"click\", handleProfileEditClick);\nformEditCard.addEventListener(\"submit\", handleFormEditSubmit);\nformNewCard.addEventListener(\"submit\", handleFormNewSubmit);\naddCards(_components_cards__WEBPACK_IMPORTED_MODULE_1__.initialCards);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;