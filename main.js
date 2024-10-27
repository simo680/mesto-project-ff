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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCard: () => (/* binding */ addCard),\n/* harmony export */   checkLikeCard: () => (/* binding */ checkLikeCard),\n/* harmony export */   editUserInfo: () => (/* binding */ editUserInfo),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),\n/* harmony export */   handleResponse: () => (/* binding */ handleResponse),\n/* harmony export */   removeCard: () => (/* binding */ removeCard),\n/* harmony export */   removeLikeCard: () => (/* binding */ removeLikeCard),\n/* harmony export */   updateAvatar: () => (/* binding */ updateAvatar)\n/* harmony export */ });\nvar config = {\n  baseUrl: \"https://nomoreparties.co/v1/wff-cohort-24\",\n  headers: {\n    authorization: \"add232cc-62d5-4f63-89f1-47576644f971\",\n    \"Content-Type\": \"application/json\"\n  }\n};\nvar handleResponse = function handleResponse(response) {\n  if (response.ok) {\n    return response.json();\n  } else {\n    return Promise.reject(\"\\u0427\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A: \".concat(response.status));\n  }\n};\nvar getUserInfo = function getUserInfo() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: \"GET\",\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar editUserInfo = function editUserInfo(name, job) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: \"\".concat(name),\n      about: \"\".concat(job)\n    })\n  }).then(handleResponse);\n};\nvar addCard = function addCard(name, link) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: \"POST\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: \"\".concat(name),\n      link: \"\".concat(link)\n    })\n  }).then(handleResponse);\n};\nvar removeCard = function removeCard(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(id), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar checkLikeCard = function checkLikeCard(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(id), {\n    method: \"PUT\",\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar removeLikeCard = function removeLikeCard(id) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(id), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(handleResponse);\n};\nvar updateAvatar = function updateAvatar(avatar) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: \"\".concat(avatar)\n    })\n  }).then(handleResponse);\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   handleDeleteCard: () => (/* binding */ handleDeleteCard),\n/* harmony export */   handleLikeCard: () => (/* binding */ handleLikeCard)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n\nvar cardTemplate = document.querySelector(\"#card-template\").content;\nfunction createCard(data, profileId, handleDeleteCard, handleLikeCard, openCard) {\n  var cardElement = cardTemplate.querySelector(\".card\").cloneNode(true);\n  var cardImage = cardElement.querySelector(\".card__image\");\n  var cardTitle = cardElement.querySelector(\".card__title\");\n  var likeBtn = cardElement.querySelector(\".card__like-button\");\n  var deleteBtn = cardElement.querySelector(\".card__delete-button\");\n  var likeCount = cardElement.querySelector(\".card__like-counter\");\n  var cardId = data._id;\n  cardImage.src = data.link;\n  cardImage.alt = data.name;\n  cardTitle.textContent = data.name;\n  likeCount.textContent = data.likes.length;\n  data.likes.forEach(function (elem) {\n    if (elem._id === profileId) {\n      likeBtn.classList.add(\"card__like-button_is-active\");\n    }\n  });\n  if (data.owner._id !== profileId) {\n    deleteBtn.remove();\n  } else {\n    deleteBtn.addEventListener(\"click\", function () {\n      return handleDeleteCard(cardElement, cardId);\n    });\n  }\n  likeBtn.addEventListener(\"click\", function () {\n    return handleLikeCard(event, cardId, likeCount);\n  });\n  cardImage.addEventListener(\"click\", openCard);\n  return cardElement;\n}\nfunction handleDeleteCard(cardElem, cardId) {\n  (0,_api__WEBPACK_IMPORTED_MODULE_0__.removeCard)(cardId).then(function () {\n    cardElem.remove();\n  }).catch(function (err) {\n    console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u0438 \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0438: \".concat(err));\n  });\n}\nfunction handleLikeCard(event, cardId, likeCount) {\n  var target = event.target;\n  if (target.classList.contains(\"card__like-button_is-active\")) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.removeLikeCard)(cardId).then(function (data) {\n      likeCount.textContent = data.likes.length;\n      target.classList.remove(\"card__like-button_is-active\");\n    }).catch(function (err) {\n      console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0443\\u0434\\u0430\\u043B\\u0435\\u043D\\u0438\\u0438 \\u043B\\u0430\\u0439\\u043A\\u0430: \".concat(err));\n    });\n  } else {\n    (0,_api__WEBPACK_IMPORTED_MODULE_0__.checkLikeCard)(cardId).then(function (data) {\n      likeCount.textContent = data.likes.length;\n      target.classList.add(\"card__like-button_is-active\");\n    }).catch(function (err) {\n      console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0438 \\u043B\\u0430\\u0439\\u043A\\u0430: \".concat(err));\n    });\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   closeOnEscape: () => (/* binding */ closeOnEscape),\n/* harmony export */   closeOnOverlay: () => (/* binding */ closeOnOverlay),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(elem) {\n  elem.classList.add(\"popup_is-opened\");\n  document.addEventListener(\"keydown\", closeOnEscape);\n}\nfunction closeModal(elem) {\n  elem.classList.remove(\"popup_is-opened\");\n  document.removeEventListener(\"keydown\", closeOnEscape);\n}\nfunction closeOnEscape(evt) {\n  if (evt.key === \"Escape\") {\n    closeModal(document.querySelector(\".popup_is-opened\"));\n  }\n}\nfunction closeOnOverlay(evt) {\n  if (evt.target === evt.currentTarget) {\n    closeModal(evt.target);\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation),\n/* harmony export */   hasInvalidInput: () => (/* binding */ hasInvalidInput),\n/* harmony export */   hideInputError: () => (/* binding */ hideInputError),\n/* harmony export */   setEventListeners: () => (/* binding */ setEventListeners),\n/* harmony export */   showInputError: () => (/* binding */ showInputError),\n/* harmony export */   toggleButtonState: () => (/* binding */ toggleButtonState)\n/* harmony export */ });\nfunction showInputError(validationData, formElement, inputElement, errorMessage) {\n  var formError = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add(validationData.inputErrorClass);\n  formError.textContent = errorMessage;\n  formError.classList.add(validationData.errorClass);\n}\nfunction hideInputError(validationData, formElement, inputElement) {\n  var formError = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove(validationData.inputErrorClass);\n  formError.textContent = \"\";\n  formError.classList.remove(validationData.errorClass);\n}\nfunction isValid(validationData, formElement, inputElement) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.error);\n  } else {\n    inputElement.setCustomValidity(\"\");\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(validationData, formElement, inputElement, inputElement.validationMessage);\n  } else {\n    hideInputError(validationData, formElement, inputElement);\n  }\n}\nfunction hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n}\nfunction toggleButtonState(validationData, inputList, buttonElement) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add(validationData.inactiveButtonClass);\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove(validationData.inactiveButtonClass);\n  }\n}\nfunction setEventListeners(validationData, formElement) {\n  var inputList = Array.from(formElement.querySelectorAll(validationData.inputSelector));\n  var buttonElement = formElement.querySelector(validationData.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener(\"input\", function () {\n      isValid(validationData, formElement, inputElement);\n      toggleButtonState(validationData, inputList, buttonElement);\n    });\n  });\n}\nfunction enableValidation(validationData) {\n  var formList = Array.from(document.querySelectorAll(validationData.formSelector));\n  formList.forEach(function (formElement) {\n    setEventListeners(validationData, formElement);\n  });\n}\nfunction clearValidation(formElement, validationData) {\n  var inputList = Array.from(formElement.querySelectorAll(validationData.inputSelector));\n  var buttonElement = formElement.querySelector(validationData.submitButtonSelector);\n  inputList.forEach(function (inputElement) {\n    hideInputError(validationData, formElement, inputElement);\n    inputElement.setCustomValidity(\"\");\n  });\n  buttonElement.disabled = true;\n  buttonElement.classList.add(validationData.inactiveButtonClass);\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/validation */ \"./src/components/validation.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\n\n\n\n\n\nvar cardsContainer = document.querySelector(\".places__list\");\nvar profileAddBtn = document.querySelector(\".profile__add-button\");\nvar profileEditBtn = document.querySelector(\".profile__edit-button\");\nvar modalCloseBtns = document.querySelectorAll(\".popup__close\");\nvar popupTypeNew = document.querySelector(\".popup_type_new-card\");\nvar popupTypeEdit = document.querySelector(\".popup_type_edit\");\nvar popupTypeAvatar = document.querySelector(\".popup_type_change-avatar\");\nvar popupImage = document.querySelector(\".popup__image\");\nvar popupCaption = document.querySelector(\".popup__caption\");\nvar formNewCard = document.forms[\"new-place\"];\nvar formEditCard = document.forms[\"edit-profile\"];\nvar formEditAvatar = document.forms[\"update-avatar\"];\nvar formNewCardButton = formNewCard.querySelector(\".popup__button\");\nvar formEditCardButton = formEditCard.querySelector(\".popup__button\");\nvar formEditAvatarButton = formEditAvatar.querySelector(\".popup__button\");\nvar nameInput = formEditCard.elements.name;\nvar jobInput = formEditCard.elements.description;\nvar changeAvatar = document.querySelector(\".popup__input_type_url\");\nvar userNameElement = document.querySelector(\".profile__title\");\nvar userJobElement = document.querySelector(\".profile__description\");\nvar avatarElement = document.querySelector(\".profile__image\");\nvar placeNameInput = formNewCard.elements[\"place-name\"];\nvar linkInput = formNewCard.elements.link;\nvar imagePopup = document.querySelector(\".popup_type_image\");\nvar profileId;\nvar validationData = {\n  formSelector: \".popup__form\",\n  inputSelector: \".popup__input\",\n  submitButtonSelector: \".popup__button\",\n  inactiveButtonClass: \"popup__button_disabled\",\n  inputErrorClass: \"popup__input_type_error\",\n  errorClass: \"popup__error_visible\"\n};\nfunction renderLoading(isLoading, element) {\n  if (isLoading) {\n    element.textContent = \"Сохранение...\";\n  } else {\n    element.textContent = \"Сохранить\";\n  }\n}\nfunction openCard(evt) {\n  popupImage.src = evt.target.src;\n  popupImage.alt = evt.target.alt;\n  popupCaption.textContent = evt.target.alt;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(imagePopup);\n}\nfunction addCards(initialCards) {\n  initialCards.forEach(function (data) {\n    cardsContainer.append((0,_components_card__WEBPACK_IMPORTED_MODULE_1__.createCard)(data, profileId, _components_card__WEBPACK_IMPORTED_MODULE_1__.handleDeleteCard, _components_card__WEBPACK_IMPORTED_MODULE_1__.handleLikeCard, openCard));\n  });\n}\nfunction renderUser(api) {\n  userNameElement.textContent = api.name;\n  userJobElement.textContent = api.about;\n  avatarElement.style.backgroundImage = \"url(\".concat(api.avatar, \")\");\n  profileId = api._id;\n}\nPromise.all([(0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getUserInfo)(), (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    userData = _ref2[0],\n    cardsData = _ref2[1];\n  renderUser(userData);\n  addCards(cardsData);\n}).catch(function (err) {\n  console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445: \".concat(err));\n});\nfunction handleProfileEditClick() {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeEdit);\n  nameInput.value = userNameElement.textContent;\n  jobInput.value = userJobElement.textContent;\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_2__.clearValidation)(formEditCard, validationData);\n}\nfunction handleFormEditSubmit(evt) {\n  evt.preventDefault();\n  renderLoading(true, formEditCardButton);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.editUserInfo)(nameInput.value, jobInput.value).then(function (api) {\n    userNameElement.textContent = api.name;\n    userJobElement.textContent = api.job;\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeEdit);\n  }).catch(function (err) {\n    console.error(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0438\\u0437\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u044F \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445: \".concat(err));\n  }).finally(function () {\n    renderLoading(false, formEditCardButton);\n  });\n}\nfunction handleFormNewSubmit(evt) {\n  evt.preventDefault();\n  renderLoading(true, formNewCardButton);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.addCard)(placeNameInput.value, linkInput.value).then(function (data) {\n    cardsContainer.prepend((0,_components_card__WEBPACK_IMPORTED_MODULE_1__.createCard)(data, profileId, _components_card__WEBPACK_IMPORTED_MODULE_1__.handleDeleteCard, _components_card__WEBPACK_IMPORTED_MODULE_1__.handleLikeCard, openCard));\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeNew);\n    formNewCard.reset();\n    (0,_components_validation__WEBPACK_IMPORTED_MODULE_2__.clearValidation)(formNewCard, validationData);\n  }).catch(function (err) {\n    console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0438: \".concat(err));\n  }).finally(function () {\n    renderLoading(false, formNewCardButton);\n  });\n}\nmodalCloseBtns.forEach(function (modalCloseBtn) {\n  modalCloseBtn.addEventListener(\"click\", function (evt) {\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(evt.currentTarget.closest(\".popup\"));\n  });\n});\ndocument.querySelectorAll(\".popup\").forEach(function (evt) {\n  evt.addEventListener(\"click\", _components_modal__WEBPACK_IMPORTED_MODULE_3__.closeOnOverlay);\n});\nprofileAddBtn.addEventListener(\"click\", function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeNew);\n  formNewCard.reset();\n});\navatarElement.addEventListener(\"click\", function () {\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeAvatar);\n  formEditAvatar.reset();\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_2__.clearValidation)(formEditCard, validationData);\n});\nformEditAvatar.addEventListener(\"submit\", function (evt) {\n  evt.preventDefault();\n  renderLoading(true, formEditAvatarButton);\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.updateAvatar)(changeAvatar.value).then(function (data) {\n    avatarElement.style.backgroundImage = \"url(\".concat(data.avatar, \")\");\n    formEditAvatar.reset();\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeAvatar);\n  }).catch(function (err) {\n    console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430 \\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u044F: \".concat(err));\n  }).finally(function () {\n    renderLoading(false, formEditAvatarButton);\n  });\n});\nprofileEditBtn.addEventListener(\"click\", handleProfileEditClick);\nformEditCard.addEventListener(\"submit\", handleFormEditSubmit);\nformNewCard.addEventListener(\"submit\", handleFormNewSubmit);\n(0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)().then(function (result) {\n  addCards(result);\n}).catch(function (err) {\n  console.log(\"\\u0432\\u043E\\u0437\\u043D\\u0438\\u043A\\u043B\\u0430 \\u043E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(err));\n});\n(0,_components_validation__WEBPACK_IMPORTED_MODULE_2__.enableValidation)(validationData);\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

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