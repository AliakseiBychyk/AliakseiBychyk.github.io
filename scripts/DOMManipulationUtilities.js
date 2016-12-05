const DOMManipulationUtilities = (() => {

  const _create = {
    div: () => document.createElement('div'),
    a: () => document.createElement('a'),
    img: () => document.createElement('img'),
    button: () => document.createElement('button')
  }

  return {

    addBlock: (content, place) => {
      const newBlock = _create.div();
      newBlock.innerHTML = content;
      place.appendChild(newBlock);
    },

    addLink: (url, text, place) => {
      const newLink = _create.a();
      newLink.setAttribute('href', url);
      newLink.innerHTML = text;
      place.appendChild(newLink);
    },

    addImage: (url, alt, classAttr, place) => {
      const newImg = _create.img();
      newImg.setAttribute('src', url);
      newImg.setAttribute('alt', alt);
      newImg.setAttribute('class', classAttr);
      newImg.innerHTML;
      place.appendChild(newImg);
    },

    addButton: (typeAttr, idValue, caption, place) => {
      const newButton = _create.button();
      newButton.setAttribute('type', typeAttr);
      newButton.setAttribute('id', idValue);
      newButton.innerHTML = caption;
      place.appendChild(newButton);
    }
  }
})();

export default DOMManipulationUtilities;
