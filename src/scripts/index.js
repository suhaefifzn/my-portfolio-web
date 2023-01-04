import 'regenerator-runtime';
import '../style/main.css';
import '../style/responsive.css';

const { App } = require('./views/app');

const app = new App({
  content: document.querySelector('.content'),
});

window.addEventListener('load', () => {
  app.renderPage();
});