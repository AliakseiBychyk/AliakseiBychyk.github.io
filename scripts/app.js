const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`;
const urlLink = 'http://newsapi.org';

const news = new newsDAO();
const newsHeader = document.querySelector('header');
const newsList = document.querySelector('ul');

fetch(url)
  .then(response => response.json())
  .then (json => {

    news.addHeaderSource(json.source, newsHeader);

    const newsSourceText = 'News powered by: News API';
    news.addLinkToList(urlLink, newsHeader, newsSourceText);

    json.articles.forEach(article => {
      const listArticle = document.createElement('li');
      const artKeys = Object.keys(article);
      
      artKeys.forEach(key => news.addElementToList(key, article[key], listArticle));

      const alt = article.title;
      const urlToImg = article.urlToImage;
      news.addImageToList(urlToImg, alt, listArticle);

      const readMore = 'Read more...';        
      news.addLinkToList(article.url, listArticle, readMore);   
      
      newsList.appendChild(listArticle);
    });
  })  
  .catch(error => console.log(error));


function newsDAO() {

  this.addHeaderSource = function(source, header) {
    const newsHeaderText = document.createElement('h1');
    newsHeaderText.innerHTML = source.toUpperCase();
    header.appendChild(newsHeaderText);
  };

  this.addElementToList = function(x, y, list) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = x + ": " + y;
    list.appendChild(newDiv);
  };

  this.addLinkToList = function(x, list, text) {
    const newLink = document.createElement('a');
    newLink.setAttribute('class', 'links');
    newLink.setAttribute('href', x);
    newLink.innerHTML = text;
    list.appendChild(newLink);
  };

  this.addImageToList = function(image, alt, list) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', alt);
    newImage.setAttribute('class', 'imgClass');
    newImage.innerHTML;
    list.appendChild(newImage);
  };
};

