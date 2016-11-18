const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`;
const urlLink = 'http://newsapi.org';

const newsHeader = document.querySelector('header');
const newsList = document.querySelector('ul');

fetch(url)
  .then(response => response.json())
  .then (json => {
    const newsHeaderText = document.createElement('h1');
    newsHeaderText.innerHTML = json.source.toUpperCase();
    newsHeader.appendChild(newsHeaderText);

    const newsSourceText = 'News powered by: News API';
    addLinkToList(urlLink, newsHeader, newsSourceText);

    json.articles.forEach(article => {
      const listArticle = document.createElement('li');
      const artKeys = Object.keys(article);
      
      artKeys.forEach(key => addElementToList(key, article[key], listArticle));

      const readMore = 'Read more...';        
      addLinkToList(article.url, listArticle, readMore);
      newsList.appendChild(listArticle);
    });
  })  
  .catch(error => console.log(error));

function addElementToList(x, y, list) {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = x + ": " + y;
  list.appendChild(newDiv);
};

function addLinkToList(x, list, text) {
  const newLink = document.createElement('a');
  newLink.setAttribute('href', x);
  newLink.innerHTML = text;
  list.appendChild(newLink);
};