import SectionTitle from '../layout/SectionTitle'

export default function About() {
  const texts = [
    'Je suis actuellement étudiant en deuxième année de BUT Informatique en alternance, passionné par le développement et les nouvelles technologies.',
    "Dans mon entreprise actuelle, je travaille sur la modernisation des processus de modélisation 3D et de génération de rendus d'images et vidéos, en développant des scripts d'automatisation et des interfaces utilisateurs.",
    'Cette alternance me permet de développer mes compétences techniques et ma capacité à résoudre des problèmes complexes dans un cas concrets et à travailler en équipe.',
  ]

  return (
    <section
      id='about'
      className='flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20'
    >
      <div className='max-w-7xl mx-auto w-full'>
        <SectionTitle title='À propos' />
        {texts.map((text, idx) => (
          <p
            key={'text-' + idx}
            className='text-center text-muted-foreground leading-relaxed'
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}
