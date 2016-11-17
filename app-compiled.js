'use strict';

var apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
var url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=' + apiKey;
var urlLink = 'http://newsapi.org';

var newsHeader = document.querySelector('header');
var newsList = document.querySelector('ul');

fetch(url).then(function (response) {
  return response.json();
}).then(function (json) {
  var newsHeaderText = document.createElement('h1');
  newsHeaderText.innerHTML = json.source.toUpperCase();
  newsHeader.appendChild(newsHeaderText);

  var newsSourceText = 'News powered by: News API';
  addLinkToList(urlLink, newsHeader, newsSourceText);

  json.articles.forEach(function (article) {
    var listArticle = document.createElement('li');
    var artKeys = Object.keys(article);

    artKeys.forEach(function (key) {
      return addElementToList(key, article[key], listArticle);
    });

    var readMore = 'Read more...';
    addLinkToList(article.url, listArticle, readMore);
    newsList.appendChild(listArticle);
  });
}).catch(function (error) {
  return console.log(error);
});

function addElementToList(x, y, list) {
  var newDiv = document.createElement('div');
  newDiv.innerHTML = x + ": " + y;
  list.appendChild(newDiv);
};

function addLinkToList(x, list, text) {
  var newLink = document.createElement('a');
  newLink.setAttribute('href', x);
  newLink.innerHTML = text;
  list.appendChild(newLink);
};
