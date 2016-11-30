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
	  return console.log(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcyBmcm9tICcuL0RPTU1hbmlwdWxhdGlvblV0aWxpdGllcy5qcyc7XG5cbmNvbnN0IGFwaUtleSA9ICcyZjQ5YjlmOGIzZmM0NzQ4ODhlOWYwMjU3NWU0Y2RkNic7XG5jb25zdCBuZXdzU291cmNlID0gJ2JiYy1uZXdzJztcbmNvbnN0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT0ke25ld3NTb3VyY2V9JmFwaUtleT0ke2FwaUtleX1gO1xuY29uc3QgdXJsTGluayA9ICdodHRwOi8vbmV3c2FwaS5vcmcnO1xuXG5mZXRjaCh1cmwpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oanNvbiA9PiB7XG5cbiAgICBjb25zdCBuZXdzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIGNvbnN0IG5ld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBkb20gPSBET01NYW5pcHVsYXRpb25VdGlsaXRpZXM7XG5cbiAgICBjb25zdCBoZWFkZXJTb3VyY2UgPSBqc29uLnNvdXJjZS50b1VwcGVyQ2FzZSgpO1xuICAgIGRvbS5hZGRFbGVtZW50KGhlYWRlclNvdXJjZSwgbmV3c0hlYWRlcik7XG5cbiAgICBjb25zdCBuZXdzU291cmNlVGV4dCA9ICdOZXdzIHBvd2VyZWQgYnk6IE5ld3MgQVBJJztcbiAgICBkb20uYWRkTGluayh1cmxMaW5rLCBuZXdzU291cmNlVGV4dCwgbmV3c0hlYWRlcik7XG5cbiAgICBqc29uLmFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG5cbiAgICAgIGNvbnN0IG5ld3NBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZXdzQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FydGljbGUnKTtcbiAgICAgIGNvbnN0IGFydEtleXMgPSBPYmplY3Qua2V5cyhhcnRpY2xlKTtcblxuICAgICAgYXJ0S2V5cy5zbGljZSgwLCAzKS5mb3JFYWNoKGtleSA9PiBkb20uYWRkRWxlbWVudChhcnRpY2xlW2tleV0sIG5ld3NBcnRpY2xlKSk7XG5cbiAgICAgIGNvbnN0IGFsdCA9IGFydGljbGUudGl0bGU7XG4gICAgICBjb25zdCB1cmxUb0ltZyA9IGFydGljbGUudXJsVG9JbWFnZTtcbiAgICAgIGNvbnN0IGltZ0NsYXNzID0gJ2ltYWdlJ1xuICAgICAgZG9tLmFkZEltYWdlKHVybFRvSW1nLCBhbHQsIGltZ0NsYXNzLCBuZXdzQXJ0aWNsZSk7XG5cbiAgICAgIGNvbnN0IHJlYWRNb3JlID0gJ1JlYWQgbW9yZS4uLic7XG4gICAgICBkb20uYWRkTGluayhhcnRpY2xlLnVybCwgcmVhZE1vcmUsIG5ld3NBcnRpY2xlKTtcblxuICAgICAgbmV3c0Jsb2NrLmFwcGVuZENoaWxkKG5ld3NBcnRpY2xlKTtcbiAgICB9KTtcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2FwcC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCJjb25zdCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgPSB7XG5cbiAgYWRkRWxlbWVudDogZnVuY3Rpb24gKGNvbnRlbnQsIHBsYWNlKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgfSxcblxuICBhZGRMaW5rOiBmdW5jdGlvbiAodXJsLCB0ZXh0LCBwbGFjZSkge1xuICAgIGNvbnN0IG5ld0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgIG5ld0xpbmsuaW5uZXJIVE1MID0gdGV4dDtcbiAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdMaW5rKTtcbiAgfSxcblxuICBhZGRJbWFnZTogZnVuY3Rpb24gKHVybCwgYWx0LCBjbGFzc0F0dHIsIHBsYWNlKSB7XG4gICAgY29uc3QgbmV3SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NBdHRyKTtcbiAgICBuZXdJbWcuaW5uZXJIVE1MO1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0ltZyk7XG4gIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTWFuaXB1bGF0aW9uVXRpbGl0aWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUNDQTtBRENBO0FBQ0E7QUNDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FEQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBQ0E7QUF5QkE7OzsiLCJzb3VyY2VSb290IjoiIn0=