import SectionTitle from '../layout/SectionTitle'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: "Automatisation et Développement d'Interfaces",
    company: 'Stellantis',
    period: 'Septembre 2025 - Présent',
    current: true,
    description: [
      'Modernisation de pipelines de modélisation 3D',
      "• Développement d'un plugin de standardisation de modèles 3D sur Autodesk VRED",
      "• Écriture de scripts d'automatisation de génération de rendus photos et vidéos à partir de modèles 3D",
      "• Création d'interfaces utilisateurs",
      "• Conception et développement d'une architecture Web (API REST, Base de données, Interface Web)",
    ],
    technologies: [
      'Python',
      'Autodesk VRED',
      'Blender',
      'AWS Deadline',
      'Figma',
      'React',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id='experience'
      className='flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-muted/30'
    >
      <div className='max-w-4xl mx-auto w-full'>
        <SectionTitle title='Expérience' />
        <div className='relative'>
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-border'></div>
          {experiences.map((exp, idx) => (
            <>
              <div
                key={'exp-' + idx}
                className='relative pl-20 pb-12 last:pb-0'
              >
                <div className='absolute left-5 top-0 w-6 h-6 bg-[#2563EB] rounded-full border-4 border-background'></div>

                <div className='bg-card border border-border rounded-lg p-6 hover:border-[#2563EB] transition-all hover:shadow-lg'>
                  <div className='flex items-start justify-between mb-4'>
                    <div>
                      {/* EXPERIENCE TITLE */}
                      <h3 className='text-xl font-semibold mb-1'>
                        {exp.title}
                      </h3>

                      {/* COMPANY NAME */}
                      <div className='flex items-center gap-2 text-muted-foreground'>
                        <Briefcase className='w-4 h-4' />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* EXPERIENCE PERIOD */}
                    <span className='text-sm text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full'>
                      {exp.period}
                    </span>
                  </div>

                  {/* EXPERIENCE DESCRIPTION */}
                  <h3>Missions : </h3>
                  <ul className='space-y-2'>
                    {exp.description.map((item, i) => (
                      <li
                        key={'desc-' + i}
                        className='text-muted-foreground flex items-start'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* EXPERIENCE TECHNOLOGIES */}
                  <h3 className='mt-1.5'>Technologies : </h3>
                  <div className='flex flex-wrap gap-2 mt-3 mb-6'>
                    {exp.technologies.map((tech, idx) => (
                      <div
                        key={'tech-' + idx}
                        className='px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm'
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
