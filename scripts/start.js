import DOMManipulationUtilities from './DOMManipulationUtilities.js';

const newsHeader = document.querySelector('#header');
const dom = DOMManipulationUtilities;

dom.addButton('button', 'Go to the BBC news', newsHeader);

document.getElementsByTagName('button').onclick = function () {
  define (['./app.js'], function (app) {
    app();
  });
};
