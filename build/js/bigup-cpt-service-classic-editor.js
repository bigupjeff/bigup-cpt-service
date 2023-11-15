/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_image-select.js":
/*!*********************************!*\
  !*** ./src/js/_image-select.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageSelect: () => (/* binding */ imageSelect)
/* harmony export */ });
const imageSelect = () => {
  const initialiseInput = () => {
    const buttonUploadSelector = '.image-upload';
    const linkRemoveSelector = '.image-remove';
    const imagePreviewSelector = '.image-preview';
    const textInputSelector = '.meta-image';
    const buttonUpload = document.querySelector(buttonUploadSelector);
    const linkRemove = document.querySelector(linkRemoveSelector);
    if (!buttonUpload) return;
    let mediaFrame;
    const removeAllChildren = element => {
      while (element.firstChild) {
        element.removeChild(element.lastChild);
      }
    };
    buttonUpload.addEventListener('click', async e => {
      e.preventDefault();
      const imagePreview = buttonUpload.parentElement.parentElement.querySelector(imagePreviewSelector);
      const textInput = buttonUpload.parentElement.querySelector(textInputSelector);

      // If the frame already exists, re-open it.
      if (mediaFrame) {
        mediaFrame.open();
        return;
      }

      // Create a new media frame.
      mediaFrame = wp.media({
        title: 'Select media to use as the profile image',
        button: {
          text: 'Use this image'
        },
        multiple: false
      });
      mediaFrame.on('select', () => {
        // Get attachment selection and create a JSON representation of the model.
        const attachment = mediaFrame.state().get('selection').first().toJSON();
        console.log(attachment.id);
        const domain = window.location.origin;
        const relativePath = attachment.url.replace(domain, '');
        textInput.value = attachment.id;
        const imageElement = imagePreview.querySelector('img');
        if (imageElement) {
          imagePreview.querySelector('img').setAttribute('src', relativePath);
        } else {
          const newImg = document.createElement('img');
          newImg.setAttribute('src', relativePath);
          newImg.setAttribute('width', '100px');
          newImg.setAttribute('height', '100px');
          removeAllChildren(imagePreview);
          imagePreview.appendChild(newImg);
          linkRemove.style.display = 'block';
        }
      });

      // Opens the media library frame.
      mediaFrame.open();
    });
    linkRemove.addEventListener('click', async e => {
      e.preventDefault();
      const imagePreview = linkRemove.parentElement.parentElement.querySelector(imagePreviewSelector);
      const textInput = linkRemove.parentElement.querySelector(textInputSelector);
      removeAllChildren(imagePreview);
      textInput.value = '';
      linkRemove.style.display = 'none';
    });
  };
  const docLoaded = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(docLoaded);
      initialiseInput();
    }
  }, 100);
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************!*\
  !*** ./src/js/bigup-cpt-service-classic-editor.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_image-select */ "./src/js/_image-select.js");

(0,_image_select__WEBPACK_IMPORTED_MODULE_0__.imageSelect)();
})();

/******/ })()
;
//# sourceMappingURL=bigup-cpt-service-classic-editor.js.map