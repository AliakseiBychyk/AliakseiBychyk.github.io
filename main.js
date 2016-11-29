var home =
webpackJsonphome([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _newsMethods = __webpack_require__(1);

	var _newsMethods2 = _interopRequireDefault(_newsMethods);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
	var newsSource = 'bbc-news';
	var url = 'https://newsapi.org/v1/articles?source=' + newsSource + '&apiKey=' + apiKey;
	var urlLink = 'http://newsapi.org';

	var newsHeader = document.querySelector('#header');
	var newsBlock = document.querySelector('main');

	fetch(url).then(function (response) {
	  return response.json();
	}).then(function (json) {

	  var headerSource = json.source.toUpperCase();
	  _newsMethods2.default.addElement(headerSource, newsHeader);

	  var newsSourceText = 'News powered by: News API';
	  _newsMethods2.default.addLink(urlLink, newsSourceText, newsHeader);

	  json.articles.forEach(function (article) {

	    var newsArticle = document.createElement('div');
	    newsArticle.setAttribute('class', 'article');
	    var artKeys = Object.keys(article);

	    artKeys.slice(0, 3).forEach(function (key) {
	      return _newsMethods2.default.addElement(article[key], newsArticle);
	    });

	    var alt = article.title;
	    var urlToImg = article.urlToImage;
	    var imgClass = 'image';
	    _newsMethods2.default.addImage(urlToImg, alt, imgClass, newsArticle);

	    var readMore = 'Read more...';
	    _newsMethods2.default.addLink(article.url, readMore, newsArticle);

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
	var newsMethods = {

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

		exports.default = newsMethods;

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9uZXdzTWV0aG9kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV3c01ldGhvZHMgZnJvbSAnLi9uZXdzTWV0aG9kcy5qcyc7XG5cbmNvbnN0IGFwaUtleSA9ICcyZjQ5YjlmOGIzZmM0NzQ4ODhlOWYwMjU3NWU0Y2RkNic7XG5jb25zdCBuZXdzU291cmNlID0gJ2JiYy1uZXdzJztcbmNvbnN0IHVybCA9IGBodHRwczovL25ld3NhcGkub3JnL3YxL2FydGljbGVzP3NvdXJjZT0ke25ld3NTb3VyY2V9JmFwaUtleT0ke2FwaUtleX1gO1xuY29uc3QgdXJsTGluayA9ICdodHRwOi8vbmV3c2FwaS5vcmcnO1xuXG5cbmNvbnN0IG5ld3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyJyk7XG5jb25zdCBuZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmZldGNoKHVybClcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihqc29uID0+IHtcblxuICAgIGNvbnN0IGhlYWRlclNvdXJjZSA9IGpzb24uc291cmNlLnRvVXBwZXJDYXNlKCk7XG4gICAgbmV3c01ldGhvZHMuYWRkRWxlbWVudChoZWFkZXJTb3VyY2UsIG5ld3NIZWFkZXIpO1xuXG4gICAgY29uc3QgbmV3c1NvdXJjZVRleHQgPSAnTmV3cyBwb3dlcmVkIGJ5OiBOZXdzIEFQSSc7XG4gICAgbmV3c01ldGhvZHMuYWRkTGluayh1cmxMaW5rLCBuZXdzU291cmNlVGV4dCwgbmV3c0hlYWRlcik7XG5cbiAgICBqc29uLmFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG5cbiAgICAgIGNvbnN0IG5ld3NBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZXdzQXJ0aWNsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FydGljbGUnKTtcbiAgICAgIGNvbnN0IGFydEtleXMgPSBPYmplY3Qua2V5cyhhcnRpY2xlKTtcblxuICAgICAgYXJ0S2V5cy5zbGljZSgwLCAzKS5mb3JFYWNoKGtleSA9PiBuZXdzTWV0aG9kcy5hZGRFbGVtZW50KGFydGljbGVba2V5XSwgbmV3c0FydGljbGUpKTtcblxuICAgICAgY29uc3QgYWx0ID0gYXJ0aWNsZS50aXRsZTtcbiAgICAgIGNvbnN0IHVybFRvSW1nID0gYXJ0aWNsZS51cmxUb0ltYWdlO1xuICAgICAgY29uc3QgaW1nQ2xhc3MgPSAnaW1hZ2UnXG4gICAgICBuZXdzTWV0aG9kcy5hZGRJbWFnZSh1cmxUb0ltZywgYWx0LCBpbWdDbGFzcywgbmV3c0FydGljbGUpO1xuXG4gICAgICBjb25zdCByZWFkTW9yZSA9ICdSZWFkIG1vcmUuLi4nO1xuICAgICAgbmV3c01ldGhvZHMuYWRkTGluayhhcnRpY2xlLnVybCwgcmVhZE1vcmUsIG5ld3NBcnRpY2xlKTtcblxuICAgICAgbmV3c0Jsb2NrLmFwcGVuZENoaWxkKG5ld3NBcnRpY2xlKTtcbiAgICB9KTtcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2FwcC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCJjb25zdCBuZXdzTWV0aG9kcyA9IHtcblxuICBhZGRFbGVtZW50OiBmdW5jdGlvbiAoY29udGVudCwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICB9LFxuXG4gIGFkZExpbms6IGZ1bmN0aW9uICh1cmwsIHRleHQsIHBsYWNlKSB7XG4gICAgY29uc3QgbmV3TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgbmV3TGluay5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHBsYWNlLmFwcGVuZENoaWxkKG5ld0xpbmspO1xuICB9LFxuXG4gIGFkZEltYWdlOiBmdW5jdGlvbiAodXJsLCBhbHQsIGNsYXNzQXR0ciwgcGxhY2UpIHtcbiAgICBjb25zdCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc0F0dHIpO1xuICAgIG5ld0ltZy5pbm5lckhUTUw7XG4gICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3SW1nKTtcbiAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdzTWV0aG9kcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NjcmlwdHMvbmV3c01ldGhvZHMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUNDQTtBRENBO0FBQ0E7QUNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBRENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQUNBO0FBeUJBOzs7Iiwic291cmNlUm9vdCI6IiJ9