const apiKey = '2f49b9f8b3fc474888e9f02575e4cdd6';
const newsSource = 'bbc-news';
// const url = `https://newsapi.org/v1/articles?source=${newsSource}&apiKey=${apiKey}`;
const json = {
    "status" : "ok",
    "source" : "bbc-news",
    "sortBy" : "top",
    "articles" : [
        {
            "author" : "BBC News",
            "title" : "Trump election: Priebus and Bannon given key roles",
            "description" : "US President-elect Donald Trump gives key roles to a top Republican and a right-wing media chief.",
            "url" : "http://www.bbc.co.uk/news/world-us-canada-37970146",
            "urlToImage" : "http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/1E52/production/_92426770_trumpgetty.jpg",
            "publishedAt" : "2016-11-14T08:13:43Z"
        },
        {
            "author" : "BBC News",
            "title" : "NHS bosses 'trying to keep cuts secret'",
            "description" : "NHS chiefs have tried to keep local plans to cut hospital services in England secret, a study finds.",
            "url" : "http://www.bbc.co.uk/news/health-37943379",
            "urlToImage" : "http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/11D02/production/_92426927_nhs.jpg",
            "publishedAt" : "2016-11-14T07:47:50Z"
        },
        {
            "author" : "BBC News",
            "title" : "Skywatchers prepare for 'supermoon'",
            "description" : "Skywatchers are preparing for the 'supermoon' as the moon makes its closest approach since 1948.",
            "url" : "http://www.bbc.co.uk/news/uk-37969538",
            "urlToImage" : "http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/4544/production/_92423771_12804dc2-8f93-4806-a3e8-c34a2cf4f59e.jpg",
            "publishedAt" : "2016-11-13T23:21:53Z"
        },
        {
            "author" : "BBC News",
            "title" : "New Zealand hit by second strong quake",
            "description" : "A second strong quake hits New Zealand, as a large river breaches its banks sending a \"wall of water\" downstream.",
            "url" : "http://www.bbc.co.uk/news/world-asia-37970775",
            "urlToImage" : "http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/D130/production/_92425535_29b40754-d268-4161-9f57-936f7558c8e3.jpg",
            "publishedAt" : "2016-11-14T06:35:19Z"
        },
        {
            "author" : "BBC News",
            "title" : "May: Britain has 'historic chance' to give leadership to world",
            "description" : "Britain has an 'historic opportunity' to provide the leadership the world needs, the PM will say.",
            "url" : "http://www.bbc.co.uk/news/uk-politics-37966519",
            "urlToImage" : "http://ichef-1.bbci.co.uk/news/1024/cpsprodpb/299C/production/_92425601_mediaitem92420918.jpg",
            "publishedAt" : "2016-11-14T05:18:08Z"
        },
        {
            "author" : "BBC News",
            "title" : "Police crackdown on use of mobiles when driving",
            "description" : "Police in England and Wales launch a week-long crackdown on motorists using their mobiles.",
            "url" : "http://www.bbc.co.uk/news/uk-37968722",
            "urlToImage" : "http://ichef.bbci.co.uk/news/1024/cpsprodpb/B68C/production/_92423764_8947f918-e006-4a29-8589-519fd0e66cc8.jpg",
            "publishedAt" : "2016-11-14T08:06:03Z"
        }
    ]
};


const urlLink = 'http://newsapi.org';


const newsHeader = document.querySelector('#header');
const newsBlock = document.querySelector('main');

const newsMethods = {

  addElement: function(content, place) {
    const newElement = document.createElement('div');
    newElement.innerHTML = content;
    place.appendChild(newElement);
  },

  addLink: function(url, text, place) {
    const newLink = document.createElement('a');
    newLink.setAttribute('href', url);
    newLink.innerHTML = text;
    place.appendChild(newLink);
  },

  addImage: function(url, alt, classAttr, place) {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', url);
    newImg.setAttribute('alt', alt);
    newImg.setAttribute('class', classAttr);
    newImg.innerHTML;
    place.appendChild(newImg);
  }
};

//fetch(url)
//  .then(response => response.json())
//  .then(json => {

    const headerSource = json.source.toUpperCase();
    newsMethods.addElement(headerSource, newsHeader); 

    const newsSourceText = 'News powered by: News API';
    newsMethods.addLink(urlLink, newsSourceText, newsHeader);

    json.articles.forEach(article => {

      const newsArticle = document.createElement('div');
      newsArticle.setAttribute('class', 'article');
      const artKeys = Object.keys(article);

      artKeys.slice(0, 3).forEach(key => newsMethods.addElement(article[key], newsArticle));

      const alt = article.title;
      const urlToImg = article.urlToImage;
      const imgClass = 'image'
      newsMethods.addImage(urlToImg, alt, imgClass, newsArticle);

      //artKeys.slice(3).forEach(key => newsMethods.addElement(article[key], newsArticle));

      const readMore = 'Read more...';
      newsMethods.addLink(article.url, readMore, newsArticle);

      newsBlock.appendChild(newsArticle);
    });
//  })
//  .catch(error => console.log(error));
