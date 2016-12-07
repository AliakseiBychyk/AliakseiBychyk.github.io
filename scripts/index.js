import DOMManipulation from './DOMManipulation.utility.js';

const newsHeader = document.querySelector('#header');
const dom = DOMManipulation;

dom.addButton('button', 'start-button', 'Show the BBC news', newsHeader);


document.getElementById('start-button').onclick = () => {
  define(['./app.js'],  app => {
    document.getElementById('start-button').style.visibility = 'hidden';
  });
};
