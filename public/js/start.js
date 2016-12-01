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

	dom.addButton('button', 'Go to the BBC news', newsHeader);

	document.getElementsByTagName('button').onclick = function () {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (app) {
	    app();
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

	  addButton: function addButton(typeAttr, caption, place) {
	    var newButton = document.createElement('button');
	    newButton.setAttribute('type', typeAttr);
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

	var apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
	var newsSource = 'bbc-news';
	var url = 'https://newsapi.org/v1/articles?source=' + newsSource + '&apiKey=' + apiKey;
	var urlLink = 'http://newsapi.org';

	function app() {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc2NyaXB0cy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vIiwid2VicGFjazovLy9zY3JpcHRzL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdHbyB0byB0aGUgQkJDIG5ld3MnLCBuZXdzSGVhZGVyKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGRlZmluZSAoWycuL2FwcC5qcyddLCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgYXBwKCk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzY3JpcHRzL3N0YXJ0LmpzIiwidW5kZWZpbmVkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICIsImNvbnN0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyA9IHtcblxuICBhZGRFbGVtZW50OiBmdW5jdGlvbiAoY29udGVudCwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICB9LFxuXG4gIGFkZExpbms6IGZ1bmN0aW9uICh1cmwsIHRleHQsIHBsYWNlKSB7XG4gICAgY29uc3QgbmV3TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgbmV3TGluay5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0xpbmspO1xuICB9LFxuXG4gIGFkZEltYWdlOiBmdW5jdGlvbiAodXJsLCBhbHQsIGNsYXNzQXR0ciwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc0F0dHIpO1xuICAgIG5ld0ltZy5pbm5lckhUTUw7XG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3SW1nKTtcbiAgfSxcblxuICBhZGRCdXR0b246IGZ1bmN0aW9uICh0eXBlQXR0ciwgY2FwdGlvbiwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZUF0dHIpO1xuICAgIG5ld0J1dHRvbi5pbm5lckhUTUwgPSBjYXB0aW9uO1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNjcmlwdHMvRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzLmpzIiwiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IGFwaUtleSA9ICcyZjQ5YjlmOGIzZmM0NzQ4ODhlOWYwMjU3NWU0Y2RkNic7XG5jb25zdCBuZXdzU291cmNlID0gJ2JiYy1uZXdzJztcbmNvbnN0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT0ke25ld3NTb3VyY2V9JmFwaUtleT0ke2FwaUtleX1gO1xuY29uc3QgdXJsTGluayA9ICdodHRwOi8vbmV3c2FwaS5vcmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwKCkge1xuXG4gIGZldGNoKHVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG5cbiAgICAgIGNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG4gICAgICBjb25zdCBuZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICBjb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbiAgICAgIGNvbnN0IGhlYWRlclNvdXJjZSA9IGpzb24uc291cmNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBkb20uYWRkRWxlbWVudChoZWFkZXJTb3VyY2UsIG5ld3NIZWFkZXIpO1xuXG4gICAgICBjb25zdCBuZXdzU291cmNlVGV4dCA9ICdOZXdzIHBvd2VyZWQgYnk6IE5ld3MgQVBJJztcbiAgICAgIGRvbS5hZGRMaW5rKHVybExpbmssIG5ld3NTb3VyY2VUZXh0LCBuZXdzSGVhZGVyKTtcblxuICAgICAganNvbi5hcnRpY2xlcy5mb3JFYWNoKGFydGljbGUgPT4ge1xuXG4gICAgICAgIGNvbnN0IG5ld3NBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld3NBcnRpY2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXJ0aWNsZScpO1xuICAgICAgICBjb25zdCBhcnRLZXlzID0gT2JqZWN0LmtleXMoYXJ0aWNsZSk7XG5cbiAgICAgICAgYXJ0S2V5cy5zbGljZSgwLCAzKS5mb3JFYWNoKGtleSA9PiBkb20uYWRkRWxlbWVudChhcnRpY2xlW2tleV0sIG5ld3NBcnRpY2xlKSk7XG5cbiAgICAgICAgY29uc3QgYWx0ID0gYXJ0aWNsZS50aXRsZTtcbiAgICAgICAgY29uc3QgdXJsVG9JbWcgPSBhcnRpY2xlLnVybFRvSW1hZ2U7XG4gICAgICAgIGNvbnN0IGltZ0NsYXNzID0gJ2ltYWdlJ1xuICAgICAgICBkb20uYWRkSW1hZ2UodXJsVG9JbWcsIGFsdCwgaW1nQ2xhc3MsIG5ld3NBcnRpY2xlKTtcblxuICAgICAgICBjb25zdCByZWFkTW9yZSA9ICdSZWFkIG1vcmUuLi4nO1xuICAgICAgICBkb20uYWRkTGluayhhcnRpY2xlLnVybCwgcmVhZE1vcmUsIG5ld3NBcnRpY2xlKTtcblxuICAgICAgICBuZXdzQmxvY2suYXBwZW5kQ2hpbGQobmV3c0FydGljbGUpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJVbmV4cGVjdGVkIGVycm9yOiBcIiArIGVycm9yKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNjcmlwdHMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FEQ0E7QUNDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBRENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBQ0E7QUFnQ0E7Ozs7Ozs7Ozs7O0FFMUJBO0FBQ0E7QUFSQTtBQUNBOzs7OztBQUNBO0FGQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FFQ0E7QUZDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9