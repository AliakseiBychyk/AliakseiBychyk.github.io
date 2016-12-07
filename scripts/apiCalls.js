import DOMManipulationUtilities from './DOMManipulation.utility.js';
import dataSource from './app.config.json';

const apiCalls = (() => {

  const url = dataSource.url + "source=" + dataSource.newsSource + "&apiKey=" + dataSource.apiKey;
  const urlLink = dataSource.urlLink;
  const newsSource = dataSource.newsSource;
  const newsHeader = document.querySelector('#header');
  const newsBlock = document.querySelector('main');
  const dom = DOMManipulationUtilities;
  const newsSourceText = 'News powered by: News API';

  return {

    createHeader: (json) => {
      const headerSource = json.source.toUpperCase();
      dom.addBlock(headerSource, newsHeader);
      dom.addLink(urlLink, newsSourceText, newsHeader);
    },

    createArticles: (json) => {
      json.articles.forEach(article => {

        const newsArticle = document.createElement('div');
        newsArticle.setAttribute('class', 'article');
        const artKeys = Object.keys(article);

        artKeys.slice(0, 3).forEach(key => dom.addBlock(article[key], newsArticle));

        const alt = article.title;
        const urlToImg = article.urlToImage;
        const imgClass = 'image'
        dom.addImage(urlToImg, alt, imgClass, newsArticle);

        const readMore = 'Read more...';
        dom.addLink(article.url, readMore, newsArticle);

        newsBlock.appendChild(newsArticle);
      })
    }
  }
})();

export default apiCalls;
