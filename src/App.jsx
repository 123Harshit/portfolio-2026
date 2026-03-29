import { useState } from 'react'
import { createPortal } from 'react-dom'
import Navbar from './components/Navbar'
import './App.css'

function ImagePreview({ src, alt, className }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      className={`img-preview-wrap ${className || ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={src} alt={alt} className="img-preview-wrap__img" />
      {hover && createPortal(
        <div className="img-preview-backdrop">
          <div className="img-preview-popup">
            <img src={src} alt={alt} />
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <main className="main">
        {/* Hero */}
        <section className="hero">
          <div className="hero__blob" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__content">
            <h1 className="hero__title">
              Hi I'm <span className="hero__accent">Harshit</span>,<br />
              Software Engineer
            </h1>
            <p className="hero__subtitle">
              Building high-performance digital products at the intersection of
              robust architecture and seamless user experiences.
            </p>
            <div className="hero__actions">
              <a href="#projects" className="hero__btn hero__btn--primary">
                View Projects
              </a>
              <a href="mailto:singhalharshit70@gmail.com" className="hero__btn hero__btn--secondary">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero__badges">
            <span className="hero__badge">
              <span className="material-symbols-outlined">code</span> Frontend
            </span>
            <span className="hero__badge">
              <span className="material-symbols-outlined">brush</span> Interaction
            </span>
            <span className="hero__badge">
              <span className="material-symbols-outlined">terminal</span> Full-Stack
            </span>
            <span className="hero__badge">
              <span className="material-symbols-outlined">smart_toy</span> AI Integration
            </span>
            <span className="hero__badge">
              <span className="material-symbols-outlined">devices</span> React
            </span>
            <span className="hero__badge">
              <span className="material-symbols-outlined">architecture</span> Architecture
            </span>
          </div>
        </section>

        {/* Featured Project */}
        <section id="projects" className="featured">
          <div className="featured__container">
            <h2 className="featured__label">Featured Project</h2>
            <div className="featured__card">
              <div className="featured__card-visual">
                <ImagePreview src={`${import.meta.env.BASE_URL}Vidai-Platform-a.png`} alt="VidAI Platform Jobs Dashboard" className="featured__card-img-wrap" />
              </div>
              <div className="featured__card-info">
                <div className="featured__card-tags">
                  <span>React</span>
                  <span>Vite</span>
                  <span>ShadCN</span>
                  <span>Video.js</span>
                </div>
                <h3>VidAI Platform</h3>
                <p>
                  Full-stack orchestration platform for AI-powered video processing.
                  Built from scratch with scheduling modules, job management dashboards,
                  and dynamic configuration at FuboTV.
                </p>
                <a href="#experience" className="featured__card-link">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Works */}
        <section className="works">
          <div className="works__container">
            <h2 className="works__heading">Seen Recent Works</h2>
            <div className="works__grid">
              <div className="works__item works__item--tall">
                <ImagePreview src={`${import.meta.env.BASE_URL}Vidai-Indexation-a.png`} alt="VidAI Clip Master" className="works__item-img-wrap" />
                <div className="works__item-overlay">
                  <span className="works__item-label">VidAI Clip Master</span>
                  <span className="works__item-tag">React &middot; Video.js &middot; Vertex AI</span>
                </div>
              </div>
              <div className="works__item">
                <div className="works__item-bg works__item-bg--mock works__item-bg--graphql">
                  <div className="mock-graphql">
                    <div className="mock-graphql__node mock-graphql__node--1">
                      <div className="mock-node-title">User</div>
                      <div className="mock-node-field" />
                      <div className="mock-node-field" />
                      <div className="mock-node-field mock-node-field--short" />
                    </div>
                    <div className="mock-graphql__edge" />
                    <div className="mock-graphql__node mock-graphql__node--2">
                      <div className="mock-node-title">Post</div>
                      <div className="mock-node-field" />
                      <div className="mock-node-field mock-node-field--short" />
                    </div>
                    <div className="mock-graphql__edge mock-graphql__edge--2" />
                    <div className="mock-graphql__node mock-graphql__node--3">
                      <div className="mock-node-title">Comment</div>
                      <div className="mock-node-field" />
                    </div>
                  </div>
                </div>
                <div className="works__item-overlay">
                  <span className="works__item-label">GraphQL Schema Editor</span>
                  <span className="works__item-tag">React Flow &middot; Recoil &middot; Jest</span>
                </div>
              </div>
              <div className="works__item">
                <div className="works__item-bg works__item-bg--mock works__item-bg--auth">
                  <div className="mock-auth">
                    <div className="mock-auth__icon">
                      <span className="material-symbols-outlined">shield</span>
                    </div>
                    <div className="mock-auth__flow">
                      <div className="mock-auth__box">Okta</div>
                      <div className="mock-auth__arrow">→</div>
                      <div className="mock-auth__box mock-auth__box--active">AuthHub</div>
                    </div>
                    <div className="mock-auth__bars">
                      <div className="mock-auth__bar" style={{width: '80%'}} />
                      <div className="mock-auth__bar" style={{width: '65%'}} />
                      <div className="mock-auth__bar" style={{width: '90%'}} />
                    </div>
                  </div>
                </div>
                <div className="works__item-overlay">
                  <span className="works__item-label">Auth Migration</span>
                  <span className="works__item-tag">SAML &middot; OIDC &middot; Broadcom</span>
                </div>
              </div>
              <div className="works__item works__item--wide">
                <ImagePreview src={`${import.meta.env.BASE_URL}Vidai-Platform-b.png`} alt="VidAI Platform Scheduler" className="works__item-img-wrap" />
                <div className="works__item-overlay">
                  <span className="works__item-label">VidAI Scheduler</span>
                  <span className="works__item-tag">React &middot; ShadCN UI &middot; Cron</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="process">
          <div className="process__container">
            <h2 className="process__heading">How it works</h2>
            <div className="process__grid">
              <div className="process__step">
                <span className="process__number">01</span>
                <h3 className="process__step-title">Discover</h3>
                <p className="process__step-desc">
                  Deep-dive into requirements, user flows, and system architecture to map the full picture before writing a single line of code.
                </p>
              </div>
              <div className="process__step">
                <span className="process__number">02</span>
                <h3 className="process__step-title">Design</h3>
                <p className="process__step-desc">
                  Architect scalable component systems, define state management strategies, and prototype interactions with pixel-perfect precision.
                </p>
              </div>
              <div className="process__step">
                <span className="process__number">03</span>
                <h3 className="process__step-title">Deliver</h3>
                <p className="process__step-desc">
                  Ship production-ready code with comprehensive testing, performance optimization, and seamless CI/CD integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="experience">
          <div className="experience__container">
            <h2 className="experience__heading">Experience</h2>

            <div className="experience__timeline">
              <div className="experience__item">
                <div className="experience__date-col">
                  <p className="experience__date experience__date--active">Aug 2024 — Present</p>
                  <p className="experience__type">Full-Time</p>
                </div>
                <div className="experience__detail">
                  <h3 className="experience__role">
                    Software Engineer — Web @ FuboTV
                    <span className="material-symbols-outlined experience__arrow">north_east</span>
                  </h3>
                  <p className="experience__location">Bengaluru, India</p>

                  <div className="experience__project">
                    <h4>Video Curation &amp; Annotation Tools (Moments Curation &amp; VidAI Indexation)</h4>
                    <ul className="experience__list">
                      <li>Built "VidAI Clip Master" — a React video annotation tool for reviewing AI-generated sports clips. Custom Video.js player with offset and trimmer plugins streams specific segments from multi-hour HLS sources without loading the full file.</li>
                      <li>Wrote time-series logic so annotators can extend clip boundaries by +/- 10s and adjust trim points visually, all without re-initializing the player or triggering DOM re-renders.</li>
                      <li>Built the review UI with accordion grouping for shared segments, variable playback speeds (1x–4x), and optimistic updates — cut down the QA team's annotation turnaround time.</li>
                      <li>Hooked up synchronized transcripts with word-level highlighting and Vertex AI for auto-generating clip titles, saving the team significant manual metadata work.</li>
                      <li>Built a separate clip curation tool using ShadCN UI and Fubo's internal PlayerWeb (Shaka Player) for authenticated playback, with drag-and-drop playlist management.</li>
                      <li>Designed the end-to-end workflow: filter AI clips → verify in player → add to new or existing playlists.</li>
                      <li>Designed a real-time telemetry system capturing 9 user interaction events (session lifecycle, publish, clip CRUD, trim, title edits, tag mutations) with discriminated union TypeScript types. Used localStorage-persisted session state and differential tag change detection across three update flows.</li>
                      <li>Built an audit telemetry dashboard with color-coded episode tables, per-episode event timelines in accordion UI with type-specific detail views (clip manifests, edit history chains, tag diffs) and client-side summary cards.</li>
                    </ul>
                  </div>

                  <div className="experience__project">
                    <h4>VidAI Platform — Video Pipeline Orchestration Tool</h4>
                    <ul className="experience__list">
                      <li>Built the entire frontend from scratch for VidAI Platform using React (Vite), fetch-based API layer, and SSO auth via internal SDK.</li>
                      <li>Set up a shared component library on top of ShadCN UI with custom theming, used across all platform screens for consistent look and feel.</li>
                      <li>Designed multi-step forms for Pod Templates (with version management) and Job Templates (dynamic pod config) — the core building blocks of the pipeline system.</li>
                      <li>Built two scheduling interfaces: Auto-Scheduler (calendar UI + cron rules for upcoming shows) and Manual Scheduler (program calendar for running jobs on past events).</li>
                      <li>Created the Jobs Dashboard with filters, search, and group-by functionality. Used nested accordion tables so users can drill into individual pod statuses within each job.</li>
                      <li>Added a "Visualize" screen using Video.js to preview video streams alongside generated metadata like thumbnails. Built a global timezone selector (React Context + localStorage) for app-wide consistency.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="experience__item">
                <div className="experience__date-col">
                  <p className="experience__date">Feb 2021 — Aug 2024</p>
                </div>
                <div className="experience__detail">
                  <h3 className="experience__role">
                    Software Engineer II @ Deloitte (Hashedin)
                  </h3>
                  <p className="experience__location">Gurgaon &middot; Promoted from Intern &amp; SE I</p>
                  <ul className="experience__list">
                    <li><strong>Auth Migration (Broadcom):</strong> Owned the final phase of migrating Broadcom's apps from Okta to AuthHub — reconfigured SAML/OIDC flows and tenant secrets for both federated and non-federated users across multiple applications.</li>
                    <li><strong>GenAI &amp; Office Plugins:</strong> Built the frontend for an AI-powered FAQ tool in React TS. Also created Excel and PowerPoint plugins that used GPT-4 (32k) to generate slide content and derive complex formulas automatically.</li>
                    <li><strong>GraphQL Schema Editor:</strong> Built a visual schema editor using React Flow and Recoil with 80%+ test coverage (Jest). Separately, built Angular components with PrimeNG for S3 uploads with ClamAV virus scanning.</li>
                    <li><strong>Internship:</strong> Built an onboarding portal for HashedIn University with React and charting libraries — gave new hires interactive dashboards to track their progress.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Augmented Development */}
        <section id="about" className="ai-dev">
          <div className="ai-dev__container">
            <div className="ai-dev__header">
              <span className="ai-dev__icon">
                <span className="material-symbols-outlined">auto_awesome</span>
              </span>
              <h2 className="ai-dev__heading">AI-Augmented Development</h2>
              <p className="ai-dev__subtitle">
                I actively integrate AI into my daily engineering workflow — not as a gimmick, but as a force multiplier for shipping faster and better.
              </p>
            </div>
            <div className="ai-dev__grid">
              <div className="ai-dev__card">
                <div className="ai-dev__card-icon">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <h3>AI Coding Tools</h3>
                <p>
                  Actively use <strong>Claude Code</strong>, <strong>Cursor</strong>, and <strong>Gemini</strong> as part of my daily frontend workflow — from scaffolding components and debugging tricky edge cases to writing tests and refactoring legacy code faster.
                </p>
              </div>
              <div className="ai-dev__card">
                <div className="ai-dev__card-icon">
                  <span className="material-symbols-outlined">design_services</span>
                </div>
                <h3>AI-Powered Design</h3>
                <p>
                  Use <strong>Figma Make (AI)</strong> to go from a PRD straight to polished UI designs for internal tools, then iterate rapidly without waiting on a dedicated design cycle. Significantly sped up idea-to-prototype timelines.
                </p>
              </div>
              <div className="ai-dev__card ai-dev__card--highlight">
                <div className="ai-dev__card-icon">
                  <span className="material-symbols-outlined">account_tree</span>
                </div>
                <h3>Automated Bug-Fix Pipeline</h3>
                <p>
                  Set up an end-to-end automated pipeline using <strong>MCPs (Model Context Protocol servers)</strong>: when a Slack message tags me with a bug, Claude reads the issue, writes the fix, and raises a PR. Turned a 2–3 hour cycle into minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="skills">
          <div className="skills__container">
            <div className="skills__inner">
              <div className="skills__grid">
                <div className="skills__column">
                  <h3 className="skills__column-title">
                    <span className="material-symbols-outlined">layers</span> Frontend
                  </h3>
                  <div className="skills__tags">
                    {['React', 'Angular', 'TypeScript', 'JavaScript', 'Video.js', 'ShadCN UI', 'React Flow', 'Redux / Recoil'].map(s => (
                      <span key={s} className="skills__tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skills__column">
                  <h3 className="skills__column-title">
                    <span className="material-symbols-outlined">database</span> Backend
                  </h3>
                  <div className="skills__tags">
                    {['Node.js', 'GraphQL', 'SAML / OIDC', 'REST APIs', 'PostgreSQL'].map(s => (
                      <span key={s} className="skills__tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skills__column">
                  <h3 className="skills__column-title">
                    <span className="material-symbols-outlined">construction</span> Infrastructure
                  </h3>
                  <div className="skills__tags">
                    {['Vite', 'Jest', 'Git', 'CI/CD', 'AWS', 'Docker'].map(s => (
                      <span key={s} className="skills__tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="cta">
          <div className="cta__blob" />
          <h2 className="cta__title">
            Let's Make It <span className="cta__accent">Happen</span>
          </h2>
          <p className="cta__subtitle">
            Currently open to opportunities and technical collaborations.
            Let's build something impactful together.
          </p>
          <div className="cta__actions">
            <a href="mailto:singhalharshit70@gmail.com" className="cta__btn">
              singhalharshit70@gmail.com
              <span className="material-symbols-outlined">send</span>
            </a>
            <a href="https://www.linkedin.com/in/harshit-singhal-56944a182/" target="_blank" rel="noopener noreferrer" className="cta__link">
              LinkedIn <span className="material-symbols-outlined">north_east</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">HARSHIT</div>
          <p className="footer__copy">&copy; 2026 Harshit Singhal. Built with precision.</p>
          <div className="footer__links">
            <a href="mailto:singhalharshit70@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/harshit-singhal-56944a182/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
