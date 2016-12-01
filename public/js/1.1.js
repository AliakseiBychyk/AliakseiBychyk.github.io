webpackJsonp_name_([1,2],{

/***/ 2:
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS4xLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLz9kNDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBET01NYW5pcHVsYXRpb25VdGlsaXRpZXMgZnJvbSAnLi9ET01NYW5pcHVsYXRpb25VdGlsaXRpZXMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwKCkge1xuXG4gIGNvbnN0IGFwaUtleSA9ICcyZjQ5YjlmOGIzZmM0NzQ4ODhlOWYwMjU3NWU0Y2RkNic7XG4gIGNvbnN0IG5ld3NTb3VyY2UgPSAnYmJjLW5ld3MnO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92MS9hcnRpY2xlcz9zb3VyY2U9JHtuZXdzU291cmNlfSZhcGlLZXk9JHthcGlLZXl9YDtcbiAgY29uc3QgdXJsTGluayA9ICdodHRwOi8vbmV3c2FwaS5vcmcnO1xuXG4gIGFsZXJ0KCdhcHAgaXMgY2FsbGVkJyk7XG5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcblxuICAgICAgY29uc3QgbmV3c0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXInKTtcbiAgICAgIGNvbnN0IG5ld3NCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgIGNvbnN0IGRvbSA9IERPTU1hbmlwdWxhdGlvblV0aWxpdGllcztcblxuICAgICAgY29uc3QgaGVhZGVyU291cmNlID0ganNvbi5zb3VyY2UudG9VcHBlckNhc2UoKTtcbiAgICAgIGRvbS5hZGRFbGVtZW50KGhlYWRlclNvdXJjZSwgbmV3c0hlYWRlcik7XG5cbiAgICAgIGNvbnN0IG5ld3NTb3VyY2VUZXh0ID0gJ05ld3MgcG93ZXJlZCBieTogTmV3cyBBUEknO1xuICAgICAgZG9tLmFkZExpbmsodXJsTGluaywgbmV3c1NvdXJjZVRleHQsIG5ld3NIZWFkZXIpO1xuXG4gICAgICBqc29uLmFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XG5cbiAgICAgICAgY29uc3QgbmV3c0FydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3c0FydGljbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhcnRpY2xlJyk7XG4gICAgICAgIGNvbnN0IGFydEtleXMgPSBPYmplY3Qua2V5cyhhcnRpY2xlKTtcblxuICAgICAgICBhcnRLZXlzLnNsaWNlKDAsIDMpLmZvckVhY2goa2V5ID0+IGRvbS5hZGRFbGVtZW50KGFydGljbGVba2V5XSwgbmV3c0FydGljbGUpKTtcblxuICAgICAgICBjb25zdCBhbHQgPSBhcnRpY2xlLnRpdGxlO1xuICAgICAgICBjb25zdCB1cmxUb0ltZyA9IGFydGljbGUudXJsVG9JbWFnZTtcbiAgICAgICAgY29uc3QgaW1nQ2xhc3MgPSAnaW1hZ2UnXG4gICAgICAgIGRvbS5hZGRJbWFnZSh1cmxUb0ltZywgYWx0LCBpbWdDbGFzcywgbmV3c0FydGljbGUpO1xuXG4gICAgICAgIGNvbnN0IHJlYWRNb3JlID0gJ1JlYWQgbW9yZS4uLic7XG4gICAgICAgIGRvbS5hZGRMaW5rKGFydGljbGUudXJsLCByZWFkTW9yZSwgbmV3c0FydGljbGUpO1xuXG4gICAgICAgIG5ld3NCbG9jay5hcHBlbmRDaGlsZChuZXdzQXJ0aWNsZSk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIlVuZXhwZWN0ZWQgZXJyb3I6IFwiICsgZXJyb3IpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zY3JpcHRzL2FwcC5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBSEE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9