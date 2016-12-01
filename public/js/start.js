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
	    alert("Hello");
	    app();
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	};

	/*
	document.getElementById('start-button').onclick = function () {
	  define(function (require) {
	    let app = require('./app.js');
	    alert("Hello");
	    app();
	  });
	};
	*/

		// document.getElementById('start-button').onclick = funct

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3N0YXJ0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdzdGFydC1idXR0b24nLCAnR28gdG8gdGhlIEJCQyBuZXdzJywgbmV3c0hlYWRlcik7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGRlZmluZShbJy4vYXBwLmpzJ10sIGZ1bmN0aW9uIChhcHApIHtcbiAgICBhbGVydChcIkhlbGxvXCIpO1xuICAgIGFwcCgpO1xuICB9KTtcbn07XG5cblxuLypcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBkZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUpIHtcbiAgICBsZXQgYXBwID0gcmVxdWlyZSgnLi9hcHAuanMnKTtcbiAgICBhbGVydChcIkhlbGxvXCIpO1xuICAgIGFwcCgpO1xuICB9KTtcbn07XG4qL1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJykub25jbGljayA9IGZ1bmN0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL3N0YXJ0LmpzIiwidW5kZWZpbmVkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICIsImNvbnN0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyA9IHtcblxuICBhZGRFbGVtZW50OiBmdW5jdGlvbiAoY29udGVudCwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICB9LFxuXG4gIGFkZExpbms6IGZ1bmN0aW9uICh1cmwsIHRleHQsIHBsYWNlKSB7XG4gICAgY29uc3QgbmV3TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgbmV3TGluay5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0xpbmspO1xuICB9LFxuXG4gIGFkZEltYWdlOiBmdW5jdGlvbiAodXJsLCBhbHQsIGNsYXNzQXR0ciwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc0F0dHIpO1xuICAgIG5ld0ltZy5pbm5lckhUTUw7XG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3SW1nKTtcbiAgfSxcblxuICBhZGRCdXR0b246IGZ1bmN0aW9uICh0eXBlQXR0ciwgaWRWYWx1ZSwgY2FwdGlvbiwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZUF0dHIpO1xuICAgIG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRWYWx1ZSk7XG4gICAgbmV3QnV0dG9uLmlubmVySFRNTCA9IGNhcHRpb247XG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3QnV0dG9uKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyIsImltcG9ydCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgZnJvbSAnLi9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwKCkge1xuXG4gIGNvbnN0IGFwaUtleSA9ICcyZjQ5YjlmOGIzZmM0NzQ4ODhlOWYwMjU3NWU0Y2RkNic7XG4gIGNvbnN0IG5ld3NTb3VyY2UgPSAnYmJjLW5ld3MnO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92MS9hcnRpY2xlcz9zb3VyY2U9JHtuZXdzU291cmNlfSZhcGlLZXk9JHthcGlLZXl9YDtcbiAgY29uc3QgdXJsTGluayA9ICdodHRwOi8vbmV3c2FwaS5vcmcnO1xuXG4gIGFsZXJ0KCdhcHAgaXMgY2FsbGVkJyk7XG5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcblxuICAgICAgY29uc3QgbmV3c0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICAgIGNvbnN0IG5ld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgIGNvbnN0IGRvbSA9IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcblxuICAgICAgY29uc3QgaGVhZGVyU291cmNlID0ganNvbi5zb3VyY2UudG9VcHBlckNhc2UoKTtcbiAgICAgIGRvbS5hZGRFbGVtZW50KGhlYWRlclNvdXJjZSwgbmV3c0hlYWRlcik7XG5cbiAgICAgIGNvbnN0IG5ld3NTb3VyY2VUZXh0ID0gJ05ld3MgcG93ZXJlZCBieTogTmV3cyBBUEknO1xuICAgICAgZG9tLmFkZExpbmsodXJsTGluaywgbmV3c1NvdXJjZVRleHQsIG5ld3NIZWFkZXIpO1xuXG4gICAgICBqc29uLmFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG5cbiAgICAgICAgY29uc3QgbmV3c0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3c0FydGljbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnRpY2xlJyk7XG4gICAgICAgIGNvbnN0IGFydEtleXMgPSBPYmplY3Qua2V5cyhhcnRpY2xlKTtcblxuICAgICAgICBhcnRLZXlzLnNsaWNlKDAsIDMpLmZvckVhY2goa2V5ID0+IGRvbS5hZGRFbGVtZW50KGFydGljbGVba2V5XSwgbmV3c0FydGljbGUpKTtcblxuICAgICAgICBjb25zdCBhbHQgPSBhcnRpY2xlLnRpdGxlO1xuICAgICAgICBjb25zdCB1cmxUb0ltZyA9IGFydGljbGUudXJsVG9JbWFnZTtcbiAgICAgICAgY29uc3QgaW1nQ2xhc3MgPSAnaW1hZ2UnXG4gICAgICAgIGRvbS5hZGRJbWFnZSh1cmxUb0ltZywgYWx0LCBpbWdDbGFzcywgbmV3c0FydGljbGUpO1xuXG4gICAgICAgIGNvbnN0IHJlYWRNb3JlID0gJ1JlYWQgbW9yZS4uLic7XG4gICAgICAgIGRvbS5hZGRMaW5rKGFydGljbGUudXJsLCByZWFkTW9yZSwgbmV3c0FydGljbGUpO1xuXG4gICAgICAgIG5ld3NCbG9jay5hcHBlbmRDaGlsZChuZXdzQXJ0aWNsZSk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlVuZXhwZWN0ZWQgZXJyb3I6IFwiICsgZXJyb3IpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBREVBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FEQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9CQTtBQUNBO0FBaUNBOzs7Ozs7Ozs7OztBRWhDQTtBQUNBO0FBSEE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=