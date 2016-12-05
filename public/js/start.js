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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3N0YXJ0LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdzdGFydC1idXR0b24nLCAnU2hvdyB0aGUgQkJDIG5ld3MnLCBuZXdzSGVhZGVyKTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcbiAgZGVmaW5lKFsnLi9hcHAuanMnXSwgIGFwcCA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9zdGFydC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCJjb25zdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgPSAoKCkgPT4ge1xuXG4gIGNvbnN0IF9jcmVhdGUgPSB7XG4gICAgZGl2OiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBhOiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksXG4gICAgaW1nOiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcbiAgICBidXR0b246ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIH1cblxuICBmdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgYXJyYXkpIHtcbiAgICBsZXQgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogKCkgPT4gbmV4dEluZGV4IDwgYXJyYXkubGVuZ3RoID9cbiAgICAgICAge1xuICAgICAgICAgIGFkZDogKG5hbWUpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIGFycmF5W25leHRJbmRleCsrXSksXG4gICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgfSA6XG4gICAgICAgIHsgZG9uZTogdHJ1ZSB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcblxuICAgIGFkZEJsb2NrOiAoY29udGVudCwgcGxhY2UpID0+IHtcbiAgICAgIGNvbnN0IG5ld0Jsb2NrID0gX2NyZWF0ZS5kaXYoKTtcbiAgICAgIG5ld0Jsb2NrLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdCbG9jayk7XG4gICAgfSxcblxuICAgIGFkZExpbms6ICh1cmwsIHRleHQsIHBsYWNlKSA9PiB7XG4gICAgICBjb25zdCBuZXdMaW5rID0gX2NyZWF0ZS5hKCk7XG4gICAgICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgICBuZXdMaW5rLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdMaW5rKTtcbiAgICB9LFxuXG4gICAgYWRkSW1hZ2U6ICh1cmwsIGFsdCwgY2xhc3NBdHRyLCBwbGFjZSkgPT4ge1xuICAgICAgY29uc3QgbmV3SW1nID0gX2NyZWF0ZS5pbWcoKTtcbiAgICAgIGNvbnN0IGF0dHJOYW1lcyA9IFsnc3JjJywgJ2FsdCcsICdjbGFzcyddO1xuICAgICAgY29uc3QgYXR0clZhbHVlcyA9IFt1cmwsIGFsdCwgY2xhc3NBdHRyXTtcbiAgICAgIGF0dHJOYW1lcy5mb3JFYWNoKGF0dHJOYW1lID0+IHtcbiAgICAgICAgYWRkQXR0cmlidXRlKG5ld0ltZywgYXR0clZhbHVlcykubmV4dCgpLmFkZChhdHRyTmFtZSk7XG4gICAgICB9KVxuICAgICAgbmV3SW1nLmlubmVySFRNTDtcbiAgICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0ltZyk7XG4gICAgfSxcblxuICAgIGFkZEJ1dHRvbjogKHR5cGVBdHRyLCBpZFZhbHVlLCBjYXB0aW9uLCBwbGFjZSkgPT4ge1xuICAgICAgY29uc3QgbmV3QnV0dG9uID0gX2NyZWF0ZS5idXR0b24oKTtcbiAgICAgIG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0eXBlQXR0cik7XG4gICAgICBuZXdCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGlkVmFsdWUpO1xuICAgICAgbmV3QnV0dG9uLmlubmVySFRNTCA9IGNhcHRpb247XG4gICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuICAgIH1cbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiLCJpbXBvcnQgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzIGZyb20gJy4vRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzLmpzJztcblxuY29uc3QgYXBwID0gKCAoKSA9PiB7XG5cbiAgY29uc3QgYXBpS2V5ID0gJzJmNDliOWY4YjNmYzQ3NDg4OGU5ZjAyNTc1ZTRjZGQ2JztcbiAgY29uc3QgbmV3c1NvdXJjZSA9ICdiYmMtbmV3cyc7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT0ke25ld3NTb3VyY2V9JmFwaUtleT0ke2FwaUtleX1gO1xuICBjb25zdCB1cmxMaW5rID0gJ2h0dHA6Ly9uZXdzYXBpLm9yZyc7XG5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcblxuICAgICAgY29uc3QgbmV3c0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICAgIGNvbnN0IG5ld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgIGNvbnN0IGRvbSA9IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcblxuICAgICAgY29uc3QgaGVhZGVyU291cmNlID0ganNvbi5zb3VyY2UudG9VcHBlckNhc2UoKTtcbiAgICAgIGRvbS5hZGRCbG9jayhoZWFkZXJTb3VyY2UsIG5ld3NIZWFkZXIpO1xuXG4gICAgICBjb25zdCBuZXdzU291cmNlVGV4dCA9ICdOZXdzIHBvd2VyZWQgYnk6IE5ld3MgQVBJJztcbiAgICAgIGRvbS5hZGRMaW5rKHVybExpbmssIG5ld3NTb3VyY2VUZXh0LCBuZXdzSGVhZGVyKTtcblxuICAgICAganNvbi5hcnRpY2xlcy5mb3JFYWNoKGFydGljbGUgPT4ge1xuXG4gICAgICAgIGNvbnN0IG5ld3NBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld3NBcnRpY2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYXJ0aWNsZScpO1xuICAgICAgICBjb25zdCBhcnRLZXlzID0gT2JqZWN0LmtleXMoYXJ0aWNsZSk7XG5cbiAgICAgICAgYXJ0S2V5cy5zbGljZSgwLCAzKS5mb3JFYWNoKGtleSA9PiBkb20uYWRkQmxvY2soYXJ0aWNsZVtrZXldLCBuZXdzQXJ0aWNsZSkpO1xuXG4gICAgICAgIGNvbnN0IGFsdCA9IGFydGljbGUudGl0bGU7XG4gICAgICAgIGNvbnN0IHVybFRvSW1nID0gYXJ0aWNsZS51cmxUb0ltYWdlO1xuICAgICAgICBjb25zdCBpbWdDbGFzcyA9ICdpbWFnZSdcbiAgICAgICAgZG9tLmFkZEltYWdlKHVybFRvSW1nLCBhbHQsIGltZ0NsYXNzLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgICAgY29uc3QgcmVhZE1vcmUgPSAnUmVhZCBtb3JlLi4uJztcbiAgICAgICAgZG9tLmFkZExpbmsoYXJ0aWNsZS51cmwsIHJlYWRNb3JlLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgICAgbmV3c0Jsb2NrLmFwcGVuZENoaWxkKG5ld3NBcnRpY2xlKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVW5leHBlY3RlZCBlcnJvcjogXCIgKyBlcnJvcikpO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9hcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQ0NBO0FBQ0E7QUFDQTtBQUNBO0FERUE7QUNDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBRENBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBa0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUV4REE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=