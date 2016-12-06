const DOMManipulationUtilities = (() => {

  const _create = {
    div: () => document.createElement('div'),
    a: () => document.createElement('a'),
    img: () => document.createElement('img'),
    button: () => document.createElement('button')
  }

  function addAttribute(element, array) {
    let nextIndex = 0;
    return {
      next: () => nextIndex < array.length ?
        {
          add: (name) => element.setAttribute(name, array[nextIndex++]),
          done: false
        } :
        { done: true }
    }
  }

  return {

    addBlock: (content, place, classAttr) => {
      const newBlock = _create.div();
      const attrNames = ['class'];
      const attrValues = [classAttr];
      attrNames.forEach(attrName => {
        addAttribute(newBlock, attrValues).next().add(attrName);
      });
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
      const attrNames = ['src', 'alt', 'class'];
      const attrValues = [url, alt, classAttr];
      attrNames.forEach(attrName => {
        addAttribute(newImg, attrValues).next().add(attrName);
      });
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
