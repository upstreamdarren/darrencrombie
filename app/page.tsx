import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "The personal story of Darren Crombie — technologist, innovation leader and founder of Bridgit Care, working to keep AI useful, responsible and human.",
  alternates: { canonical: "/" },
};

const journey = [
  {
    chapter: "01",
    organisation: "Accenture",
    title: "Learning how change happens at scale.",
    copy: "I began my career in the technology world at Accenture. It taught me the craft behind complex delivery: how to listen, simplify, bring different people together and turn a bold idea into something that works in the real world.",
  },
  {
    chapter: "02",
    organisation: "DXC Technology",
    title: "Leading innovation beyond the slide deck.",
    copy: "At DXC I moved deeper into innovation — leading projects, exploring emerging technology and helping teams move from possibility to practical change. The lesson that stayed with me: innovation only matters when somebody feels the benefit.",
  },
  {
    chapter: "03",
    organisation: "Founder",
    title: "Building around problems worth solving.",
    copy: "That journey led me to become a founder. Since then I have built ventures around care, communities and public services, raised more than £1 million in grant funding, and kept asking the same question: how can technology help people sooner?",
  },
];

const videos = [
  {
    id: "1173356042",
    title: "Keeping Care Human in a Digital World",
    length: "34 min",
    note: "A deeper conversation about protecting the human heart of care while technology changes around it.",
  },
  {
    id: "1057449430",
    title: "AI Overview",
    length: "17 min",
    note: "An overview of the AI work and ideas shaping the next chapter of my journey.",
  },
  {
    id: "1054526546",
    title: "Any Guru Coach",
    length: "20 min",
    note: "A closer look at the Any Guru coaching idea and the thinking behind the product.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Darren Crombie",
  url: "https://darrencrombie.com",
  image: "https://darrencrombie.com/images/darren-portrait.jpg",
  jobTitle: "Founder and innovation leader",
  description:
    "Technologist, innovation leader and founder working on responsible AI for health, care and public services.",
  knowsAbout: [
    "Artificial intelligence",
    "Health and social care",
    "Public service innovation",
    "Unpaid carers",
    "Responsible AI",
  ],
  alumniOf: [
    { "@type": "Organization", name: "Accenture" },
    { "@type": "Organization", name: "DXC Technology" },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Bridgit Care",
    url: "https://bridgit.care",
  },
};

function Arrow() {
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
          DC<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#journey">Journey</a>
          <a href="#founder">Founder</a>
          <a href="#life">Life</a>
          <a href="#watch">Watch</a>
        </nav>
        <a className="header-cta" href="#contact">
          Say hello <Arrow />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#story">Story</a>
            <a href="#journey">Journey</a>
            <a href="#founder">Founder</a>
            <a href="#life">Life</a>
            <a href="#watch">Watch</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">TECHNOLOGIST · FOUNDER · HUMAN OPTIMIST</p>
          <h1>
            Tech is the thread.
            <br />
            <em>People are the point.</em>
          </h1>
          <p className="hero-intro">
            I’m Darren Crombie — a lifelong technologist, innovation leader and
            founder trying to make ambitious technology useful in the moments
            that matter.
          </p>
          <div className="hero-actions">
            <a className="button-dark" href="#story">
              Read my story <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#watch">
              Watch the story <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <span className="portrait-backdrop" aria-hidden="true" />
          <img
            src="/images/darren-portrait.jpg"
            alt="Darren Crombie smiling"
          />
          <p>
            Founder of Bridgit Care
            <br />
            Innovation leader · Speaker · Builder
          </p>
        </div>
      </section>

      <section className="identity-strip" aria-label="A snapshot of Darren">
        <div>
          <strong>£1m+</strong>
          <span>grant funding raised</span>
        </div>
        <div>
          <strong>3 chapters</strong>
          <span>Accenture → DXC → founder</span>
        </div>
        <div>
          <strong>1 belief</strong>
          <span>technology should feel human</span>
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-heading">
          <p className="section-label">01 / MY STORY</p>
          <h2>I have always been fascinated by what technology makes possible.</h2>
        </div>
        <div className="story-body">
          <p className="lead">
            Not technology for its own sake. The useful kind — the kind that
            removes friction, opens a door or gives somebody a better day.
          </p>
          <p>
            My career has taken me from global technology organisations to
            starting companies of my own. Along the way I have led innovation
            projects, worked with brilliant people across sectors and learnt
            that real progress rarely starts with the answer. It starts with a
            better question and the courage to keep going when the route is not
            obvious.
          </p>
          <p>
            Today, most of my energy sits at the meeting point of AI, care and
            public services. It is complicated, important work — which is
            exactly why I enjoy it.
          </p>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="section-intro section-intro-light">
          <p className="section-label">02 / THE JOURNEY</p>
          <h2>From big technology to deeply human problems.</h2>
        </div>
        <div className="journey-list">
          {journey.map((item) => (
            <article className="journey-row" key={item.chapter}>
              <span className="chapter-number">{item.chapter}</span>
              <p className="organisation">{item.organisation}</p>
              <h3>{item.title}</h3>
              <p className="journey-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder" id="founder">
        <div className="founder-photo photo-frame">
          <img
            className="mirror"
            src="/images/carers-team.jpg"
            alt="Darren with colleagues outside a carers centre"
          />
          <span>Real places. Real people. Real change.</span>
        </div>
        <div className="founder-copy">
          <p className="section-label">03 / THE FOUNDER’S STORY</p>
          <h2>Bridgit began with a very practical question.</h2>
          <blockquote>
            What if people could find the right support before life reached
            crisis point?
          </blockquote>
          <p>
            That question became Bridgit Care: technology designed around
            unpaid carers, local knowledge and the public services trying to
            help. Building it has meant finding funding, building trust,
            learning from setbacks and turning emerging AI into something
            people can actually use.
          </p>
          <p>
            Across the ventures and innovation programmes I have led, I have
            raised more than £1 million in grant funding. I’m proud of the
            number, but prouder of what it represents: other people backing
            ideas with the potential to improve lives.
          </p>
          <a className="button-coral" href="https://bridgit.care" target="_blank" rel="noreferrer">
            Explore Bridgit Care <Arrow />
          </a>
        </div>
      </section>

      <section className="mind-section">
        <div className="mind-mark" aria-hidden="true">
          <span>?</span>
        </div>
        <div>
          <p className="section-label">A DIFFERENT MIND’S EYE</p>
          <h2>I have aphantasia.</h2>
          <p className="mind-lead">
            I don’t form pictures in my mind. I think in ideas, connections,
            words and forward motion instead.
          </p>
          <p>
            In many ways it helps keep me focused on what is in front of me. It
            also means faces do not always stick — so if I walk past without
            recognising you, please don’t take it personally. Say hello.
          </p>
        </div>
      </section>

      <section className="life" id="life">
        <div className="section-intro">
          <p className="section-label">04 / AWAY FROM WORK</p>
          <h2>The people — and places — that keep me grounded.</h2>
          <p>
            I’m husband to my amazing wife, Jules, and dad to Frankie and
            William. They are the home team, the honest feedback panel and some
            of my favourite adventure partners.
          </p>
        </div>
        <div className="life-grid">
          <figure className="life-photo life-photo-tall">
            <img src="/images/darren-summit.jpg" alt="Darren on a mountain summit" />
            <figcaption>Wild camping and high places</figcaption>
          </figure>
          <figure className="life-photo life-photo-wide">
            <img
              className="mirror"
              src="/images/family-hike.jpg"
              alt="Darren with Frankie and William ready for a family hike"
            />
            <figcaption>Frankie, William and a lot of kit</figcaption>
          </figure>
          <figure className="life-photo">
            <img
              className="mirror"
              src="/images/jules-and-darren.jpg"
              alt="Darren and Jules enjoying live music together"
            />
            <figcaption>Jules — my amazing wife</figcaption>
          </figure>
          <figure className="life-photo life-photo-dog">
            <img src="/images/dog-hills.jpg" alt="Darren's dog enjoying a hill walk" />
            <figcaption>The four-legged expedition team</figcaption>
          </figure>
        </div>
        <div className="life-notes">
          <p>
            <strong>Above sea level:</strong> wild camping, hills, long walks
            and the reset that comes from carrying everything you need.
          </p>
          <p>
            <strong>Below sea level:</strong> scuba diving — a completely
            different world, and one of the few places where being fully present
            is non-negotiable.
          </p>
          <p>
            <strong>Closer to home:</strong> family time, live music and the
            occasional challenge that ends with a medal.
          </p>
        </div>
      </section>

      <section className="watch" id="watch">
        <div className="section-intro section-intro-light">
          <p className="section-label">05 / WATCH & LISTEN</p>
          <h2>Some ideas are better spoken.</h2>
          <p>
            Longer-form conversations about care, AI and turning possibility
            into something practical.
          </p>
        </div>
        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.id}>
              <div className="video-frame">
                <iframe
                  src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=122963`}
                  title={video.title}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="video-length">{video.length}</p>
              <h3>{video.title}</h3>
              <p>{video.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">06 / SAY HELLO</p>
        <h2>Good things usually start with a conversation.</h2>
        <p>
          If you’re working on a human problem, exploring responsible AI or
          looking for a speaker who has built through the messy middle, I’d love
          to hear from you.
        </p>
        <a className="contact-link" href="https://bridgit.care" target="_blank" rel="noreferrer">
          Connect through Bridgit Care <Arrow />
        </a>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#top" aria-label="Back to top">
          DC<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Darren Crombie</p>
        <p>Tech is the thread. People are the point.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
