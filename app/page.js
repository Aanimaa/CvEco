import {
  identity,
  languages,
  tools,
  projects,
  experiences,
  education,
  spokenLanguages,
  hobbies,
} from "./data";

function Section({ id, title, children }) {
  return (
    <section aria-labelledby={id} className="section">
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="page">
      <aside className="side">
        <header className="identity">
          <h1>{identity.name}</h1>
          <p className="title">{identity.title}</p>
          <p className="avail">{identity.availability}</p>
        </header>

        <Section id="langages" title="Langages">
          <ul className="chips">
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Section>

        <Section id="outils" title="Outils">
          <ul className="chips">
            {tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <ul className="plain">
            <li>{identity.city}</li>
            <li>
              <a href={`mailto:${identity.email}`}>{identity.email}</a>
            </li>
            <li>
              <a href={identity.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={identity.github}>GitHub</a>
            </li>
            <li>{identity.licence}</li>
          </ul>
        </Section>

        <Section id="loisirs" title="Loisirs">
          <ul className="plain">
            {hobbies.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Section>
      </aside>

      <main className="main">
        <Section id="projets" title="Projets">
          <ul className="cards">
            {projects.map((p) => (
              <li key={p.name}>
                <h3>
                  {p.url ? <a href={p.url}>{p.name}</a> : p.name}
                </h3>
                <p>{p.description}</p>
                <p className="tags">{p.tags.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experiences" title="Expériences">
          {experiences.map((e) => (
            <article key={e.role} className="entry">
              <h3>
                {e.role} <span className="org">– {e.org}</span>
              </h3>
              <ul>
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </Section>

        <Section id="formations" title="Formations">
          {education.map((f) => (
            <article key={f.label} className="entry">
              <h3>
                {f.label} <span className="org">{f.period}</span>
              </h3>
              {f.place && <p>{f.place}</p>}
            </article>
          ))}
        </Section>

        <Section id="langues" title="Langues">
          <ul className="plain">
            {spokenLanguages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Section>

        <footer className="foot">
          Site statique, sans cookie ni traceur, sans image ni police externe.
        </footer>
      </main>
    </div>
  );
}
