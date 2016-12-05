var start =
webpackJsonp_name_([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _DOMManipulationUtilities = __webpack_require__(2);

	var _DOMManipulationUtilities2 = _interopRequireDefault(_DOMManipulationUtilities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var newsHeader = document.querySelector('#header');
	var dom = _DOMManipulationUtilities2.default;

	dom.addButton('button', 'start-button', 'Show the BBC news', newsHeader);

	document.getElementById('start-button').onclick = function () {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (app) {
	    app();
	    document.getElementById('start-button').style.visibility = "hidden";
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DOMManipulationUtilities = function () {

	  return {

	    addBlock: function addBlock(content, place) {
	      var newBlock = document.createElement('div');
	      newBlock.innerHTML = content;
	      place.appendChild(newBlock);
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
	}();

	exports.default = DOMManipulationUtilities;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DOMManipulationUtilities = __webpack_require__(2);

	var _DOMManipulationUtilities2 = _interopRequireDefault(_DOMManipulationUtilities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = function () {

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
	    dom.addBlock(headerSource, newsHeader);

	    var newsSourceText = 'News powered by: News API';
	    dom.addLink(urlLink, newsSourceText, newsHeader);

	    json.articles.forEach(function (article) {

	      var newsArticle = document.createElement('div');
	      newsArticle.setAttribute('class', 'article');
	      var artKeys = Object.keys(article);

	      artKeys.slice(0, 3).forEach(function (key) {
	        return dom.addBlock(article[key], newsArticle);
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
	}();

	exports.default = app;

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3N0YXJ0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdzdGFydC1idXR0b24nLCAnU2hvdyB0aGUgQkJDIG5ld3MnLCBuZXdzSGVhZGVyKTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcbiAgZGVmaW5lKFsnLi9hcHAuanMnXSwgIGFwcCA9PiB7XG4gICAgYXBwKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL3N0YXJ0LmpzIiwidW5kZWZpbmVkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICIsImNvbnN0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyA9ICggKCkgPT4ge1xuXG4gIHJldHVybiB7XG5cbiAgICBhZGRCbG9jazogKGNvbnRlbnQsIHBsYWNlKSA9PiB7XG4gICAgICBjb25zdCBuZXdCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbmV3QmxvY2suaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0Jsb2NrKTtcbiAgICB9LFxuXG4gICAgYWRkTGluazogKHVybCwgdGV4dCwgcGxhY2UpID0+IHtcbiAgICAgIGNvbnN0IG5ld0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgICBuZXdMaW5rLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdMaW5rKTtcbiAgICB9LFxuXG4gICAgYWRkSW1hZ2U6ICh1cmwsIGFsdCwgY2xhc3NBdHRyLCBwbGFjZSkgPT4ge1xuICAgICAgY29uc3QgbmV3SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICAgICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NBdHRyKTtcbiAgICAgIG5ld0ltZy5pbm5lckhUTUw7XG4gICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdJbWcpO1xuICAgIH0sXG5cbiAgICBhZGRCdXR0b246ICh0eXBlQXR0ciwgaWRWYWx1ZSwgY2FwdGlvbiwgcGxhY2UpID0+IHtcbiAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbmV3QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGVBdHRyKTtcbiAgICAgIG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRWYWx1ZSk7XG4gICAgICBuZXdCdXR0b24uaW5uZXJIVE1MID0gY2FwdGlvbjtcbiAgICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gICAgfVxuICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzLmpzIiwiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IGFwcCA9ICggKCkgPT4ge1xuXG4gIGNvbnN0IGFwaUtleSA9ICcyZjQ5YjlmOGIzZmM0NzQ4ODhlOWYwMjU3NWU0Y2RkNic7XG4gIGNvbnN0IG5ld3NTb3VyY2UgPSAnYmJjLW5ld3MnO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92MS9hcnRpY2xlcz9zb3VyY2U9JHtuZXdzU291cmNlfSZhcGlLZXk9JHthcGlLZXl9YDtcbiAgY29uc3QgdXJsTGluayA9ICdodHRwOi8vbmV3c2FwaS5vcmcnO1xuXG4gIGZldGNoKHVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG5cbiAgICAgIGNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG4gICAgICBjb25zdCBuZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICBjb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbiAgICAgIGNvbnN0IGhlYWRlclNvdXJjZSA9IGpzb24uc291cmNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBkb20uYWRkQmxvY2soaGVhZGVyU291cmNlLCBuZXdzSGVhZGVyKTtcblxuICAgICAgY29uc3QgbmV3c1NvdXJjZVRleHQgPSAnTmV3cyBwb3dlcmVkIGJ5OiBOZXdzIEFQSSc7XG4gICAgICBkb20uYWRkTGluayh1cmxMaW5rLCBuZXdzU291cmNlVGV4dCwgbmV3c0hlYWRlcik7XG5cbiAgICAgIGpzb24uYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcblxuICAgICAgICBjb25zdCBuZXdzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdzQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FydGljbGUnKTtcbiAgICAgICAgY29uc3QgYXJ0S2V5cyA9IE9iamVjdC5rZXlzKGFydGljbGUpO1xuXG4gICAgICAgIGFydEtleXMuc2xpY2UoMCwgMykuZm9yRWFjaChrZXkgPT4gZG9tLmFkZEJsb2NrKGFydGljbGVba2V5XSwgbmV3c0FydGljbGUpKTtcblxuICAgICAgICBjb25zdCBhbHQgPSBhcnRpY2xlLnRpdGxlO1xuICAgICAgICBjb25zdCB1cmxUb0ltZyA9IGFydGljbGUudXJsVG9JbWFnZTtcbiAgICAgICAgY29uc3QgaW1nQ2xhc3MgPSAnaW1hZ2UnXG4gICAgICAgIGRvbS5hZGRJbWFnZSh1cmxUb0ltZywgYWx0LCBpbWdDbGFzcywgbmV3c0FydGljbGUpO1xuXG4gICAgICAgIGNvbnN0IHJlYWRNb3JlID0gJ1JlYWQgbW9yZS4uLic7XG4gICAgICAgIGRvbS5hZGRMaW5rKGFydGljbGUudXJsLCByZWFkTW9yZSwgbmV3c0FydGljbGUpO1xuXG4gICAgICAgIG5ld3NCbG9jay5hcHBlbmRDaGlsZChuZXdzQXJ0aWNsZSk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlVuZXhwZWN0ZWQgZXJyb3I6IFwiICsgZXJyb3IpKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBREVBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QURDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQWlDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FFcENBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FGQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9