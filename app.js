
const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`;

const newsHeader = document.querySelector('header');
const newsList = document.querySelector('ul');

fetch(url)
  .then(response => response.json())
  .then (json => {
      newsHeaderText = document.createElement('h1');
      newsHeaderText.innerHTML = json.source.toUpperCase();
      newsHeader.appendChild(newsHeaderText);

      json.articles.forEach(article => {
        const listArticle = document.createElement('li');
        const artKeys = Object.keys(article);
       
       artKeys.forEach(key => {
         addElementToList(key, article[key], listArticle);
       });
       addLinkToList(article.url, listArticle);
       newsList.appendChild(listArticle);
     });
    })  
  .catch(error => console.log(error));


function addElementToList(x, y, list) {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = x + ": " + y;
  list.appendChild(newDiv);
};

function addLinkToList(x, list) {
  const newLink = document.createElement('a');
  newLink.setAttribute('href', x);
  newLink.innerHTML = 'Read more...';
  list.appendChild(newLink);
};
