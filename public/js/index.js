var index =
webpackJsonp_name_([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _DOMManipulationUtility = __webpack_require__(2);

	var _DOMManipulationUtility2 = _interopRequireDefault(_DOMManipulationUtility);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var newsHeader = document.querySelector('#header');
	var dom = _DOMManipulationUtility2.default;

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

	  // Module DOMManipulationUtilities is created using Module Pattern

	  // Here I use Facade Pattern to use subcomponents below
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

	  // Here I use Iterator Pattern to iterate through arrays as much as it needed and implement some logic
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

	var _appConfig = __webpack_require__(4);

	var _appConfig2 = _interopRequireDefault(_appConfig);

	var _apiCalls = __webpack_require__(5);

	var _apiCalls2 = _interopRequireDefault(_apiCalls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = function () {

	  var url = _appConfig2.default.url + "source=" + _appConfig2.default.newsSource + "&apiKey=" + _appConfig2.default.apiKey;
	  var urlLink = _appConfig2.default.urlLink;
	  var newsSource = _appConfig2.default.newsSource;

	  fetch(url).then(function (response) {
	    return response.json();
	  }).then(function (json) {
	    _apiCalls2.default.createHeader(json);
	    _apiCalls2.default.createArticles(json);
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DOMManipulationUtility = __webpack_require__(2);

	var _DOMManipulationUtility2 = _interopRequireDefault(_DOMManipulationUtility);

	var _appConfig = __webpack_require__(4);

	var _appConfig2 = _interopRequireDefault(_appConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var apiCalls = function () {

	  var url = _appConfig2.default.url + "source=" + _appConfig2.default.newsSource + "&apiKey=" + _appConfig2.default.apiKey;
	  var urlLink = _appConfig2.default.urlLink;
	  var newsSource = _appConfig2.default.newsSource;
	  var newsHeader = document.querySelector('#header');
	  var newsBlock = document.querySelector('main');
	  var dom = _DOMManipulationUtility2.default;
	  var newsSourceText = 'News powered by: News API';

	  return {

	    createHeader: function createHeader(json) {
	      var headerSource = json.source.toUpperCase();
	      dom.addBlock(headerSource, newsHeader);
	      dom.addLink(urlLink, newsSourceText, newsHeader);
	    },

	    createArticles: function createArticles(json) {
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
	    }
	  };
	}();

	exports.default = apiCalls;

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb24udXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2FwcC5jb25maWcuanNvbiIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2FwaUNhbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgZnJvbSAnLi9ET01NYW5pcHVsYXRpb24udXRpbGl0eS5qcyc7XG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbmRvbS5hZGRCdXR0b24oJ2J1dHRvbicsICdzdGFydC1idXR0b24nLCAnU2hvdyB0aGUgQkJDIG5ld3MnLCBuZXdzSGVhZGVyKTtcblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJykub25jbGljayA9ICgpID0+IHtcbiAgZGVmaW5lKFsnLi9hcHAuanMnXSwgIGFwcCA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9pbmRleC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCJjb25zdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgPSAoKCkgPT4ge1xuXG4gLy8gTW9kdWxlIERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBpcyBjcmVhdGVkIHVzaW5nIE1vZHVsZSBQYXR0ZXJuXG5cbiAgLy8gSGVyZSBJIHVzZSBGYWNhZGUgUGF0dGVybiB0byB1c2Ugc3ViY29tcG9uZW50cyBiZWxvd1xuICBjb25zdCBfY3JlYXRlID0ge1xuICAgIGRpdjogKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgYTogKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLFxuICAgIGltZzogKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyksXG4gICAgYnV0dG9uOiAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICB9XG5cbiAgLy8gSGVyZSBJIHVzZSBJdGVyYXRvciBQYXR0ZXJuIHRvIGl0ZXJhdGUgdGhyb3VnaCBhcnJheXMgYXMgbXVjaCBhcyBpdCBuZWVkZWQgYW5kIGltcGxlbWVudCBzb21lIGxvZ2ljXG4gIGZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBhcnJheSkge1xuICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiAoKSA9PiBuZXh0SW5kZXggPCBhcnJheS5sZW5ndGggP1xuICAgICAgICB7XG4gICAgICAgICAgYWRkOiAobmFtZSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgYXJyYXlbbmV4dEluZGV4KytdKSxcbiAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9IDpcbiAgICAgICAgeyBkb25lOiB0cnVlIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuXG4gICAgYWRkQmxvY2s6IChjb250ZW50LCBwbGFjZSwgY2xhc3NBdHRyKSA9PiB7XG4gICAgICBjb25zdCBuZXdCbG9jayA9IF9jcmVhdGUuZGl2KCk7XG4gICAgICBjb25zdCBhdHRyTmFtZXMgPSBbJ2NsYXNzJ107XG4gICAgICBjb25zdCBhdHRyVmFsdWVzID0gW2NsYXNzQXR0cl07XG4gICAgICBhdHRyTmFtZXMuZm9yRWFjaChhdHRyTmFtZSA9PiB7XG4gICAgICAgIGFkZEF0dHJpYnV0ZShuZXdCbG9jaywgYXR0clZhbHVlcykubmV4dCgpLmFkZChhdHRyTmFtZSk7XG4gICAgICB9KTtcbiAgICAgIG5ld0Jsb2NrLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdCbG9jayk7XG4gICAgfSxcblxuICAgIGFkZExpbms6ICh1cmwsIHRleHQsIHBsYWNlKSA9PiB7XG4gICAgICBjb25zdCBuZXdMaW5rID0gX2NyZWF0ZS5hKCk7XG4gICAgICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgICBuZXdMaW5rLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdMaW5rKTtcbiAgICB9LFxuXG4gICAgYWRkSW1hZ2U6ICh1cmwsIGFsdCwgY2xhc3NBdHRyLCBwbGFjZSkgPT4ge1xuICAgICAgY29uc3QgbmV3SW1nID0gX2NyZWF0ZS5pbWcoKTtcbiAgICAgIGNvbnN0IGF0dHJOYW1lcyA9IFsnc3JjJywgJ2FsdCcsICdjbGFzcyddO1xuICAgICAgY29uc3QgYXR0clZhbHVlcyA9IFt1cmwsIGFsdCwgY2xhc3NBdHRyXTtcbiAgICAgIGF0dHJOYW1lcy5mb3JFYWNoKGF0dHJOYW1lID0+IHtcbiAgICAgICAgYWRkQXR0cmlidXRlKG5ld0ltZywgYXR0clZhbHVlcykubmV4dCgpLmFkZChhdHRyTmFtZSk7XG4gICAgICB9KTtcbiAgICAgIG5ld0ltZy5pbm5lckhUTUw7XG4gICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdJbWcpO1xuICAgIH0sXG5cbiAgICBhZGRCdXR0b246ICh0eXBlQXR0ciwgaWRWYWx1ZSwgY2FwdGlvbiwgcGxhY2UpID0+IHtcbiAgICAgIGNvbnN0IG5ld0J1dHRvbiA9IF9jcmVhdGUuYnV0dG9uKCk7XG4gICAgICBuZXdCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZUF0dHIpO1xuICAgICAgbmV3QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCBpZFZhbHVlKTtcbiAgICAgIG5ld0J1dHRvbi5pbm5lckhUTUwgPSBjYXB0aW9uO1xuICAgICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3QnV0dG9uKTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvRE9NTWFuaXB1bGF0aW9uLnV0aWxpdHkuanMiLCJpbXBvcnQgZGF0YVNvdXJjZSBmcm9tICcuL2FwcC5jb25maWcuanNvbic7XG5pbXBvcnQgYXBpQ2FsbHMgZnJvbSAnLi9hcGlDYWxscy5qcyc7XG5cbmNvbnN0IGFwcCA9ICggKCkgPT4ge1xuXG4gIGNvbnN0IHVybCA9IGRhdGFTb3VyY2UudXJsICsgXCJzb3VyY2U9XCIgKyBkYXRhU291cmNlLm5ld3NTb3VyY2UgKyBcIiZhcGlLZXk9XCIgKyBkYXRhU291cmNlLmFwaUtleTtcbiAgY29uc3QgdXJsTGluayA9IGRhdGFTb3VyY2UudXJsTGluaztcbiAgY29uc3QgbmV3c1NvdXJjZSA9IGRhdGFTb3VyY2UubmV3c1NvdXJjZTtcblxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgYXBpQ2FsbHMuY3JlYXRlSGVhZGVyKGpzb24pO1xuICAgICAgYXBpQ2FsbHMuY3JlYXRlQXJ0aWNsZXMoanNvbik7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJVbmV4cGVjdGVkIGVycm9yOiBcIiArIGVycm9yKSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2FwcC5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFwaUtleVwiOiBcIjJmNDliOWY4YjNmYzQ3NDg4OGU5ZjAyNTc1ZTRjZGQ2XCIsXG5cdFwibmV3c1NvdXJjZVwiOiBcImJiYy1uZXdzXCIsXG5cdFwidXJsXCI6IFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92MS9hcnRpY2xlcz9cIixcblx0XCJ1cmxMaW5rXCI6IFwiaHR0cDovL25ld3NhcGkub3JnXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3JpcHRzL2FwcC5jb25maWcuanNvblxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzIGZyb20gJy4vRE9NTWFuaXB1bGF0aW9uLnV0aWxpdHkuanMnO1xuaW1wb3J0IGRhdGFTb3VyY2UgZnJvbSAnLi9hcHAuY29uZmlnLmpzb24nO1xuXG5jb25zdCBhcGlDYWxscyA9ICgoKSA9PiB7XG5cbiAgY29uc3QgdXJsID0gZGF0YVNvdXJjZS51cmwgKyBcInNvdXJjZT1cIiArIGRhdGFTb3VyY2UubmV3c1NvdXJjZSArIFwiJmFwaUtleT1cIiArIGRhdGFTb3VyY2UuYXBpS2V5O1xuICBjb25zdCB1cmxMaW5rID0gZGF0YVNvdXJjZS51cmxMaW5rO1xuICBjb25zdCBuZXdzU291cmNlID0gZGF0YVNvdXJjZS5uZXdzU291cmNlO1xuICBjb25zdCBuZXdzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICBjb25zdCBuZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIGNvbnN0IGRvbSA9IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcbiAgY29uc3QgbmV3c1NvdXJjZVRleHQgPSAnTmV3cyBwb3dlcmVkIGJ5OiBOZXdzIEFQSSc7XG5cblxuICByZXR1cm4ge1xuXG4gICAgY3JlYXRlSGVhZGVyOiAoanNvbikgPT4ge1xuICAgICAgY29uc3QgaGVhZGVyU291cmNlID0ganNvbi5zb3VyY2UudG9VcHBlckNhc2UoKTtcbiAgICAgIGRvbS5hZGRCbG9jayhoZWFkZXJTb3VyY2UsIG5ld3NIZWFkZXIpO1xuICAgICAgZG9tLmFkZExpbmsodXJsTGluaywgbmV3c1NvdXJjZVRleHQsIG5ld3NIZWFkZXIpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVBcnRpY2xlczogKGpzb24pID0+IHtcbiAgICAgIGpzb24uYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcblxuICAgICAgICBjb25zdCBuZXdzQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdzQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FydGljbGUnKTtcbiAgICAgICAgY29uc3QgYXJ0S2V5cyA9IE9iamVjdC5rZXlzKGFydGljbGUpO1xuXG4gICAgICAgIGFydEtleXMuc2xpY2UoMCwgMykuZm9yRWFjaChrZXkgPT4gZG9tLmFkZEJsb2NrKGFydGljbGVba2V5XSwgbmV3c0FydGljbGUpKTtcblxuICAgICAgICBjb25zdCBhbHQgPSBhcnRpY2xlLnRpdGxlO1xuICAgICAgICBjb25zdCB1cmxUb0ltZyA9IGFydGljbGUudXJsVG9JbWFnZTtcbiAgICAgICAgY29uc3QgaW1nQ2xhc3MgPSAnaW1hZ2UnXG4gICAgICAgIGRvbS5hZGRJbWFnZSh1cmxUb0ltZywgYWx0LCBpbWdDbGFzcywgbmV3c0FydGljbGUpO1xuXG4gICAgICAgIGNvbnN0IHJlYWRNb3JlID0gJ1JlYWQgbW9yZS4uLic7XG4gICAgICAgIGRvbS5hZGRMaW5rKGFydGljbGUudXJsLCByZWFkTW9yZSwgbmV3c0FydGljbGUpO1xuXG4gICAgICAgIG5ld3NCbG9jay5hcHBlbmRDaGlsZChuZXdzQXJ0aWNsZSk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpQ2FsbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2FwaUNhbGxzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBREVBO0FDQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QURDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQURBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJDQTtBQXVDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FFakVBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FGQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUdqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBSkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBNkJBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9