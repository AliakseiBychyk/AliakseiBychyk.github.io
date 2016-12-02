var start =
webpackJsonp_name_([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _DOMManipulationUtilities = __webpack_require__(1);

	var _DOMManipulationUtilities2 = _interopRequireDefault(_DOMManipulationUtilities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var newsHeader = document.querySelector('#header');
	var dom = _DOMManipulationUtilities2.default;

	dom.addButton('button', 'start-button', 'Go to the BBC news', newsHeader);

	document.getElementById('start-button').onclick = function () {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (app) {
	    app.app();
	    document.getElementById('start-button').style.visibility = "hidden";
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DOMManipulationUtilities = {

	  addElement: function addElement(content, place) {
	    var newElement = document.createElement('div');
	    newElement.innerHTML = content;
	    place.appendChild(newElement);
	  },

	  addLink: function addLink(url, text, place) {
	    var newLink = document.createElement('a');
	    newLink.setAttribute('href', url);
	    newLink.innerHTML = text;
	    place.appendChild(newLink);
	  },

	  addImage: function addImage(url, alt, classAttr, place) {
	    var newImg = document.createElement('img');
	    newImg.setAttribute('src', url);
	    newImg.setAttribute('alt', alt);
	    newImg.setAttribute('class', classAttr);
	    newImg.innerHTML;
	    place.appendChild(newImg);
	  },

	  addButton: function addButton(typeAttr, idValue, caption, place) {
	    var newButton = document.createElement('button');
	    newButton.setAttribute('type', typeAttr);
	    newButton.setAttribute('id', idValue);
	    newButton.innerHTML = caption;
	    place.appendChild(newButton);
	  }

	};

		exports.default = DOMManipulationUtilities;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.app = app;

	var _DOMManipulationUtilities = __webpack_require__(1);

	var _DOMManipulationUtilities2 = _interopRequireDefault(_DOMManipulationUtilities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function app() {

	  var apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
	  var newsSource = 'bbc-news';
	  var url = 'https://newsapi.org/v1/articles?source=' + newsSource + '&apiKey=' + apiKey;
	  var urlLink = 'http://newsapi.org';

	  fetch(url).then(function (response) {
	    return response.json();
	  }).then(function (json) {

	    var newsHeader = document.querySelector('#header');
	    var newsBlock = document.querySelector('main');
	    var dom = _DOMManipulationUtilities2.default;

	    var headerSource = json.source.toUpperCase();
	    dom.addElement(headerSource, newsHeader);

	    var newsSourceText = 'News powered by: News API';
	    dom.addLink(urlLink, newsSourceText, newsHeader);

	    json.articles.forEach(function (article) {

	      var newsArticle = document.createElement('div');
	      newsArticle.setAttribute('class', 'article');
	      var artKeys = Object.keys(article);

	      artKeys.slice(0, 3).forEach(function (key) {
	        return dom.addElement(article[key], newsArticle);
	      });

	      var alt = article.title;
	      var urlToImg = article.urlToImage;
	      var imgClass = 'image';
	      dom.addImage(urlToImg, alt, imgClass, newsArticle);

	      var readMore = 'Read more...';
	      dom.addLink(article.url, readMore, newsArticle);

	      newsBlock.appendChild(newsArticle);
	    });
	  }).catch(function (error) {
	    return console.log("Unexpected error: " + error);
	  });
	};

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3N0YXJ0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdzdGFydC1idXR0b24nLCAnR28gdG8gdGhlIEJCQyBuZXdzJywgbmV3c0hlYWRlcik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBkZWZpbmUoWycuL2FwcC5qcyddLCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwLmFwcCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9zdGFydC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCJjb25zdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgPSB7XG5cbiAgYWRkRWxlbWVudDogZnVuY3Rpb24gKGNvbnRlbnQsIHBsYWNlKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgfSxcblxuICBhZGRMaW5rOiBmdW5jdGlvbiAodXJsLCB0ZXh0LCBwbGFjZSkge1xuICAgIGNvbnN0IG5ld0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgIG5ld0xpbmsuaW5uZXJIVE1MID0gdGV4dDtcbiAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdMaW5rKTtcbiAgfSxcblxuICBhZGRJbWFnZTogZnVuY3Rpb24gKHVybCwgYWx0LCBjbGFzc0F0dHIsIHBsYWNlKSB7XG4gICAgY29uc3QgbmV3SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NBdHRyKTtcbiAgICBuZXdJbWcuaW5uZXJIVE1MO1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0ltZyk7XG4gIH0sXG5cbiAgYWRkQnV0dG9uOiBmdW5jdGlvbiAodHlwZUF0dHIsIGlkVmFsdWUsIGNhcHRpb24sIHBsYWNlKSB7XG4gICAgY29uc3QgbmV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGVBdHRyKTtcbiAgICBuZXdCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGlkVmFsdWUpO1xuICAgIG5ld0J1dHRvbi5pbm5lckhUTUwgPSBjYXB0aW9uO1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJpbXBvcnQgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzIGZyb20gJy4vRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcCgpIHtcblxuICBjb25zdCBhcGlLZXkgPSAnMmY0OWI5ZjhiM2ZjNDc0ODg4ZTlmMDI1NzVlNGNkZDYnO1xuICBjb25zdCBuZXdzU291cmNlID0gJ2JiYy1uZXdzJztcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjEvYXJ0aWNsZXM/c291cmNlPSR7bmV3c1NvdXJjZX0mYXBpS2V5PSR7YXBpS2V5fWA7XG4gIGNvbnN0IHVybExpbmsgPSAnaHR0cDovL25ld3NhcGkub3JnJztcblxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuXG4gICAgICBjb25zdCBuZXdzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgICAgY29uc3QgbmV3c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgY29uc3QgZG9tID0gRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzO1xuXG4gICAgICBjb25zdCBoZWFkZXJTb3VyY2UgPSBqc29uLnNvdXJjZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgZG9tLmFkZEVsZW1lbnQoaGVhZGVyU291cmNlLCBuZXdzSGVhZGVyKTtcblxuICAgICAgY29uc3QgbmV3c1NvdXJjZVRleHQgPSAnTmV3cyBwb3dlcmVkIGJ5OiBOZXdzIEFQSSc7XG4gICAgICBkb20uYWRkTGluayh1cmxMaW5rLCBuZXdzU291cmNlVGV4dCwgbmV3c0hlYWRlcik7XG5cbiAgICAgIGpzb24uYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcblxuICAgICAgICBjb25zdCBuZXdzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdzQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FydGljbGUnKTtcbiAgICAgICAgY29uc3QgYXJ0S2V5cyA9IE9iamVjdC5rZXlzKGFydGljbGUpO1xuXG4gICAgICAgIGFydEtleXMuc2xpY2UoMCwgMykuZm9yRWFjaChrZXkgPT4gZG9tLmFkZEVsZW1lbnQoYXJ0aWNsZVtrZXldLCBuZXdzQXJ0aWNsZSkpO1xuXG4gICAgICAgIGNvbnN0IGFsdCA9IGFydGljbGUudGl0bGU7XG4gICAgICAgIGNvbnN0IHVybFRvSW1nID0gYXJ0aWNsZS51cmxUb0ltYWdlO1xuICAgICAgICBjb25zdCBpbWdDbGFzcyA9ICdpbWFnZSdcbiAgICAgICAgZG9tLmFkZEltYWdlKHVybFRvSW1nLCBhbHQsIGltZ0NsYXNzLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgICAgY29uc3QgcmVhZE1vcmUgPSAnUmVhZCBtb3JlLi4uJztcbiAgICAgICAgZG9tLmFkZExpbmsoYXJ0aWNsZS51cmwsIHJlYWRNb3JlLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgICAgbmV3c0Jsb2NrLmFwcGVuZENoaWxkKG5ld3NBcnRpY2xlKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVW5leHBlY3RlZCBlcnJvcjogXCIgKyBlcnJvcikpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FEQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FEQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQUNBO0FBaUNBOzs7Ozs7Ozs7OztBRWhDQTtBQUNBO0FBSEE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==