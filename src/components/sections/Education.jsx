import { Award, GraduationCap } from 'lucide-react'
import SectionTitle from '../layout/SectionTitle'

const formations = [
  {
    degree: 'Cycle Ingénieur en Informatique',
    institution: 'ENSIIE, Évry-Courcouronnes',
    period: '2026',
    incoming: true,
    type: 'degree',
  },
  {
    degree:
      "BUT Informatique (Parcours : Développement, Conception et Réalisation d'applications)",
    institution: "IUT d'Orsay, Université Paris-Saclay",
    period: '2024 - 2026',
    incoming: false,
    type: 'degree',
  },
  {
    degree: 'Baccalauréat général (Mathématiques, Physiques-Chimie',
    institution: 'Lycée Jacques Prévert, Longjumeau',
    period: '2024',
    incoming: false,
    type: 'degree',
  },
]

export default function Education() {
  return (
    <section
      id='education'
      className='flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20'
    >
      <div className='max-w-4xl mx-auto w-full'>
        <SectionTitle title='Formations' />

        <div className='space-y-6'>
          {formations.map((formation, idx) => (
            <div
              className='bg-card border border-border rounded-lg p-6 hover:border-[#2563EB] transition-all hover:shadow-lg'
              key={'form-' + idx}
            >
              <div className='flex items-start gap-4'>
                {/* FORMATION ICON */}
                <div
                  className={`p-3 rounded-lg ${
                    formation.type === 'degree'
                      ? 'bg-[#2563EB]/10'
                      : 'bg-green-500/10'
                  }`}
                >
                  {formation.type === 'degree' ? (
                    <GraduationCap
                      className={`w-6 h-6 ${
                        formation.type === 'degree'
                          ? 'text-[#2563EB]'
                          : 'text-green-500'
                      }`}
                    />
                  ) : (
                    <Award className='w-6 h-6 text-green-500' />
                  )}
                </div>

                <div className='flex-1'>
                  <div className='flex flex-wrap items-start justify-between gap-2 mb-2'>
                    <div className='max-w-2xl'>
                      {/* FORMATION DEGREE */}
                      <h3 className='text-xl font-semibold'>
                        {formation.degree}
                      </h3>
                      {/* FORMATION INSTITUTION */}
                      <p className='text-muted-foreground'>
                        {formation.institution}
                      </p>
                    </div>
                    {/* FORMATION PERIOD */}
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        formation.type === 'degree'
                          ? formation.incoming
                            ? 'bg-[#FFB300]/10 text-[#FFB300]'
                            : 'bg-[#2563EB]/10 text-[#2563EB]'
                          : 'bg-green-500/10 text-green-500'
                      }`}
                    >
                      {formation.period}
                    </span>
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
