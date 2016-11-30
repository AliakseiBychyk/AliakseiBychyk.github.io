var home =
webpackJsonphome([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _DOMManipulationUtilities = __webpack_require__(1);

	var _DOMManipulationUtilities2 = _interopRequireDefault(_DOMManipulationUtilities);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	  }

	};

		exports.default = DOMManipulationUtilities;

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IGFwaUtleSA9ICcyZjQ5YjlmOGIzZmM0NzQ4ODhlOWYwMjU3NWU0Y2RkNic7XG5jb25zdCBuZXdzU291cmNlID0gJ2JiYy1uZXdzJztcbmNvbnN0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT0ke25ld3NTb3VyY2V9JmFwaUtleT0ke2FwaUtleX1gO1xuY29uc3QgdXJsTGluayA9ICdodHRwOi8vbmV3c2FwaS5vcmcnO1xuXG5mZXRjaCh1cmwpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oanNvbiA9PiB7XG5cbiAgICBjb25zdCBuZXdzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIGNvbnN0IG5ld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbiAgICBjb25zdCBoZWFkZXJTb3VyY2UgPSBqc29uLnNvdXJjZS50b1VwcGVyQ2FzZSgpO1xuICAgIGRvbS5hZGRFbGVtZW50KGhlYWRlclNvdXJjZSwgbmV3c0hlYWRlcik7XG5cbiAgICBjb25zdCBuZXdzU291cmNlVGV4dCA9ICdOZXdzIHBvd2VyZWQgYnk6IE5ld3MgQVBJJztcbiAgICBkb20uYWRkTGluayh1cmxMaW5rLCBuZXdzU291cmNlVGV4dCwgbmV3c0hlYWRlcik7XG5cbiAgICBqc29uLmFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG5cbiAgICAgIGNvbnN0IG5ld3NBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZXdzQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FydGljbGUnKTtcbiAgICAgIGNvbnN0IGFydEtleXMgPSBPYmplY3Qua2V5cyhhcnRpY2xlKTtcblxuICAgICAgYXJ0S2V5cy5zbGljZSgwLCAzKS5mb3JFYWNoKGtleSA9PiBkb20uYWRkRWxlbWVudChhcnRpY2xlW2tleV0sIG5ld3NBcnRpY2xlKSk7XG5cbiAgICAgIGNvbnN0IGFsdCA9IGFydGljbGUudGl0bGU7XG4gICAgICBjb25zdCB1cmxUb0ltZyA9IGFydGljbGUudXJsVG9JbWFnZTtcbiAgICAgIGNvbnN0IGltZ0NsYXNzID0gJ2ltYWdlJ1xuICAgICAgZG9tLmFkZEltYWdlKHVybFRvSW1nLCBhbHQsIGltZ0NsYXNzLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgIGNvbnN0IHJlYWRNb3JlID0gJ1JlYWQgbW9yZS4uLic7XG4gICAgICBkb20uYWRkTGluayhhcnRpY2xlLnVybCwgcmVhZE1vcmUsIG5ld3NBcnRpY2xlKTtcblxuICAgICAgbmV3c0Jsb2NrLmFwcGVuZENoaWxkKG5ld3NBcnRpY2xlKTtcbiAgICB9KTtcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiVW5leHBlY3RlZCBlcnJvcjogXCIgKyBlcnJvcikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9hcHAuanMiLCJ1bmRlZmluZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gIiwiY29uc3QgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzID0ge1xuXG4gIGFkZEVsZW1lbnQ6IGZ1bmN0aW9uIChjb250ZW50LCBwbGFjZSkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gIH0sXG5cbiAgYWRkTGluazogZnVuY3Rpb24gKHVybCwgdGV4dCwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICBuZXdMaW5rLmlubmVySFRNTCA9IHRleHQ7XG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3TGluayk7XG4gIH0sXG5cbiAgYWRkSW1hZ2U6IGZ1bmN0aW9uICh1cmwsIGFsdCwgY2xhc3NBdHRyLCBwbGFjZSkge1xuICAgIGNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzQXR0cik7XG4gICAgbmV3SW1nLmlubmVySFRNTDtcbiAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdJbWcpO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FDQ0E7QURDQTtBQUNBO0FDQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBRENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQUNBO0FBeUJBOzs7Iiwic291cmNlUm9vdCI6IiJ9