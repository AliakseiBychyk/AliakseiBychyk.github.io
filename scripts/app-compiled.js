'use strict';

var apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
var newsSource = 'bbc-news';
var url = 'https://newsapi.org/v1/articles?source=' + newsSource + '&apiKey=' + apiKey;
var urlLink = 'http://newsapi.org';

var newsHeader = document.querySelector('#header');
var newsBlock = document.querySelector('main');

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

fetch(url).then(function (response) {
  return response.json();
}).then(function (json) {

  var headerSource = json.source.toUpperCase();
  newsMethods.addElement(headerSource, newsHeader);

  var newsSourceText = 'News powered by: News API';
  newsMethods.addLink(urlLink, newsSourceText, newsHeader);

  json.articles.forEach(function (article) {

    var newsArticle = document.createElement('div');
    newsArticle.setAttribute('class', 'article');
    var artKeys = Object.keys(article);

    artKeys.slice(0, 3).forEach(function (key) {
      return newsMethods.addElement(article[key], newsArticle);
    });

    var alt = article.title;
    var urlToImg = article.urlToImage;
    var imgClass = 'image';
    newsMethods.addImage(urlToImg, alt, imgClass, newsArticle);

    var readMore = 'Read more...';
    newsMethods.addLink(article.url, readMore, newsArticle);

    newsBlock.appendChild(newsArticle);
  });
}).catch(function (error) {
  return console.log(error);
});
