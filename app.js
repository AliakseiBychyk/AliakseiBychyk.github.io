
const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`;

var newsHeader = document.querySelector('header');
var newsList = document.querySelector('ul');

fetch(url)
  .then(response => response.json()
    .then (json => {
      newsHeaderText = document.createElement('h1');
      newsHeaderText.innerHTML = json.source.toUpperCase();
      newsHeader.appendChild(newsHeaderText);
      
      for (i = 0; i < json.articles.length; i++) {
          
          var listArticle = document.createElement('li');

          for (var prop in json.articles[i]) {
            var newDiv = document.createElement('div');
            newDiv.innerHTML = json.articles[i][prop];
            listArticle.appendChild(newDiv); 
          }
          newsList.appendChild(listArticle);
      }
    })  
  )
  .catch(error => console.log(error));
