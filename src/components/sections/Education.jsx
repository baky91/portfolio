import SectionTitle from '../layout/SectionTitle'

const formations = [
  {
    degree: '',
    institution: 'ENSIIE, Évry-Courcouronnes',
    period: '2026',
    description: '',
  },
  {
    degree:
      "BUT Informatique (Parcours : Développement, Conception et Réalisation d'applications)",
    institution: "IUT d'Orsay, Université Paris-Saclay",
    period: '2024 - 2026',
    description: '',
  },
  {
    degree: 'Baccalauréat général (Mathématiques, Physiques-Chimie',
    institution: 'Lycée Jacques Prévert, Longjumeau',
    period: '2024',
    description: '',
  },
]

export default function Education() {
  console.log(formations)

  return (
    <section
      id='education'
      className='flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20'
    >
      <SectionTitle title='Formations' />
    </section>
  )
}
