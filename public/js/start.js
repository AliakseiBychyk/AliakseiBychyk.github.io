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
	    document.getElementById('start-button').style.visibility = 'hidden';
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

	  var _create = {
	    div: function div() {
	      return document.createElement('div');
	    },
	    a: function a() {
	      return document.createElement('a');
	    },
	    img: function img() {
	      return document.createElement('img');
	    },
	    button: function button() {
	      return document.createElement('button');
	    }
	  };

	  return {

	    addBlock: function addBlock(content, place) {
	      var newBlock = _create.div();
	      newBlock.innerHTML = content;
	      place.appendChild(newBlock);
	    },

	    addLink: function addLink(url, text, place) {
	      var newLink = _create.a();
	      newLink.setAttribute('href', url);
	      newLink.innerHTML = text;
	      place.appendChild(newLink);
	    },

	    addImage: function addImage(url, alt, classAttr, place) {
	      var newImg = _create.img();
	      newImg.setAttribute('src', url);
	      newImg.setAttribute('alt', alt);
	      newImg.setAttribute('class', classAttr);
	      newImg.innerHTML;
	      place.appendChild(newImg);
	    },

	    addButton: function addButton(typeAttr, idValue, caption, place) {
	      var newButton = _create.button();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3N0YXJ0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdzdGFydC1idXR0b24nLCAnU2hvdyB0aGUgQkJDIG5ld3MnLCBuZXdzSGVhZGVyKTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcbiAgZGVmaW5lKFsnLi9hcHAuanMnXSwgIGFwcCA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9zdGFydC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCJjb25zdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IF9jcmVhdGUgPSB7XG4gICAgZGl2OiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBhOiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksXG4gICAgaW1nOiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcbiAgICBidXR0b246ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIH1cblxuICByZXR1cm4ge1xuXG4gICAgYWRkQmxvY2s6IChjb250ZW50LCBwbGFjZSkgPT4ge1xuICAgICAgY29uc3QgbmV3QmxvY2sgPSBfY3JlYXRlLmRpdigpO1xuICAgICAgbmV3QmxvY2suaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0Jsb2NrKTtcbiAgICB9LFxuXG4gICAgYWRkTGluazogKHVybCwgdGV4dCwgcGxhY2UpID0+IHtcbiAgICAgIGNvbnN0IG5ld0xpbmsgPSBfY3JlYXRlLmEoKTtcbiAgICAgIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICAgIG5ld0xpbmsuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0xpbmspO1xuICAgIH0sXG5cbiAgICBhZGRJbWFnZTogKHVybCwgYWx0LCBjbGFzc0F0dHIsIHBsYWNlKSA9PiB7XG4gICAgICBjb25zdCBuZXdJbWcgPSBfY3JlYXRlLmltZygpO1xuICAgICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gICAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzQXR0cik7XG4gICAgICBuZXdJbWcuaW5uZXJIVE1MO1xuICAgICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3SW1nKTtcbiAgICB9LFxuXG4gICAgYWRkQnV0dG9uOiAodHlwZUF0dHIsIGlkVmFsdWUsIGNhcHRpb24sIHBsYWNlKSA9PiB7XG4gICAgICBjb25zdCBuZXdCdXR0b24gPSBfY3JlYXRlLmJ1dHRvbigpO1xuICAgICAgbmV3QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGVBdHRyKTtcbiAgICAgIG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRWYWx1ZSk7XG4gICAgICBuZXdCdXR0b24uaW5uZXJIVE1MID0gY2FwdGlvbjtcbiAgICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gICAgfVxuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyIsImltcG9ydCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgZnJvbSAnLi9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMnO1xuXG5jb25zdCBhcHAgPSAoICgpID0+IHtcblxuICBjb25zdCBhcGlLZXkgPSAnMmY0OWI5ZjhiM2ZjNDc0ODg4ZTlmMDI1NzVlNGNkZDYnO1xuICBjb25zdCBuZXdzU291cmNlID0gJ2JiYy1uZXdzJztcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjEvYXJ0aWNsZXM/c291cmNlPSR7bmV3c1NvdXJjZX0mYXBpS2V5PSR7YXBpS2V5fWA7XG4gIGNvbnN0IHVybExpbmsgPSAnaHR0cDovL25ld3NhcGkub3JnJztcblxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuXG4gICAgICBjb25zdCBuZXdzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgICAgY29uc3QgbmV3c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgY29uc3QgZG9tID0gRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzO1xuXG4gICAgICBjb25zdCBoZWFkZXJTb3VyY2UgPSBqc29uLnNvdXJjZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgZG9tLmFkZEJsb2NrKGhlYWRlclNvdXJjZSwgbmV3c0hlYWRlcik7XG5cbiAgICAgIGNvbnN0IG5ld3NTb3VyY2VUZXh0ID0gJ05ld3MgcG93ZXJlZCBieTogTmV3cyBBUEknO1xuICAgICAgZG9tLmFkZExpbmsodXJsTGluaywgbmV3c1NvdXJjZVRleHQsIG5ld3NIZWFkZXIpO1xuXG4gICAgICBqc29uLmFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG5cbiAgICAgICAgY29uc3QgbmV3c0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3c0FydGljbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnRpY2xlJyk7XG4gICAgICAgIGNvbnN0IGFydEtleXMgPSBPYmplY3Qua2V5cyhhcnRpY2xlKTtcblxuICAgICAgICBhcnRLZXlzLnNsaWNlKDAsIDMpLmZvckVhY2goa2V5ID0+IGRvbS5hZGRCbG9jayhhcnRpY2xlW2tleV0sIG5ld3NBcnRpY2xlKSk7XG5cbiAgICAgICAgY29uc3QgYWx0ID0gYXJ0aWNsZS50aXRsZTtcbiAgICAgICAgY29uc3QgdXJsVG9JbWcgPSBhcnRpY2xlLnVybFRvSW1hZ2U7XG4gICAgICAgIGNvbnN0IGltZ0NsYXNzID0gJ2ltYWdlJ1xuICAgICAgICBkb20uYWRkSW1hZ2UodXJsVG9JbWcsIGFsdCwgaW1nQ2xhc3MsIG5ld3NBcnRpY2xlKTtcblxuICAgICAgICBjb25zdCByZWFkTW9yZSA9ICdSZWFkIG1vcmUuLi4nO1xuICAgICAgICBkb20uYWRkTGluayhhcnRpY2xlLnVybCwgcmVhZE1vcmUsIG5ld3NBcnRpY2xlKTtcblxuICAgICAgICBuZXdzQmxvY2suYXBwZW5kQ2hpbGQobmV3c0FydGljbGUpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJVbmV4cGVjdGVkIGVycm9yOiBcIiArIGVycm9yKSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QURFQTtBQ0NBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FEQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJBO0FBZ0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUUxQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=