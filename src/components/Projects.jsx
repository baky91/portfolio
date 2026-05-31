const PROJECTS_DATA = [
  {
    title: 'Application SNCF',
    image: './img/projects/project_sncf-app.jpg',
    texts: [
      <>
        Application web qui permet de consulter les horaires en gare grâce à
        l'API SNCF. Utilisation de <strong>React</strong> et mise en place d'un
        serveur proxy pour les requêtes API.
      </>,
      <>
        On peut rechercher une gare ou en sélectionner une afin d'afficher les
        départs ou les arrivées des trains.
      </>,
    ],
    link: 'https://github.com/baky91/sncf-app',
  },
  {
    title: "Développement d'une application",
    image: './img/projects/projet_transverse.jpg',
    texts: [
      <>
        <strong>Projet SAE1256</strong> : Application avec une interface
        graphique permettant de gérer les étudiants et les maisons de la Cité
        Internationale Universitaire de Paris (CIUP).
      </>,
      <>
        Utilisation de <strong>Java Swing</strong> en suivant le pattern{' '}
        <strong>MVC (Modèle-Vue-Controleur)</strong>
      </>,
    ],
    link: '#',
  },
  {
    title: 'Jeux de quiz des drapeaux',
    image: './img/projects/project_flag_quiz.jpg',
    texts: [
      <>
        Jeu de quiz sur les drapeaux du monde entier. Réalisé en{' '}
        <strong>HTML</strong>, <strong>CSS</strong> et{' '}
        <strong>Javascript</strong>
      </>,
    ],
    link: 'https://github.com/baky91/quiz_drapeaux',
  },
]

export default function Projects() {
  return (
    <section className="projects">
      <h2>Mes projets</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {PROJECTS_DATA.map((data, idx) => {
          return (
            <div
              key={'proj-' + idx}
              className="bg-[#1a1a1a] text-white flex flex-col justify-between"
            >
              <div className="project-image">
                <img src={data.image} alt="" />
              </div>
              <h3>{data.title}</h3>
              <div className="project-content">
                {data.texts.map((text) => {
                  return <p key={text}>{text}</p>
                })}
              </div>
              <div className="project-links">
                <a href={data.link} target="_blank">
                  Code source
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
