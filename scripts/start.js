import DOMManipulationUtilities from './DOMManipulationUtilities.js';

const newsHeader = document.querySelector('#header');
const dom = DOMManipulationUtilities;

dom.addButton('button', 'start-button', 'Go to the BBC news', newsHeader);

document.getElementById('start-button').onclick = function () {
  define(['./app.js'], function (app) {
    app.app();
  });
};
