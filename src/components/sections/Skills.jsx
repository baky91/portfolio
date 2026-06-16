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
    skills: ['TCP/IP', 'DHCP', 'HTTP', 'WebSockets'],
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
      <div className='max-w-7xl mx-auto w-full'>
        <SectionTitle title='Compétences' />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, idx) => (
            <div
              key={'cat-' + idx}
              className='bg-card border border-border rounded-lg p-6'
            >
              {/* SKILLS CATEGORY */}
              <h3 className='text-xl font-semibold mb-6 text-[#2563EB]'>
                {category.category}
              </h3>

              {/* SKILLS LIST */}
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, idx) => (
                  <span
                    key={'skill-' + idx}
                    className='px-3 py-1.5 bg-[#2563EB]/10 text-[#2563EB] rounded-lg text-sm hover:bg-[#2563EB]/20 transition-colors cursor-default'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
