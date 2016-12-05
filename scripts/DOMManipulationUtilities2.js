const DOMManipulationUtilities = ( () => {

  return {

    addBlock: (content, place) => {
      const newBlock = document.createElement('div');
      newBlock.innerHTML = content;
      place.appendChild(newBlock);
    },

    addLink: (url, text, place) => {
      const newLink = document.createElement('a');
      newLink.setAttribute('href', url);
      newLink.innerHTML = text;
      place.appendChild(newLink);
    },

    addImage: (url, alt, classAttr, place) => {
      const newImg = document.createElement('img');
      newImg.setAttribute('src', url);
      newImg.setAttribute('alt', alt);
      newImg.setAttribute('class', classAttr);
      newImg.innerHTML;
      place.appendChild(newImg);
    },

    addButton: (typeAttr, idValue, caption, place) => {
      const newButton = document.createElement('button');
      newButton.setAttribute('type', typeAttr);
      newButton.setAttribute('id', idValue);
      newButton.innerHTML = caption;
      place.appendChild(newButton);
    }
  }

})();

export default DOMManipulationUtilities;
