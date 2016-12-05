import DOMManipulationUtilities from './DOMManipulationUtilities.js';

const newsHeader = document.querySelector('#header');
const dom = DOMManipulationUtilities;

dom.addButton('button', 'start-button', 'Show the BBC news', newsHeader);


document.getElementById('start-button').onclick = () => {
  define(['./app.js'],  app => {
    app();
    document.getElementById('start-button').style.visibility = "hidden";
  });
};
