export default function Project({ data }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={data.image} alt="" />
      </div>
      <h3>{data.title}</h3>
      <div className="project-content">
        {data.texts.map((text) => {
          return <p key={text}>{text}</p>
        })}
      </div>
      <div className="project-links">
        <a href={data.link} target="_blank">
          Code source
        </a>
      </div>
    </div>
  )
}
