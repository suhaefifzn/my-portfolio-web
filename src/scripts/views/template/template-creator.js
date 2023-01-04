const TemplateCreator = {
  certificateCard(certificate) {
    return `
      <div class="certificate-card">
        <div class="certificate-card-img">
          <img src="${certificate.img}" class="certificate-img"/>
        </div>
        <div class="certificate-card-name">
          <h3>${certificate.name}</h3>
        </div>
        <a href="${certificate.src}" class="btn" target="_blank" rel="noopener">
          Lihat Detail Sertifikat
        </a>
      </div>
    `;
  },

  projectCard(project) {
    return `
      <div class="project-card">
        <div class="project-card-img">
          <img src="${project.img}" class="project-img"/>
        </div>
        <div class="project-card-name">
          <h3>${project.name}</h3>
        </div>
        <div class="project-card-desc">
          <p>
            ${project.desc}
          </p>
        </div>
        <a href="${project.src}" class="btn" target="_blank" rel="noopener">
          Lihat Detail Project
        </a>
      </div>
    `;
  },

  skillCard() {
    return `
      <div class="skill-card">
        <div class="skill-section">
          <h3>Language</h3>
          <div class="skill-img-wrapper">
            <img
              src="./skills/html-js-css.png"
              title="HTML, CSS, JavaScript"
            />
          </div>
        </div>
        <div class="skill-section">
          <h3>Framework</h3>
          <div class="skill-img-wrapper">
            <img
              src="./skills/bootstrap.png"
              title="Bootstrap"
            />
          </div>
        </div>
        <div class="skill-section">
          <h3>Text Editor</h3>
          <div class="skill-img-wrapper">
            <img
              src="./skills/vscode.png"
              title="Visual Studio Code"
            />
          </div>
        </div>
        <div class="skill-section">
          <h3>Runtime Environment</h3>
          <div class="skill-img-wrapper">
            <img
              src="./skills/nodejs.png"
              title="Node.js"
            />
          </div>
        </div>
      </div>
    `;
  },
};

module.exports = { TemplateCreator };