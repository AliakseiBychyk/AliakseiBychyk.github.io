const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`;
const urlLink = 'http://newsapi.org';


const newsHeader = document.querySelector('header');
const newsList = document.querySelector('ul');

const newsDAO =  {
  addHeaderSource: function(source, header) {
    const newsHeaderText = document.createElement('h1');
    newsHeaderText.innerHTML = source.toUpperCase();
    header.appendChild(newsHeaderText);
  },
  addLinkToList: function(x, list, text) {
    const newLink = document.createElement('a');
    newLink.setAttribute('class', 'links');
    newLink.setAttribute('href', x);
    newLink.innerHTML = text;
    list.appendChild(newLink);
  },
  addElementToList: function(x, list) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = x;
    list.appendChild(newDiv);
  },
  addImageToList: function(image, alt, list) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', alt);
    newImage.setAttribute('class', 'imgClass');
    newImage.innerHTML;
    list.appendChild(newImage);
  }
};


fetch(url)
  .then(response => response.json())
  .then (json => {
    
    const headerSource = json.source;
    newsDAO.addHeaderSource(headerSource, newsHeader);

    const newsSourceText = 'News powered by: News API';
    newsDAO.addLinkToList(urlLink, newsHeader, newsSourceText);

    json.articles.forEach(article => {
      const listArticle = document.createElement('li');
      const artKeys = Object.keys(article);
      
      artKeys.slice(0, 3).forEach(key => newsDAO.addElementToList(article[key], listArticle));

      const alt = article.title;
      const urlToImg = article.urlToImage;
      newsDAO.addImageToList(urlToImg, alt, listArticle);

      artKeys.slice(3).forEach(key => newsDAO.addElementToList(article[key], listArticle));

      const readMore = 'Read more...';        
      newsDAO.addLinkToList(article.url, listArticle, readMore);   
      
      newsList.appendChild(listArticle);
    });
  })  
  .catch(error => console.log(error));



