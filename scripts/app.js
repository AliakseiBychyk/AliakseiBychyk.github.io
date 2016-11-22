const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`;
const urlLink = 'http://newsapi.org';


const newsHeader = document.querySelector('header');
const newsList = document.querySelector('ul');

fetch(url)
  .then(response => response.json())
  .then (json => {

    const news = new newsDAO(json);
    
    news.addHeaderSource(newsHeader);

    const newsSourceText = 'News powered by: News API';
    news.addLinkToList(urlLink, newsHeader, newsSourceText);

    json.articles.forEach(article => {
      const listArticle = document.createElement('li');
      const artKeys = Object.keys(article);
      
      artKeys.slice(0, 3).forEach(key => news.addElementToList(article[key], listArticle));

      const alt = article.title;
      const urlToImg = article.urlToImage;
      news.addImageToList(urlToImg, alt, listArticle);

      artKeys.slice(3).forEach(key => news.addElementToList(article[key], listArticle));

      const readMore = 'Read more...';        
      news.addLinkToList(article.url, listArticle, readMore);   
      
      newsList.appendChild(listArticle);
    });
  })  
  .catch(error => console.log(error));


function newsDAO(json) {

  this.json = json;

  this.addHeaderSource = function(header) {
    const newsHeaderText = document.createElement('h1');
    newsHeaderText.innerHTML = json.source.toUpperCase();
    header.appendChild(newsHeaderText);
  };

  this.addLinkToList = function(x, list, text) {
    const newLink = document.createElement('a');
    newLink.setAttribute('class', 'links');
    newLink.setAttribute('href', x);
    newLink.innerHTML = text;
    list.appendChild(newLink);
  };

  this.addElementToList = function(x, list) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = x;
    list.appendChild(newDiv);
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

