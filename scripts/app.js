import DOMManipulationUtilities from './DOMManipulationUtilities.js';

const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const newsSource = 'bbc-news';
const url = `https://newsapi.org/v1/articles?source=${newsSource}&apiKey=${apiKey}`;
const urlLink = 'http://newsapi.org';

export function app() {

  fetch(url)
    .then(response => response.json())
    .then(json => {

      const newsHeader = document.querySelector('#header');
      const newsBlock = document.querySelector('main');
      const dom = DOMManipulationUtilities;

      const headerSource = json.source.toUpperCase();
      dom.addElement(headerSource, newsHeader);

      const newsSourceText = 'News powered by: News API';
      dom.addLink(urlLink, newsSourceText, newsHeader);

      json.articles.forEach(article => {

        const newsArticle = document.createElement('div');
        newsArticle.setAttribute('class', 'article');
        const artKeys = Object.keys(article);

        artKeys.slice(0, 3).forEach(key => dom.addElement(article[key], newsArticle));

        const alt = article.title;
        const urlToImg = article.urlToImage;
        const imgClass = 'image'
        dom.addImage(urlToImg, alt, imgClass, newsArticle);

        const readMore = 'Read more...';
        dom.addLink(article.url, readMore, newsArticle);

        newsBlock.appendChild(newsArticle);
      });
    })
    .catch(error => console.log("Unexpected error: " + error));
};
