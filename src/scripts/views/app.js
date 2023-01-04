const { Home } = require('./pages/home');

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    this._content.innerHTML = await Home.render();
    await Home.afterRender();
  }
}

module.exports = { App };