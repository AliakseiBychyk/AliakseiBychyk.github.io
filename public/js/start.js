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

	  function addAttribute(element, array) {
	    var nextIndex = 0;
	    return {
	      next: function next() {
	        return nextIndex < array.length ? {
	          add: function add(name) {
	            return element.setAttribute(name, array[nextIndex++]);
	          },
	          done: false
	        } : { done: true };
	      }
	    };
	  }

	  return {

	    addBlock: function addBlock(content, place, classAttr) {
	      var newBlock = _create.div();
	      var attrNames = ['class'];
	      var attrValues = [classAttr];
	      attrNames.forEach(function (attrName) {
	        addAttribute(newBlock, attrValues).next().add(attrName);
	      });
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
	      var attrNames = ['src', 'alt', 'class'];
	      var attrValues = [url, alt, classAttr];
	      attrNames.forEach(function (attrName) {
	        addAttribute(newImg, attrValues).next().add(attrName);
	      });
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

	var _dataSource = __webpack_require__(4);

	var _dataSource2 = _interopRequireDefault(_dataSource);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = function () {

	  var url = _dataSource2.default.url + "source=" + _dataSource2.default.newsSource + "&apiKey=" + _dataSource2.default.apiKey;
	  var urlLink = _dataSource2.default.urlLink;
	  var newsSource = _dataSource2.default.newsSource;

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"apiKey": "2f49b9f8b3fc474888e9f02575e4cdd6",
		"newsSource": "bbc-news",
		"url": "https://newsapi.org/v1/articles?",
		"urlLink": "http://newsapi.org"
	};

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3N0YXJ0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9kYXRhU291cmNlLmpzb24iXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdzdGFydC1idXR0b24nLCAnU2hvdyB0aGUgQkJDIG5ld3MnLCBuZXdzSGVhZGVyKTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcbiAgZGVmaW5lKFsnLi9hcHAuanMnXSwgIGFwcCA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9zdGFydC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCJjb25zdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IF9jcmVhdGUgPSB7XG4gICAgZGl2OiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBhOiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksXG4gICAgaW1nOiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcbiAgICBidXR0b246ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIH1cblxuICBmdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgYXJyYXkpIHtcbiAgICBsZXQgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogKCkgPT4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoID9cbiAgICAgICAge1xuICAgICAgICAgIGFkZDogKG5hbWUpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIGFycmF5W25leHRJbmRleCsrXSksXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6XG4gICAgICAgIHsgZG9uZTogdHJ1ZSB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcblxuICAgIGFkZEJsb2NrOiAoY29udGVudCwgcGxhY2UsIGNsYXNzQXR0cikgPT4ge1xuICAgICAgY29uc3QgbmV3QmxvY2sgPSBfY3JlYXRlLmRpdigpO1xuICAgICAgY29uc3QgYXR0ck5hbWVzID0gWydjbGFzcyddO1xuICAgICAgY29uc3QgYXR0clZhbHVlcyA9IFtjbGFzc0F0dHJdO1xuICAgICAgYXR0ck5hbWVzLmZvckVhY2goYXR0ck5hbWUgPT4ge1xuICAgICAgICBhZGRBdHRyaWJ1dGUobmV3QmxvY2ssIGF0dHJWYWx1ZXMpLm5leHQoKS5hZGQoYXR0ck5hbWUpO1xuICAgICAgfSk7XG4gICAgICBuZXdCbG9jay5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3QmxvY2spO1xuICAgIH0sXG5cbiAgICBhZGRMaW5rOiAodXJsLCB0ZXh0LCBwbGFjZSkgPT4ge1xuICAgICAgY29uc3QgbmV3TGluayA9IF9jcmVhdGUuYSgpO1xuICAgICAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgICAgbmV3TGluay5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3TGluayk7XG4gICAgfSxcblxuICAgIGFkZEltYWdlOiAodXJsLCBhbHQsIGNsYXNzQXR0ciwgcGxhY2UpID0+IHtcbiAgICAgIGNvbnN0IG5ld0ltZyA9IF9jcmVhdGUuaW1nKCk7XG4gICAgICBjb25zdCBhdHRyTmFtZXMgPSBbJ3NyYycsICdhbHQnLCAnY2xhc3MnXTtcbiAgICAgIGNvbnN0IGF0dHJWYWx1ZXMgPSBbdXJsLCBhbHQsIGNsYXNzQXR0cl07XG4gICAgICBhdHRyTmFtZXMuZm9yRWFjaChhdHRyTmFtZSA9PiB7XG4gICAgICAgIGFkZEF0dHJpYnV0ZShuZXdJbWcsIGF0dHJWYWx1ZXMpLm5leHQoKS5hZGQoYXR0ck5hbWUpO1xuICAgICAgfSk7XG4gICAgICBuZXdJbWcuaW5uZXJIVE1MO1xuICAgICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3SW1nKTtcbiAgICB9LFxuXG4gICAgYWRkQnV0dG9uOiAodHlwZUF0dHIsIGlkVmFsdWUsIGNhcHRpb24sIHBsYWNlKSA9PiB7XG4gICAgICBjb25zdCBuZXdCdXR0b24gPSBfY3JlYXRlLmJ1dHRvbigpO1xuICAgICAgbmV3QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsIHR5cGVBdHRyKTtcbiAgICAgIG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWRWYWx1ZSk7XG4gICAgICBuZXdCdXR0b24uaW5uZXJIVE1MID0gY2FwdGlvbjtcbiAgICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG4gICAgfVxuICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyIsImltcG9ydCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgZnJvbSAnLi9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMnO1xuaW1wb3J0IGRhdGFTb3VyY2UgZnJvbSAnLi9kYXRhU291cmNlLmpzb24nO1xuXG5jb25zdCBhcHAgPSAoICgpID0+IHtcblxuICBjb25zdCB1cmwgPSBkYXRhU291cmNlLnVybCArIFwic291cmNlPVwiICsgZGF0YVNvdXJjZS5uZXdzU291cmNlICsgXCImYXBpS2V5PVwiICsgZGF0YVNvdXJjZS5hcGlLZXk7XG4gIGNvbnN0IHVybExpbmsgPSBkYXRhU291cmNlLnVybExpbms7XG4gIGNvbnN0IG5ld3NTb3VyY2UgPSBkYXRhU291cmNlLm5ld3NTb3VyY2U7XG5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcblxuICAgICAgY29uc3QgbmV3c0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICAgIGNvbnN0IG5ld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgIGNvbnN0IGRvbSA9IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcblxuICAgICAgY29uc3QgaGVhZGVyU291cmNlID0ganNvbi5zb3VyY2UudG9VcHBlckNhc2UoKTtcbiAgICAgIGRvbS5hZGRCbG9jayhoZWFkZXJTb3VyY2UsIG5ld3NIZWFkZXIpO1xuXG4gICAgICBjb25zdCBuZXdzU291cmNlVGV4dCA9ICdOZXdzIHBvd2VyZWQgYnk6IE5ld3MgQVBJJztcbiAgICAgIGRvbS5hZGRMaW5rKHVybExpbmssIG5ld3NTb3VyY2VUZXh0LCBuZXdzSGVhZGVyKTtcblxuICAgICAganNvbi5hcnRpY2xlcy5mb3JFYWNoKGFydGljbGUgPT4ge1xuXG4gICAgICAgIGNvbnN0IG5ld3NBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld3NBcnRpY2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXJ0aWNsZScpO1xuICAgICAgICBjb25zdCBhcnRLZXlzID0gT2JqZWN0LmtleXMoYXJ0aWNsZSk7XG5cbiAgICAgICAgYXJ0S2V5cy5zbGljZSgwLCAzKS5mb3JFYWNoKGtleSA9PiBkb20uYWRkQmxvY2soYXJ0aWNsZVtrZXldLCBuZXdzQXJ0aWNsZSkpO1xuXG4gICAgICAgIGNvbnN0IGFsdCA9IGFydGljbGUudGl0bGU7XG4gICAgICAgIGNvbnN0IHVybFRvSW1nID0gYXJ0aWNsZS51cmxUb0ltYWdlO1xuICAgICAgICBjb25zdCBpbWdDbGFzcyA9ICdpbWFnZSdcbiAgICAgICAgZG9tLmFkZEltYWdlKHVybFRvSW1nLCBhbHQsIGltZ0NsYXNzLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgICAgY29uc3QgcmVhZE1vcmUgPSAnUmVhZCBtb3JlLi4uJztcbiAgICAgICAgZG9tLmFkZExpbmsoYXJ0aWNsZS51cmwsIHJlYWRNb3JlLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgICAgbmV3c0Jsb2NrLmFwcGVuZENoaWxkKG5ld3NBcnRpY2xlKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVW5leHBlY3RlZCBlcnJvcjogXCIgKyBlcnJvcikpO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9hcHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcGlLZXlcIjogXCIyZjQ5YjlmOGIzZmM0NzQ4ODhlOWYwMjU3NWU0Y2RkNlwiLFxuXHRcIm5ld3NTb3VyY2VcIjogXCJiYmMtbmV3c1wiLFxuXHRcInVybFwiOiBcImh0dHBzOi8vbmV3c2FwaS5vcmcvdjEvYXJ0aWNsZXM/XCIsXG5cdFwidXJsTGlua1wiOiBcImh0dHA6Ly9uZXdzYXBpLm9yZ1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2NyaXB0cy9kYXRhU291cmNlLmpzb25cbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBREVBO0FDQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QURDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQ0E7QUF1Q0E7QUFDQTs7Ozs7Ozs7Ozs7OztBRTdEQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBRkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBRzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzsiLCJzb3VyY2VSb290IjoiIn0=