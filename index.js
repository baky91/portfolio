document.addEventListener("DOMContentLoaded", () => {
  // chargement des projets
  const projectsDatas = [
    {
      title: "Application SNCF",
      image: "project_sncf-app.jpg",
      text: `<p>Application web qui permet de consulter les horaires en gare grâce à l'API SNCF. Utilisation
            de <strong>HTML</strong>, <strong>CSS</strong> et <strong>JavaScript</strong></p>
        <p>On peut rechercher une gare ou en sélectionner une afin d'afficher les départs ou les
            arrivées des trains.</p>`,
      link: "https://github.com/baky91/sncf-app",
    },
    {
      title: "Projet jeu vidéo [S102]",
      image: "project_s102.jpg",
      text: `<p>Réalisation d'un jeu-vidéo 2D en <strong>C++</strong> avec la bibliothèque
            <strong>SDL2</strong>, dans le cadre d'un projet universitaire.
        </p>
        <p>Le but du jeu est de récupérer tous les bonus du niveau tout en évitant les ennemis qui ont
            des mouvements aléatoires.</p>`,
      link: "https://github.com/baky91/S102-Project",
    },
    {
      title: "Développement d'une application",
      image: "projet_transverse.jpg",
      text: `<p><strong>Projet SAE1256</strong> : Application avec une interface graphique permettant de gérer les étudiants et les maisons de la Cité Internationale Universitaire de Paris (CIUP).</p>
        <p>Utilisation de <strong>Java Swing</strong> en suivant le pattern <strong>MVC (Modèle-Vue-Controleur)</strong>.</p>`,
      link: "#",
    },
    {
      title: "Projet CWAD",
      image: "project_cwad.jpg",
      text: `<p>Création d'un site web en <strong>HTML</strong> et <strong>CSS</strong> pour une activité de
        divertissement dans le cadre d'un projet universitaire.</p>`,
      link: "https://github.com/baky91/projet-cwad",
    },
    {
      title: "Projet BD (S104)",
      image: "project_s104.jpg",
      text: `<p>Création d'une base de données complète sur une entreprise d'électricité.</p>
        <p>Réalisation du <strong>modèle conceptuel de données (MCD)</strong>, du <strong>schéma relationnel (SR)</strong> et de requêtes <strong>SQL</strong> pour gérer les clients, chantiers et interventions.</p>`,
      link: "#",
    },
  ];

  const projectsContainer = document.getElementById("projects-grid");
  projectsDatas.forEach((project) => {
    projectsContainer.innerHTML += `
            <div class="project-card">
                <div class="project-image">
                    <img src="./img/projects/${project.image}">
                </div>
                <h3>${project.title}</h3>
                <div class="project-content">
                    ${project.text}
                </div>
                <div class="project-links">
                    <a href="${project.link}" target="_blank">Voir sur GitHub</a>
                </div>
            </div>
        `;
  });
});
