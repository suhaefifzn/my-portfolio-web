const { ButtonInitiator } = require('../../utils/button-init');

const Home = {
  async render() {
    return `
      <div class="display">
        <p>Klik satu tombol di atas untuk menampilkan konten.</p>
      </div>
    `;
  },

  async afterRender() {
    ButtonInitiator.init({
      container: document.querySelector('.display'),
      button: {
        certificate: document.querySelector('.btn-certificate'),
        project: document.querySelector('.btn-project'),
        skill: document.querySelector('.btn-skill'),
      },
    });
  },
};

module.exports = { Home };