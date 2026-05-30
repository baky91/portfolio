import Project from './components/Project'
import projectsData from './data/projects.json'

function App() {
  console.log(projectsData)

  return (
    <>
      <h1 className="text-3xl text-sky-600 font-bold underline">
        Bakary Bomou - Portfolio
      </h1>

      <section className="projects">
        <h2>Mes projets</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {projectsData.map((data, idx) => {
            return <Project key={'proj-' + idx} data={data} />
          })}
        </div>
      </section>
    </>
  )
}

export default App
