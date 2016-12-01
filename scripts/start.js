import DOMManipulationUtilities from './DOMManipulationUtilities.js';

const newsHeader = document.querySelector('#header');
const dom = DOMManipulationUtilities;

dom.addButton('button', 'start-button', 'Go to the BBC news', newsHeader);


document.getElementById('start-button').onclick = function () {
  define(['./app.js'], function (app) {
    alert("Hello");
    app();
  });
};


/*
document.getElementById('start-button').onclick = function () {
  define(function (require) {
    let app = require('./app.js');
    alert("Hello");
    app();
  });
};
*/
/*
document.getElementById('start-button').onclick = function() {
  require.ensure(['./app.js'], function (require) {
    let app = require('./app.js');
    app();
  });
};
*/
