
const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`;

const newsHeader = document.querySelector('header');
const newsList = document.querySelector('ul');

fetch(url)
  .then(response => response.json()
    .then (json => {
      newsHeaderText = document.createElement('h1');
      newsHeaderText.innerHTML = json.source.toUpperCase();
      newsHeader.appendChild(newsHeaderText);

      for (i = 0; i < json.articles.length; i++) {
          
          let listArticle = document.createElement('li');
        
          let article = {} = json.articles[i];
          //let artKeys = Object.keys(article); 
          // artKeys.forEach(addElementToList(item, article[item], listArticle));                 
          for (let key in article) {
              addElementToList(key, article[key], listArticle);         
          }   
          addLinkToList(article.url, listArticle);

          newsList.appendChild(listArticle);
      }
    })  
  )
  .catch(error => console.log(error));


var addElementToList = (x, y, list) => {
  let newDiv = document.createElement('div');
  newDiv.innerHTML = x + ": " + y;
  list.appendChild(newDiv);
};

var addLinkToList = (x, list) => {
  let newLink = document.createElement('a');
  newLink.setAttribute('href', x);
  newLink.innerHTML = 'Read more...';
  list.appendChild(newLink);
};
