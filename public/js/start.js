var start =
webpackJsonp_name_([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _DOMManipulationUtilities = __webpack_require__(1);

	var _DOMManipulationUtilities2 = _interopRequireDefault(_DOMManipulationUtilities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var newsHeader = document.querySelector('#header');
	var dom = _DOMManipulationUtilities2.default;

	dom.addButton('button', 'start-button', 'Go to the BBC news', newsHeader);

	document.getElementById('start-button').onclick = function () {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var app = __webpack_require__(2);
	    alert("Hello");
	    app();
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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

	  alert('app is called');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3N0YXJ0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdzdGFydC1idXR0b24nLCAnR28gdG8gdGhlIEJCQyBuZXdzJywgbmV3c0hlYWRlcik7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGRlZmluZShmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgIGxldCBhcHAgPSByZXF1aXJlKCcuL2FwcC5qcycpO1xuICAgIGFsZXJ0KFwiSGVsbG9cIik7XG4gICAgYXBwKCk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvc3RhcnQuanMiLCJ1bmRlZmluZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gIiwiY29uc3QgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzID0ge1xuXG4gIGFkZEVsZW1lbnQ6IGZ1bmN0aW9uIChjb250ZW50LCBwbGFjZSkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gIH0sXG5cbiAgYWRkTGluazogZnVuY3Rpb24gKHVybCwgdGV4dCwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICBuZXdMaW5rLmlubmVySFRNTCA9IHRleHQ7XG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3TGluayk7XG4gIH0sXG5cbiAgYWRkSW1hZ2U6IGZ1bmN0aW9uICh1cmwsIGFsdCwgY2xhc3NBdHRyLCBwbGFjZSkge1xuICAgIGNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzQXR0cik7XG4gICAgbmV3SW1nLmlubmVySFRNTDtcbiAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdJbWcpO1xuICB9LFxuXG4gIGFkZEJ1dHRvbjogZnVuY3Rpb24gKHR5cGVBdHRyLCBpZFZhbHVlLCBjYXB0aW9uLCBwbGFjZSkge1xuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlQXR0cik7XG4gICAgbmV3QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZFZhbHVlKTtcbiAgICBuZXdCdXR0b24uaW5uZXJIVE1MID0gY2FwdGlvbjtcbiAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzLmpzIiwiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHAoKSB7XG5cbiAgY29uc3QgYXBpS2V5ID0gJzJmNDliOWY4YjNmYzQ3NDg4OGU5ZjAyNTc1ZTRjZGQ2JztcbiAgY29uc3QgbmV3c1NvdXJjZSA9ICdiYmMtbmV3cyc7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT0ke25ld3NTb3VyY2V9JmFwaUtleT0ke2FwaUtleX1gO1xuICBjb25zdCB1cmxMaW5rID0gJ2h0dHA6Ly9uZXdzYXBpLm9yZyc7XG5cbiAgYWxlcnQoJ2FwcCBpcyBjYWxsZWQnKTtcblxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuXG4gICAgICBjb25zdCBuZXdzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgICAgY29uc3QgbmV3c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgY29uc3QgZG9tID0gRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzO1xuXG4gICAgICBjb25zdCBoZWFkZXJTb3VyY2UgPSBqc29uLnNvdXJjZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgZG9tLmFkZEVsZW1lbnQoaGVhZGVyU291cmNlLCBuZXdzSGVhZGVyKTtcblxuICAgICAgY29uc3QgbmV3c1NvdXJjZVRleHQgPSAnTmV3cyBwb3dlcmVkIGJ5OiBOZXdzIEFQSSc7XG4gICAgICBkb20uYWRkTGluayh1cmxMaW5rLCBuZXdzU291cmNlVGV4dCwgbmV3c0hlYWRlcik7XG5cbiAgICAgIGpzb24uYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcblxuICAgICAgICBjb25zdCBuZXdzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdzQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FydGljbGUnKTtcbiAgICAgICAgY29uc3QgYXJ0S2V5cyA9IE9iamVjdC5rZXlzKGFydGljbGUpO1xuXG4gICAgICAgIGFydEtleXMuc2xpY2UoMCwgMykuZm9yRWFjaChrZXkgPT4gZG9tLmFkZEVsZW1lbnQoYXJ0aWNsZVtrZXldLCBuZXdzQXJ0aWNsZSkpO1xuXG4gICAgICAgIGNvbnN0IGFsdCA9IGFydGljbGUudGl0bGU7XG4gICAgICAgIGNvbnN0IHVybFRvSW1nID0gYXJ0aWNsZS51cmxUb0ltYWdlO1xuICAgICAgICBjb25zdCBpbWdDbGFzcyA9ICdpbWFnZSdcbiAgICAgICAgZG9tLmFkZEltYWdlKHVybFRvSW1nLCBhbHQsIGltZ0NsYXNzLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgICAgY29uc3QgcmVhZE1vcmUgPSAnUmVhZCBtb3JlLi4uJztcbiAgICAgICAgZG9tLmFkZExpbmsoYXJ0aWNsZS51cmwsIHJlYWRNb3JlLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgICAgbmV3c0Jsb2NrLmFwcGVuZENoaWxkKG5ld3NBcnRpY2xlKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVW5leHBlY3RlZCBlcnJvcjogXCIgKyBlcnJvcikpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FERUE7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QURDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBQ0E7QUFpQ0E7Ozs7Ozs7Ozs7O0FFaENBO0FBQ0E7QUFIQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBRkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==