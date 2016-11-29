const newsMethods = {

  addElement: function (content, place) {
    const newElement = document.createElement('div');
    newElement.innerHTML = content;
    place.appendChild(newElement);
  },

  addLink: function (url, text, place) {
    const newLink = document.createElement('a');
    newLink.setAttribute('href', url);
    newLink.innerHTML = text;
    place.appendChild(newLink);
  },

  addImage: function (url, alt, classAttr, place) {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', url);
    newImg.setAttribute('alt', alt);
    newImg.setAttribute('class', classAttr);
    newImg.innerHTML;
    place.appendChild(newImg);
  }

};

export default newsMethods;
