'use strict';

var _newsMethods = require('./newsMethods.js');

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
