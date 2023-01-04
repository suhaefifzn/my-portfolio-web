const { certificates } = require('../data/certificates.json');
const { projects } = require('../data/projects.json');
const { TemplateCreator } = require('../views/template/template-creator');

const ButtonInitiator = {
  init({ container, button }) {
    this._container = container;
    this._buttonCertificate = button.certificate;
    this._buttonProject = button.project;
    this._buttonSkill = button.skill;

    this._clickButtonCertificate();
    this._clickButtonProject();
    this._clickButtonSkill();
  },

  _clickButtonCertificate() {
    this._buttonCertificate.addEventListener('click', (event) => {
      event.stopPropagation();
      this._container.innerHTML = '<h2>Sertifikasi</h2>';
      this._container.innerHTML += '<div class="card-wrapper"></div>';
      const cardWrapperElement = document.querySelector('.card-wrapper');
      cardWrapperElement.innerHTML = '';
      certificates.forEach((certicate) => {
        cardWrapperElement.innerHTML += TemplateCreator.certificateCard(certicate);
      });
    });
  },

  _clickButtonProject() {
    this._buttonProject.addEventListener('click', (event) => {
      event.stopPropagation();
      this._container.innerHTML = '<h2>Project</h2>';
      this._container.innerHTML += '<div class="card-wrapper"></div>';
      const cardWrapperElement = document.querySelector('.card-wrapper');
      cardWrapperElement.innerHTML = '';
      projects.forEach((project) => {
        cardWrapperElement.innerHTML += TemplateCreator.projectCard(project);
      });
    });
  },

  _clickButtonSkill() {
    this._buttonSkill.addEventListener('click', (event) => {
      event.stopPropagation();
      this._container.innerHTML = '<h2>Keterampilan</h2>';
      this._container.innerHTML += TemplateCreator.skillCard();
    });
  },
};

module.exports = { ButtonInitiator };