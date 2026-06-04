import SectionTitle from '../layout/SectionTitle'

const skillCategories = [
  {
    category: 'Langages',
    skills: ['Java', 'Python', 'C++', 'C#', 'PHP', 'JavaScript'],
  },
  {
    category: 'Front-end',
    skills: ['HTML/CSS', 'React'],
  },
  {
    category: 'Back-end',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'API REST'],
  },
  {
    category: 'Bases de données',
    skills: ['Oracle SQL', 'MySQL', 'SQLite'],
  },
  {
    category: 'Réseaux',
    skills: ['TCP/IP', 'DHCP'],
  },
  {
    category: 'Outils',
    skills: ['Git', 'GitHub', 'Docker', 'Linux'],
  },
]

export default function Skills() {
  console.log(skillCategories)

  return (
    <section
      id='skills'
      className='flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-muted/30'
    >
      <SectionTitle title='Compétences' />
    </section>
  )
}
