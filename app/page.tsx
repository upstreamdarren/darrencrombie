import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Darren Crombie is a founder and speaker working to make artificial intelligence useful, responsible and human in health, care and public services.",
  alternates: { canonical: "/" },
};

const ideas = [
  {
    number: "01",
    title: "Technology should make public services feel more human",
    description:
      "The best AI creates more time for judgement, empathy and the conversations that matter.",
    tag: "AI & humanity",
  },
  {
    number: "02",
    title: "Start with the person, not the platform",
    description:
      "Transformation works when it begins with a real need and measures a real-world outcome.",
    tag: "Public services",
  },
  {
    number: "03",
    title: "Responsible AI is something you practise",
    description:
      "Trust is built through transparency, careful deployment and continuous learning—not a policy document alone.",
    tag: "Responsible innovation",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Darren Crombie",
  url: "https://darrencrombie.com",
  jobTitle: "Founder and speaker",
  description:
    "Founder and speaker working on responsible AI for health, care and public services.",
  knowsAbout: [
    "Artificial intelligence",
    "Health and social care",
    "Public service innovation",
    "Unpaid carers",
    "Responsible AI",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Bridgit Care",
    url: "https://bridgit.care",
  },
};

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Darren Crombie, home">
          DC<span className="wordmark-dot">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#ideas">Ideas</a>
          <a href="#speaking">Speaking</a>
        </nav>
        <a className="header-cta" href="#contact">
          Start a conversation <ArrowIcon />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#ideas">Ideas</a>
            <a href="#speaking">Speaking</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />
          <span className="orbit-core">Human</span>
        </div>
        <p className="eyebrow">AI · PUBLIC SERVICES · SOCIAL IMPACT</p>
        <h1>
          Building technology
          <br />
          that helps people <em>thrive.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-intro">
            I’m Darren Crombie. I work at the meeting point of AI, care and
            public services—turning ambitious ideas into practical support for
            people and communities.
          </p>
          <a className="circle-link" href="#about" aria-label="Discover Darren's work">
            <span>Discover</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-label">01 / WHY</p>
        <div className="manifesto-copy">
          <h2>Technology should make us feel more human, not less.</h2>
          <p>
            The real promise of artificial intelligence is not automation for
            its own sake. It is earlier help, better decisions and more time for
            people to care. That belief sits behind everything I build, share
            and advocate for.
          </p>
          <a className="text-link" href="#work">
            See what that looks like in practice <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="principles" aria-label="Darren's working principles">
        <article>
          <span>01</span>
          <h3>Useful before impressive</h3>
          <p>Technology earns its place by solving a problem people actually have.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Human by design</h3>
          <p>Good systems give professionals and communities more agency—not less.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Evidence over hype</h3>
          <p>Build carefully, measure honestly and learn in the open.</p>
        </article>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="section-label">02 / WORK</p>
          <h2>Ideas are only useful when they improve real lives.</h2>
        </div>
        <a className="feature-card" href="https://bridgit.care" target="_blank" rel="noreferrer">
          <div className="feature-copy">
            <p className="card-kicker">Founder · Bridgit Care</p>
            <h3>Helping people find support before they reach crisis.</h3>
            <p>
              Bridgit brings technology, local knowledge and human support
              together around unpaid carers and the services that stand beside them.
            </p>
            <span className="card-link">Visit Bridgit Care <ArrowIcon /></span>
          </div>
          <div className="feature-visual" aria-hidden="true">
            <span className="signal signal-a" />
            <span className="signal signal-b" />
            <span className="signal signal-c" />
            <span className="signal-label">Care, connected.</span>
          </div>
        </a>
      </section>

      <section className="ideas" id="ideas">
        <div className="ideas-intro">
          <p className="section-label">03 / IDEAS</p>
          <h2>Thinking in public.</h2>
          <p>
            Notes on responsible AI, stronger public services and what it takes
            to turn innovation into lasting change.
          </p>
        </div>
        <div className="idea-list">
          {ideas.map((idea) => (
            <article className="idea-row" key={idea.number}>
              <span className="idea-number">{idea.number}</span>
              <div>
                <p className="idea-tag">{idea.tag}</p>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
              </div>
              <span className="idea-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </section>

      <section className="speaking" id="speaking">
        <div className="speaker-mark" aria-hidden="true">
          <span className="quote-mark">“</span>
          <span className="sound-line sound-one" />
          <span className="sound-line sound-two" />
          <span className="sound-line sound-three" />
        </div>
        <div className="speaking-copy">
          <p className="section-label">04 / SPEAKING</p>
          <h2>Making complex change feel possible.</h2>
          <p>
            Keynotes and conversations for leaders exploring AI, care,
            innovation and the future of public services.
          </p>
          <div className="topic-list" aria-label="Speaking topics">
            <span>Responsible AI in practice</span>
            <span>The future of care</span>
            <span>Innovation inside public services</span>
          </div>
          <a className="button-light" href="#contact">
            Discuss a speaking opportunity <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">05 / LET’S TALK</p>
        <h2>Working on a problem that matters?</h2>
        <p>
          I’m always interested in thoughtful conversations about AI, care and
          better public services.
        </p>
        <a className="contact-link" href="https://bridgit.care" target="_blank" rel="noreferrer">
          Connect through Bridgit Care <ArrowIcon />
        </a>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#top" aria-label="Back to top">
          DC<span className="wordmark-dot">.</span>
        </a>
        <p>© {new Date().getFullYear()} Darren Crombie</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
