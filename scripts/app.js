import dataSource from './app.config.json';
import apiCalls from './apiCalls.js';

const app = ( () => {

  const url = dataSource.url + "source=" + dataSource.newsSource + "&apiKey=" + dataSource.apiKey;
  const urlLink = dataSource.urlLink;
  const newsSource = dataSource.newsSource;

  fetch(url)
    .then(response => response.json())
    .then(json => {
      apiCalls.createHeader(json);
      apiCalls.createArticles(json);
    })
    .catch(error => console.log("Unexpected error: " + error));
})();

export default app;
