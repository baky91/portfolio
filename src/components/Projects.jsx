import SectionTitle from './layout/SectionTitle'
import { ExternalLink, CodeXml } from 'lucide-react'

const PROJECTS_DATA = [
  {
    title: 'Application SNCF',
    image: './img/projects/project_sncf-app.jpg',
    texts: [
      "Application web permettant de consulter les horaires de trains en gare grâce à l'API SNCF.",
      "L'utilisateur peut rechercher une gare, choisir d'afficher les départs ou les arrivées de trains et filtrer selon le mode de transport (Grande Vitesse, RER, TER...).",
    ],
    technologies: ['React', 'JavaScript', 'NodeJS', 'API REST'],
    demoUrl: 'https://sncf-app.vercel.app',
    codeUrl: 'https://github.com/baky91/sncf-app',
  },
  {
    title: 'Gestion CIUP',
    image: './img/projects/projet_transverse.jpg',
    texts: [
      'Application graphique de type "Dashboard" permettant de gérer les étudiants et les maisons de la Cité Internationale Universitaire de Paris (CIUP).',
    ],
    technologies: ['Java Swing', 'Design-Pattern MVC'],
    demoUrl: '',
    codeUrl: '#',
  },
  {
    title: 'Jeux de quiz des drapeaux',
    image: './img/projects/project_flag_quiz.jpg',
    texts: [
      'Jeu de quiz sur les drapeaux du monde entier, avec la possibilité de paramétrer le nombre de manches.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://baky91.github.io/quiz_drapeaux/',
    codeUrl: 'https://github.com/baky91/quiz_drapeaux',
  },
]

export default function Projects() {
  return (
    <section id='projects'>
      <div className='max-w-7xl mx-auto w-full'>
        <SectionTitle title='Projets' />
        <div className='grid md:grid-cols-2 gap-8'>
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={'proj-' + idx}
              className='bg-card border border-border rounded-lg overflow-hidden hover:border-[#2563EB] transition-all hover:shadow-xl group'
            >
              <div className='grid grid-cols-1 gap-0'>
                {/* PROJECT IMAGE */}
                <div className='relative overflow-hidden aspect-video'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </div>

                <div className='p-6'>
                  {/* PROJECT TITLE */}
                  <h3 className='text-2x1 font-semibold mb-3'>
                    {project.title}
                  </h3>

                  {/* PROJECT DESCRIPTION */}
                  {project.texts.map((text, idx) => (
                    <p key={'text-' + idx}>{text}</p>
                  ))}

                  {/* PROJECT TECHNOLOGIES */}
                  <div className='flex flex-wrap gap-2 mt-3 mb-6'>
                    {project.technologies.map((tech, idx) => (
                      <div
                        key={'tech-' + idx}
                        className='px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm'
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* PROJECT LINKS */}
                  <div className='flex gap-4'>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target='_blank'
                        className='flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors'
                      >
                        <ExternalLink className='w-4 h-4' />
                        Démo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target='_blank'
                        className='flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors'
                      >
                        <CodeXml className='w-4 h-4' />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
