'use strict';

var apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
var url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=' + apiKey;
var urlLink = 'http://newsapi.org';

var newsHeader = document.querySelector('header');
var newsList = document.querySelector('ul');

var newsDAO = {
  addHeaderSource: function addHeaderSource(source, header) {
    var newsHeaderText = document.createElement('h1');
    newsHeaderText.innerHTML = source.toUpperCase();
    header.appendChild(newsHeaderText);
  },
  addLinkToList: function addLinkToList(x, list, text) {
    var newLink = document.createElement('a');
    newLink.setAttribute('class', 'links');
    newLink.setAttribute('href', x);
    newLink.innerHTML = text;
    list.appendChild(newLink);
  },
  addElementToList: function addElementToList(x, list) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = x;
    list.appendChild(newDiv);
  },
  addImageToList: function addImageToList(image, alt, list) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', alt);
    newImage.setAttribute('class', 'imgClass');
    newImage.innerHTML;
    list.appendChild(newImage);
  }
};

fetch(url).then(function (response) {
  return response.json();
}).then(function (json) {

  var headerSource = json.source;
  newsDAO.addHeaderSource(headerSource, newsHeader);

  var newsSourceText = 'News powered by: News API';
  newsDAO.addLinkToList(urlLink, newsHeader, newsSourceText);

  json.articles.forEach(function (article) {
    var listArticle = document.createElement('li');
    var artKeys = Object.keys(article);

    artKeys.slice(0, 3).forEach(function (key) {
      return newsDAO.addElementToList(article[key], listArticle);
    });

    var alt = article.title;
    var urlToImg = article.urlToImage;
    newsDAO.addImageToList(urlToImg, alt, listArticle);

    artKeys.slice(3).forEach(function (key) {
      return newsDAO.addElementToList(article[key], listArticle);
    });

    var readMore = 'Read more...';
    newsDAO.addLinkToList(article.url, listArticle, readMore);

    newsList.appendChild(listArticle);
  });
}).catch(function (error) {
  return console.log(error);
});
