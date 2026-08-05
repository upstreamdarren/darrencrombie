import type { Metadata } from "next";

const calendlyUrl = "https://calendly.com/upstreamhealth/30min";
const crisisFundGuidanceUrl =
  "https://www.gov.uk/government/publications/crisis-and-resilience-fund-guidance-for-local-authorities-in-england-1-april-2026-to-31-march-2029/the-crisis-and-resilience-fund-guidance-for-local-authorities-in-england-1-april-2026-to-31-march-2029";

export const metadata: Metadata = {
  description:
    "Darren Crombie’s journey from Accenture and DXC to founding Bridgit Care — supporting 180,000+ carers and helping charities deliver more impact at lower cost.",
  alternates: { canonical: "/" },
};

const journey = [
  {
    chapter: "01",
    organisation: "Accenture",
    title: "Learning how change happens at scale.",
    copy: "I started my career at Accenture. It taught me how complex change really happens: listen properly, simplify the problem, bring the right people together and turn a bold idea into something that works in the real world.",
  },
  {
    chapter: "02",
    organisation: "DXC Technology",
    title: "Leading innovation beyond the slide deck.",
    copy: "At DXC I got closer to innovation — leading projects, exploring emerging technology and helping teams move from possibility to practical change. The lesson I carried forward was simple: innovation only matters when somebody feels the benefit.",
  },
  {
    chapter: "03",
    organisation: "Founder",
    title: "Building around problems worth solving.",
    copy: "In 2017, sat at the back of a health innovation event in Leeds, I decided it was time to stop talking about starting a business and actually start one. Upstream Health followed in early 2018 — and the founder chapter began.",
  },
];

const milestones = [
  {
    year: "2017",
    title: "The decision",
    copy: "At a Yorkshire & Humber health innovation event in Leeds, I made the decision to leave employment and become a founder — with a young family, a big idea and no guarantee it would work.",
    href: "https://thehealthinnovationnetwork.co.uk/wp-content/uploads/2021/06/Yorkshire-Humber-AHSN_Impact-Report_2020-21.pdf",
    source: "Health Innovation Network",
  },
  {
    year: "2018",
    title: "Upstream begins",
    copy: "Upstream Health launched with a preventative-care mission: use technology to help patients and teams intervene earlier, before smaller problems become crises.",
    href: "https://thehealthinnovationnetwork.co.uk/wp-content/uploads/2021/06/Yorkshire-Humber-AHSN_Impact-Report_2020-21.pdf",
    source: "Health Innovation Network",
  },
  {
    year: "2019",
    title: "The human pivot",
    copy: "The work changed direction. Instead of adding another tool for clinicians, we focused on family carers — inspired by Grandad Doug and the everyday care provided by my mum Jacqueline and my sister.",
    href: "https://thehealthinnovationnetwork.co.uk/archive/meet-the-innovator-bridgit-care/",
    source: "Meet the Innovator",
  },
  {
    year: "2020",
    title: "Backing the idea",
    copy: "An SBRI-supported NHS trial led to a Phase 2 grant of nearly £700,000, giving us the opportunity to grow the team and turn the early concept into a broader service.",
    href: "https://thehealthinnovationnetwork.co.uk/wp-content/uploads/2021/06/Yorkshire-Humber-AHSN_Impact-Report_2020-21.pdf",
    source: "AHSN impact report",
  },
  {
    year: "2022–23",
    title: "Inclusive innovation",
    copy: "Bridgit Care won an Innovate UK Inclusive Innovation Award for work helping more carers reach statutory assessments and essential local support earlier.",
    href: "https://iuk-business-connect.org.uk/projects/inclusive-innovation/bridgit-care/",
    source: "Innovate UK Business Connect",
  },
  {
    year: "2025",
    title: "Impact over growth",
    copy: "A strategic partnership with Carers Trust changed the next decision. Rather than grow for growth’s sake, Bridgit would help local carer charities extend their reach, reduce delivery costs and demonstrate more impact.",
    href: "https://carers.org/downloads/carers-trust-report-accounts-2024-25.pdf",
    source: "Carers Trust annual report",
  },
];

const currentWork = [
  {
    name: "Bridgit Care",
    tag: "CARE · PUBLIC SERVICES · AI",
    copy: "More than 180,000 carers supported — with Bridgit Care Local now taking the same practical, place-based approach into wider neighbourhood support, including Brum Chat.",
    href: "https://bridgit.care",
  },
  {
    name: "My UK Life",
    tag: "INTERNATIONAL RECRUITS · SETTLING IN · AI",
    copy: "Personalised support for international recruits building a life in the UK — helping people navigate work, wellbeing, housing and their local community across more than 30 regions.",
    href: "https://ai.myuk.life",
  },
  {
    name: "Any Guru",
    tag: "FOUNDERS · COACHING · AI",
    copy: "The practical AI business support platform I wished I had while growing Bridgit — built to turn questions and challenges into clear next steps.",
    href: "https://any.guru/",
  },
];

const evidence = [
  {
    publisher: "Health Innovation Network",
    title: "Meet the Innovator: Bridgit Care",
    note: "The health-tech journey, the Manchester community team and the family experience behind Bridgit.",
    href: "https://thehealthinnovationnetwork.co.uk/archive/meet-the-innovator-bridgit-care/",
  },
  {
    publisher: "Innovate UK Business Connect",
    title: "Inclusive Innovation Award",
    note: "Recognition for shifting healthcare innovation towards unpaid family carers.",
    href: "https://iuk-business-connect.org.uk/projects/inclusive-innovation/bridgit-care/",
  },
  {
    publisher: "Social Care Institute for Excellence",
    title: "Carers assessment showcase",
    note: "A Department of Health and Social Care-backed webinar on digitally supported carers assessments and national deployment.",
    href: "https://www.scie.org.uk/innovation/showcase-webinars/carers-assessment-process/",
  },
  {
    publisher: "Carers Trust",
    title: "A strategic partnership for local services",
    note: "Carers Trust’s annual report records Bridgit as part of its Innovate to Transform work, giving Network Partners access to digital support alongside trusted local services.",
    href: "https://carers.org/downloads/carers-trust-report-accounts-2024-25.pdf",
  },
  {
    publisher: "Department for Work and Pensions",
    title: "Brum Chat in national guidance",
    note: "The government’s Crisis and Resilience Fund guidance features Brum Chat as a case study in mapping support and creating a clearer local front door.",
    href: crisisFundGuidanceUrl,
  },
  {
    publisher: "My UK Life",
    title: "Support for international recruits",
    note: "Personalised AI guidance, practical tools and local services for people making a new life in the UK.",
    href: "https://ai.myuk.life",
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
  award: "Innovate UK Inclusive Innovation Award",
  affiliation: [
    { "@type": "Organization", name: "Upstream Health", url: "https://www.upstream.health" },
    { "@type": "Organization", name: "Any Guru", url: "https://any.guru" },
    { "@type": "Organization", name: "My UK Life", url: "https://ai.myuk.life" },
  ],
  sameAs: [
    "https://uk.linkedin.com/in/darren-crombie",
    "https://bridgit.care/author/darren",
    "https://www.upstream.health/meet-the-team",
    "https://any.guru/",
    "https://ai.myuk.life/",
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
          <a href="#work">Work</a>
          <a href="#life">Life</a>
          <a href="#evidence">Proof</a>
        </nav>
        <a className="header-cta" href={calendlyUrl} target="_blank" rel="noreferrer">
          Book a call <Arrow />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#story">Story</a>
            <a href="#journey">Journey</a>
            <a href="#founder">Founder</a>
            <a href="#work">Work</a>
            <a href="#life">Life</a>
            <a href="#evidence">Proof</a>
            <a href={calendlyUrl} target="_blank" rel="noreferrer">Book a call ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">TECHNOLOGIST · FOUNDER · BUILDER</p>
          <h1>
            Tech is the thread.
            <br />
            <em>People are the point.</em>
          </h1>
          <p className="hero-intro">
            I’m Darren Crombie. I’ve spent my career turning ambitious
            technology into practical support for people — first inside big
            technology organisations, and now as a founder.
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
          <strong>2018</strong>
          <span>the founder chapter began</span>
        </div>
        <div>
          <strong>£1m+</strong>
          <span>innovation funding raised</span>
        </div>
        <div>
          <strong>180,000+</strong>
          <span>carers supported through Bridgit</span>
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
            starting companies of my own. Along the way I’ve led innovation
            projects, worked with brilliant people across sectors and learnt
            that progress rarely starts with the answer. Usually it starts with
            a better question — and the willingness to keep going when the
            route is not obvious.
          </p>
          <p>
            Today, most of my energy sits where AI, care and public services
            meet. It’s complicated, important work. That is exactly why I enjoy
            it.
          </p>
          <p className="source-note">
            The documented version of this journey begins with 15 years in
            health technology and a community nurse team in Manchester. The
            personal version begins with my family. Both led to the same place.
            <a
              href="https://thehealthinnovationnetwork.co.uk/archive/meet-the-innovator-bridgit-care/"
              target="_blank"
              rel="noreferrer"
            >
              Read the independent profile <Arrow />
            </a>
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
            help. The first spark was personal. My Grandad Doug had fallen at
            home and, without his alarm button, had to crawl to the door and
            shout for help. My mum Jacqueline was his primary carer. Their
            experience made the gap impossible to ignore.
          </p>
          <p>
            The early Upstream idea was broad preventative care. In 2019 we
            made a deliberate pivot: stop adding to the catalogue of tools for
            clinicians and focus on the millions of family carers holding care
            together every day. That decision became Bridgit.
          </p>
          <p>
            Across the ventures and programmes I have led, I have raised more
            than £1 million in innovation funding — including a documented
            SBRI Phase 2 award of nearly £700,000. I’m proud of the number, but
            prouder of what it represents: other people backing ideas with the
            potential to improve lives.
          </p>
          <p>
            By 2025, Bridgit had grown as large as we had originally planned.
            The strategic partnership with Carers Trust became the next key
            decision point. It moved the question from “how much more revenue
            can we grow?” to “how much more impact can local carer charities
            create if the cost of delivering support comes down?”
          </p>
          <div className="founder-actions">
            <a className="button-coral" href="https://bridgit.care" target="_blank" rel="noreferrer">
              Explore Bridgit Care <Arrow />
            </a>
            <a
              className="founder-source"
              href="https://thehealthinnovationnetwork.co.uk/wp-content/uploads/2021/06/Yorkshire-Humber-AHSN_Impact-Report_2020-21.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read the founder story <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="milestones" aria-labelledby="milestones-title">
        <div className="milestones-heading">
          <p className="section-label">THE DOCUMENTED JOURNEY</p>
          <h2 id="milestones-title">A few turning points that changed the direction.</h2>
          <p>
            These milestones are drawn from independent health innovation,
            government and sector sources — the public record behind the
            personal story.
          </p>
        </div>
        <div className="milestone-list">
          {milestones.map((milestone) => (
            <article className="milestone" key={milestone.year}>
              <p className="milestone-year">{milestone.year}</p>
              <h3>{milestone.title}</h3>
              <p>{milestone.copy}</p>
              <a href={milestone.href} target="_blank" rel="noreferrer">
                {milestone.source} <Arrow />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-principle" aria-labelledby="impact-title">
        <div className="impact-kicker">
          <p className="section-label">THE DECISION THAT MATTERS NOW</p>
          <span>180,000+</span>
          <small>carers supported</small>
        </div>
        <div className="impact-copy">
          <h2 id="impact-title">Grow the impact.<br />Reduce the cost.</h2>
          <p className="impact-lead">
            Bridgit is not trying to replace local carer charities. The aim is
            to put useful technology behind them, so their knowledge can reach
            more people without adding more administration or cost.
          </p>
          <p>
            The 2025 strategic partnership with Carers Trust gave that idea a
            national route. Together, the focus is affordable digital support,
            stronger evidence for funders and more time for local teams to do
            the deeply human work only they can do.
          </p>
          <p className="impact-belief">
            Success is not the size of the software business. It is the number
            of people and charities that can do more because the platform exists.
          </p>
          <div className="impact-actions">
            <a href="https://bridgit.care/carers-trust-partnership/blog" target="_blank" rel="noreferrer">
              Read the partnership story <Arrow />
            </a>
            <a href="https://carers.org/downloads/carers-trust-report-accounts-2024-25.pdf" target="_blank" rel="noreferrer">
              Carers Trust annual report <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="community-expansion" aria-labelledby="community-expansion-title">
        <div className="community-expansion-heading">
          <p className="section-label">FROM CARERS TO COMMUNITY IMPACT</p>
          <h2 id="community-expansion-title">
            We started with carers. The model now reaches much further.
          </h2>
        </div>
        <div className="community-expansion-copy">
          <p className="community-expansion-lead">
            One lesson from Bridgit has kept coming back: communities often do
            not lack support. The real problem is that people cannot see the
            whole picture or find the right door into it.
          </p>
          <p>
            Bridgit Care Local applies the same practical idea more widely.
            Brum Chat brings social care, housing, finances, wellbeing, work
            and local services together in one place, helping Birmingham
            residents find clear next steps and helping local organisations
            connect their support.
          </p>
          <div className="community-proof">
            <p className="section-label">RECOGNISED IN NATIONAL GUIDANCE</p>
            <p>
              In April 2026, government guidance for the Crisis and Resilience
              Fund featured Birmingham’s commissioning of Brum Chat as a case
              study in creating a single local front door, keeping the support
              map live, avoiding duplication and improving referrals.
            </p>
            <div className="community-actions">
              <a href="https://brum.chat" target="_blank" rel="noreferrer">
                Explore Brum Chat <Arrow />
              </a>
              <a href={crisisFundGuidanceUrl} target="_blank" rel="noreferrer">
                Read the GOV.UK case study <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="work-now" id="work">
        <div className="section-intro">
          <p className="section-label">04 / WHAT I’M BUILDING NOW</p>
          <h2>The mission is widening. The principle is not.</h2>
          <p>
            Start with a real problem. Listen properly. Use technology to make
            good support easier and more affordable to deliver — then measure
            success in lives improved, not revenue accumulated.
          </p>
        </div>
        <div className="work-grid">
          {currentWork.map((item, index) => (
            <a
              className="work-card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.name}
            >
              <span className="work-index">0{index + 1}</span>
              <p className="work-tag">{item.tag}</p>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
              <span className="work-link">Visit the project <Arrow /></span>
            </a>
          ))}
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
          <p className="section-label">05 / AWAY FROM WORK</p>
          <h2>The people — and places — that keep me grounded.</h2>
          <p>
            I’m a husband and dad to two brilliant kids. They are the home team,
            the honest feedback panel and some of my favourite adventure
            partners.
          </p>
        </div>
        <div className="life-grid">
          <figure className="life-photo life-photo-tall">
            <img src="/images/darren-summit.jpg" alt="Darren on a mountain summit" />
            <figcaption>Wild camping and high places</figcaption>
          </figure>
          <figure className="life-photo life-photo-wide">
            <img
              src="/images/family-adventure-line-art.webp"
              alt="Line illustration of Darren and his two children setting off on a family hike"
            />
            <figcaption>A family adventure — and a lot of kit</figcaption>
          </figure>
          <figure className="life-photo">
            <img
              src="/images/couple-live-music-line-art.webp"
              alt="Line illustration of Darren and his wife enjoying live music"
            />
            <figcaption>Live music and a great day out</figcaption>
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

      <section className="evidence" id="evidence">
        <div className="section-intro section-intro-light">
          <p className="section-label">06 / IN THE PUBLIC RECORD</p>
          <h2>The work, seen from the outside.</h2>
          <p>
            A selection of independent profiles, case studies, awards and
            speaking appearances. Useful if you want the evidence rather than
            the edited biography.
          </p>
        </div>
        <div className="evidence-grid">
          {evidence.map((item) => (
            <a
              className="evidence-card"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              <p>{item.publisher}</p>
              <h3>{item.title}</h3>
              <span>{item.note}</span>
              <strong>Open source <Arrow /></strong>
            </a>
          ))}
        </div>
      </section>

      <section className="watch" id="watch">
        <div className="section-intro section-intro-light">
          <p className="section-label">07 / WATCH & LISTEN</p>
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
        <p className="section-label">08 / SAY HELLO</p>
        <h2>Good things usually start with a conversation.</h2>
        <p>
          If you’re working on a human problem, exploring responsible AI or
          looking for a speaker who has built through the messy middle, I’d love
          to hear from you.
        </p>
        <div className="contact-actions">
          <a className="contact-link" href={calendlyUrl} target="_blank" rel="noreferrer">
            Book a 30-minute conversation <Arrow />
          </a>
          <a className="contact-secondary" href="https://bridgit.care" target="_blank" rel="noreferrer">
            Connect through Bridgit Care <Arrow />
          </a>
        </div>
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
