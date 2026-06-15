export default function Home() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-4'>
          <span className='text-foreground'>Bakary Bomou</span>
        </h1>

        <h2 className='text-2xl sm:text-3xl lg:text-4xl text-[#2563EB] mb-6'>
          Apprenti Développeur d'Interface et Automatisation
        </h2>

        <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
          Étudiant en deuxième année de BUT Informatique à l'
          <strong>IUT d'Orsay</strong>. En contrat d'apprentissage chez{' '}
          <strong>Stellantis</strong>.
        </p>
        <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
          Admis à l'<strong>ENSIIE</strong> pour la formation sous statut
          d'apprenti pour la rentrée 2026.
        </p>
      </div>
    </section>
  )
}
