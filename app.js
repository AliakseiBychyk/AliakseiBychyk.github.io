
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
      
      //const data = {} = json; //it destructures json

      for (i = 0; i < json.articles.length; i++) {
          
          let listArticle = document.createElement('li');

          //let artKeys = Object.keys(json.articles[i]); //it gives me an array of keys 

          for (let prop in json.articles[i]) {
            var newDiv = document.createElement('div');
            newDiv.innerHTML = `${prop}: ` + json.articles[i][prop];
            listArticle.appendChild(newDiv); 
          }
          newsList.appendChild(listArticle);
      }
    })  
  )
  .catch(error => console.log(error));
