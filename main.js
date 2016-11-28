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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9uZXdzTWV0aG9kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV3c01ldGhvZHMgZnJvbSAnLi9uZXdzTWV0aG9kcy5qcyc7XHJcblxyXG5jb25zdCBhcGlLZXkgPSAnMmY0OWI5ZjhiM2ZjNDc0ODg4ZTlmMDI1NzVlNGNkZDYnO1xyXG5jb25zdCBuZXdzU291cmNlID0gJ2JiYy1uZXdzJztcclxuY29uc3QgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjEvYXJ0aWNsZXM/c291cmNlPSR7bmV3c1NvdXJjZX0mYXBpS2V5PSR7YXBpS2V5fWA7XHJcbmNvbnN0IHVybExpbmsgPSAnaHR0cDovL25ld3NhcGkub3JnJztcclxuXHJcblxyXG5jb25zdCBuZXdzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xyXG5jb25zdCBuZXdzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG5mZXRjaCh1cmwpXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC50aGVuKGpzb24gPT4ge1xyXG5cclxuICAgIGNvbnN0IGhlYWRlclNvdXJjZSA9IGpzb24uc291cmNlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBuZXdzTWV0aG9kcy5hZGRFbGVtZW50KGhlYWRlclNvdXJjZSwgbmV3c0hlYWRlcik7IFxyXG5cclxuICAgIGNvbnN0IG5ld3NTb3VyY2VUZXh0ID0gJ05ld3MgcG93ZXJlZCBieTogTmV3cyBBUEknO1xyXG4gICAgbmV3c01ldGhvZHMuYWRkTGluayh1cmxMaW5rLCBuZXdzU291cmNlVGV4dCwgbmV3c0hlYWRlcik7XHJcblxyXG4gICAganNvbi5hcnRpY2xlcy5mb3JFYWNoKGFydGljbGUgPT4ge1xyXG5cclxuICAgICAgY29uc3QgbmV3c0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbmV3c0FydGljbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnRpY2xlJyk7XHJcbiAgICAgIGNvbnN0IGFydEtleXMgPSBPYmplY3Qua2V5cyhhcnRpY2xlKTtcclxuXHJcbiAgICAgIGFydEtleXMuc2xpY2UoMCwgMykuZm9yRWFjaChrZXkgPT4gbmV3c01ldGhvZHMuYWRkRWxlbWVudChhcnRpY2xlW2tleV0sIG5ld3NBcnRpY2xlKSk7XHJcblxyXG4gICAgICBjb25zdCBhbHQgPSBhcnRpY2xlLnRpdGxlO1xyXG4gICAgICBjb25zdCB1cmxUb0ltZyA9IGFydGljbGUudXJsVG9JbWFnZTtcclxuICAgICAgY29uc3QgaW1nQ2xhc3MgPSAnaW1hZ2UnXHJcbiAgICAgIG5ld3NNZXRob2RzLmFkZEltYWdlKHVybFRvSW1nLCBhbHQsIGltZ0NsYXNzLCBuZXdzQXJ0aWNsZSk7XHJcblxyXG4gICAgICBjb25zdCByZWFkTW9yZSA9ICdSZWFkIG1vcmUuLi4nO1xyXG4gICAgICBuZXdzTWV0aG9kcy5hZGRMaW5rKGFydGljbGUudXJsLCByZWFkTW9yZSwgbmV3c0FydGljbGUpO1xyXG5cclxuICAgICAgbmV3c0Jsb2NrLmFwcGVuZENoaWxkKG5ld3NBcnRpY2xlKTtcclxuICAgIH0pO1xyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2FwcC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiLCJjb25zdCBuZXdzTWV0aG9kcyA9IHtcclxuXHJcbiAgICBhZGRFbGVtZW50OiBmdW5jdGlvbihjb250ZW50LCBwbGFjZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZExpbms6IGZ1bmN0aW9uKHVybCwgdGV4dCwgcGxhY2UpIHtcclxuICAgICAgICBjb25zdCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcclxuICAgICAgICBuZXdMaW5rLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICAgICAgcGxhY2UuYXBwZW5kQ2hpbGQobmV3TGluayk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZEltYWdlOiBmdW5jdGlvbih1cmwsIGFsdCwgY2xhc3NBdHRyLCBwbGFjZSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XHJcbiAgICAgICAgbmV3SW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcclxuICAgICAgICBuZXdJbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzQXR0cik7XHJcbiAgICAgICAgbmV3SW1nLmlubmVySFRNTDtcclxuICAgICAgICBwbGFjZS5hcHBlbmRDaGlsZChuZXdJbWcpO1xyXG4gICAgfVxyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3c01ldGhvZHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2NyaXB0cy9uZXdzTWV0aG9kcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQ0NBO0FEQ0E7QUFDQTtBQ0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FEQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBQ0E7QUF5QkE7OzsiLCJzb3VyY2VSb290IjoiIn0=