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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/gallery */ \"./src/scripts/pages/gallery.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact */ \"./src/scripts/pages/contact.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// IMPORT FUNCTIONS\n// Gallery page\n\n // CALL FUNCTIONS\n\nvar main = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = window.location.pathname.split('/').pop();\n            _context.next = _context.t0 === 'galerie.html' ? 3 : _context.t0 === 'contact.html' ? 6 : 9;\n            break;\n\n          case 3:\n            _context.next = 5;\n            return (0,_pages_gallery__WEBPACK_IMPORTED_MODULE_0__.initGallery)();\n\n          case 5:\n            return _context.abrupt(\"break\", 9);\n\n          case 6:\n            _context.next = 8;\n            return (0,_pages_contact__WEBPACK_IMPORTED_MODULE_1__.initContact)();\n\n          case 8:\n            return _context.abrupt(\"break\", 9);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function main() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmain();\n\n//# sourceURL=webpack://piotr-wojcik-art/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/pages/contact.js":
/*!**************************************!*\
  !*** ./src/scripts/pages/contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initContact\": () => (/* binding */ initContact)\n/* harmony export */ });\nvar initContact = function initContact() {\n  console.log('welcome in the contact section !');\n};\n\n//# sourceURL=webpack://piotr-wojcik-art/./src/scripts/pages/contact.js?");

/***/ }),

/***/ "./src/scripts/pages/gallery.js":
/*!**************************************!*\
  !*** ./src/scripts/pages/gallery.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initGallery\": () => (/* binding */ initGallery)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// TODO : fix currentIndex bug after filtering medias\n// Medias\nvar medias = document.querySelectorAll('.gallery__item img');\nvar displayedMedias = document.querySelectorAll('.gallery__item img'); // Filter buttons\n\nvar filterButtons = document.querySelectorAll('.filter-button'); // Lightbox\n\nvar lightbox = document.querySelector('.lightbox');\nvar closeLightboxButton = document.querySelector('.lightbox__close-button');\nvar lightboxCurrentImg = document.querySelector('.lightbox__current-img');\nvar previousButton = document.querySelector('.lightbox__previous-image');\nvar nextButton = document.querySelector('.lightbox__next-image');\nvar currentIndex;\n\nvar openLightbox = function openLightbox() {\n  lightbox.style.display = 'block';\n};\n\nvar closeLightbox = function closeLightbox() {\n  lightbox.style.display = 'none';\n}; // Open and close lightbox\n\n\nvar enableLightbox = function enableLightbox() {\n  // Open lightbox\n  displayedMedias.forEach(function (element, index) {\n    element.addEventListener('click', function () {\n      var mediaSrc = element.src;\n      lightboxCurrentImg.setAttribute('src', mediaSrc);\n      currentIndex = index;\n      openLightbox();\n    });\n  }); // Close lightbox\n\n  closeLightboxButton.addEventListener('click', function () {\n    closeLightbox();\n  });\n}; // Set src to current media\n\n\nvar setMediaSrc = function setMediaSrc() {\n  var currentMedia = document.querySelector('.lightbox__current-img');\n  currentMedia.src = displayedMedias[currentIndex].src;\n}; // Next and previous media inside lightbox\n\n\nvar lightboxControls = function lightboxControls() {\n  var previousMedia = function previousMedia() {\n    // If at the beginning of the array, go to the end of the array\n    if (currentIndex === 0) {\n      currentIndex = displayedMedias.length - 1;\n      setMediaSrc();\n    } else {\n      currentIndex--;\n      setMediaSrc();\n    }\n  };\n\n  var nextMedia = function nextMedia() {\n    // If at the end of the array, go to the beginning of the array\n    if (currentIndex === displayedMedias.length - 1) {\n      currentIndex = 0;\n      setMediaSrc();\n    } else {\n      currentIndex++;\n      setMediaSrc();\n    }\n  }; // Mouse controls\n\n\n  previousButton.addEventListener('click', previousMedia);\n  nextButton.addEventListener('click', nextMedia);\n};\n\nvar filterMedias = function filterMedias() {\n  var filterMedias = function filterMedias(category) {\n    if (category !== 'Tous') {\n      var filteredElements = document.querySelectorAll(\".gallery__item img:not(.\".concat(category, \")\"));\n\n      var _iterator = _createForOfIteratorHelper(filteredElements),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var iterator = _step.value;\n          iterator.parentNode.style.display = \"none\";\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      displayedMedias = document.querySelectorAll(\".gallery__item img.\".concat(category)); // Display filtered media if previously filtered\n\n      var _iterator2 = _createForOfIteratorHelper(displayedMedias),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var _iterator3 = _step2.value;\n          _iterator3.parentNode.style.display = \"block\";\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n\n      console.log(displayedMedias);\n    } else {\n      var _iterator4 = _createForOfIteratorHelper(medias),\n          _step3;\n\n      try {\n        for (_iterator4.s(); !(_step3 = _iterator4.n()).done;) {\n          var _iterator5 = _step3.value;\n          _iterator5.parentNode.style.display = \"block\";\n        }\n      } catch (err) {\n        _iterator4.e(err);\n      } finally {\n        _iterator4.f();\n      }\n\n      displayedMedias = medias;\n    }\n  };\n\n  var _iterator6 = _createForOfIteratorHelper(filterButtons),\n      _step4;\n\n  try {\n    for (_iterator6.s(); !(_step4 = _iterator6.n()).done;) {\n      var iterator = _step4.value;\n      iterator.addEventListener('click', function (e) {\n        switch (e.target.value) {\n          case 'Peintures noir et blanc':\n            filterMedias('black-white');\n            break;\n\n          case 'Peintures couleur':\n            filterMedias('colour');\n            break;\n\n          case 'Dessins':\n            filterMedias('drawing');\n            break;\n\n          case 'Tous':\n            filterMedias('Tous');\n            break;\n\n          default:\n            break;\n        }\n      });\n    }\n  } catch (err) {\n    _iterator6.e(err);\n  } finally {\n    _iterator6.f();\n  }\n};\n\nvar initGallery = function initGallery() {\n  enableLightbox();\n  lightboxControls();\n  filterMedias();\n};\n\n//# sourceURL=webpack://piotr-wojcik-art/./src/scripts/pages/gallery.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;