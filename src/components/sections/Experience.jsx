import SectionTitle from '../layout/SectionTitle'

const experiences = [
  {
    title: "Automatisation et Développement d'Interfaces",
    company: 'Stellantis',
    period: 'Septembre 2025 - Présent',
    current: true,
    description: [
      'Modernisation de pipelines de modélisation 3D',
      "• Développement d'un plugin de standardisation de modèles 3D sur Autodesk VRED",
      "• Écriture de scripts d'automatisation de génération de rendus photos et vidéos",
      "• Création d'interfaces utilisateurs",
      "• Conception et développement d'une architecture Web (API REST, Base de données, Interface Web)",
    ],
  },
]

export default function Experience() {
  console.log(experiences)
  return (
    <section
      id='experience'
      className='flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-muted/30'
    >
      <SectionTitle title='Expérience' />
      {experiences.map((exp) => (
        <div key={exp.title}>
          <h3>{exp.title}</h3>
          <p>{exp.company}</p>
          <p>{exp.period}</p>
          {exp.description.map((line, idx) => (
            <p key={'line-' + idx}>{line}</p>
          ))}
        </div>
      ))}
    </section>
  )
}
