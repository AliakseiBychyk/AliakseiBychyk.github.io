'use strict';

var apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
var url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=' + apiKey;
var urlLink = 'http://newsapi.org';

var news = new newsDAO();
var newsHeader = document.querySelector('header');
var newsList = document.querySelector('ul');

fetch(url).then(function (response) {
  return response.json();
}).then(function (json) {

  news.addHeaderSource(json.source, newsHeader);

  var newsSourceText = 'News powered by: News API';
  news.addLinkToList(urlLink, newsHeader, newsSourceText);

  json.articles.forEach(function (article) {
    var listArticle = document.createElement('li');
    var artKeys = Object.keys(article);

    artKeys.forEach(function (key) {
      return news.addElementToList(key, article[key], listArticle);
    });

    var alt = article.title;
    var urlToImg = article.urlToImage;
    news.addImageToList(urlToImg, alt, listArticle);

    var readMore = 'Read more...';
    news.addLinkToList(article.url, listArticle, readMore);

    newsList.appendChild(listArticle);
  });
}).catch(function (error) {
  return console.log(error);
});

function newsDAO() {

  this.addHeaderSource = function (source, header) {
    var newsHeaderText = document.createElement('h1');
    newsHeaderText.innerHTML = source.toUpperCase();
    header.appendChild(newsHeaderText);
  };

  this.addElementToList = function (x, y, list) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = x + ": " + y;
    list.appendChild(newDiv);
  };

  this.addLinkToList = function (x, list, text) {
    var newLink = document.createElement('a');
    newLink.setAttribute('class', 'links');
    newLink.setAttribute('href', x);
    newLink.innerHTML = text;
    list.appendChild(newLink);
  };

  this.addImageToList = function (image, alt, list) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', alt);
    newImage.setAttribute('class', 'imgClass');
    newImage.innerHTML;
    list.appendChild(newImage);
  };
};
