import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="hero" className="hero">
        <div className="hero__container">
          <div className="hero__badge">Software Engineer — Web</div>
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Harshit Singhal</span>
          </h1>
          <p className="hero__subtitle">
            Adaptable Software Engineer skilled in creating efficient code and exciting
            user experiences. From conception through post-release support — I build
            software that drives engagement.
          </p>
          <div className="hero__actions">
            <a href="mailto:singhalharshit70@gmail.com" className="btn btn--primary">
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-singhal-56944a182/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
          <div className="hero__meta">
            <span>Bengaluru, India</span>
            <span className="hero__separator">·</span>
            <span>singhalharshit70@gmail.com</span>
            <span className="hero__separator">·</span>
            <span>+91 8533888387</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section__container">
          <h2 className="section__title">About</h2>
          <div className="about__grid">
            <div className="about__card">
              <div className="about__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <h3>Frontend Architecture</h3>
              <p>Building complex, performant React applications from scratch — including video platforms, annotation tools, and scheduling interfaces.</p>
            </div>
            <div className="about__card">
              <div className="about__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Full-Stack Capable</h3>
              <p>Experienced with Node.js, GraphQL, authentication protocols (SAML/OIDC), and backend service integration.</p>
            </div>
            <div className="about__card">
              <div className="about__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 0-4 4c0 2.5 4 6 4 6s4-3.5 4-6a4 4 0 0 0-4-4z" />
                  <circle cx="12" cy="14" r="1" />
                  <path d="M20.59 16.45A2 2 0 0 1 22 18.38V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.62a2 2 0 0 1 1.41-1.93l6-1.8a2 2 0 0 1 1.18 0l6 1.8z" />
                </svg>
              </div>
              <h3>AI Integration</h3>
              <p>Experience integrating Vertex AI, GPT-4, and LLM-based tools into production applications for content generation and automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section section--alt">
        <div className="section__container">
          <h2 className="section__title">Experience</h2>

          <div className="timeline">
            {/* FuboTV */}
            <div className="timeline__item">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">Software Engineer — Web</h3>
                  <div className="timeline__company">FuboTV</div>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__date">Aug 2024 — Present</span>
                  <span className="timeline__location">Bengaluru, India</span>
                </div>
              </div>

              <div className="timeline__project">
                <h4>VidAI Platform Orchestration & Architecture</h4>
                <ul>
                  <li>Spearheaded from-scratch frontend development for the VidAI Platform using React (Vite), ShadCN UI, and internal SSO SDK.</li>
                  <li>Designed complex multi-step forms for Pod Templates and Job Templates with dynamic configuration.</li>
                  <li>Built two scheduling modules: Auto-Scheduler with calendar UI and cron-based rules, and Manual Scheduler for ad-hoc jobs.</li>
                  <li>Constructed interactive Jobs Dashboard with advanced filters, search, and nested accordion tables.</li>
                  <li>Integrated Video.js for playback alongside generated metadata; engineered global Time Zone Selector with React Context API.</li>
                </ul>
              </div>

              <div className="timeline__project">
                <h4>Video Curation & Annotation Tools</h4>
                <ul>
                  <li>Architected "VidAI Clip Master" — a React video annotation platform with custom Video.js offset and trimmer plugins for HLS streaming.</li>
                  <li>Implemented complex time-series logic for seamless buffer extension without player re-initialization.</li>
                  <li>Built high-performance UI with dynamic accordion grouping, variable playback speeds (1x-4x), and optimistic state updates.</li>
                  <li>Integrated synchronized interactive transcripts with word-level highlighting and Vertex AI APIs for LLM-based title generation.</li>
                  <li>Developed clip curation platform with ShadCN UI, Shaka Player integration, and drag-and-drop playlist management.</li>
                </ul>
              </div>
            </div>

            {/* Deloitte */}
            <div className="timeline__item">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">Software Engineer II</h3>
                  <div className="timeline__company">Deloitte (Hashedin) <span className="timeline__note">— Promoted from Intern & SE I</span></div>
                </div>
                <div className="timeline__meta">
                  <span className="timeline__date">Feb 2021 — Aug 2024</span>
                  <span className="timeline__location">Gurgaon</span>
                </div>
              </div>

              <ul className="timeline__list">
                <li><strong>Auth Migration (Broadcom):</strong> Spearheaded identity migration (Okta to AuthHub) across Broadcom's suite, reconfiguring SAML/OIDC protocols.</li>
                <li><strong>GenAI & Office Plugins:</strong> Led frontend for AI-driven FAQ tool (React TS) and MS Office plugins utilizing GPT-4 (32k) for automated content generation.</li>
                <li><strong>Frontend Architecture:</strong> Built internal GraphQL schema editor using React Flow and Recoil with 80%+ test coverage. Built Angular components with PrimeNG for secure S3 uploads with ClamAV scanning.</li>
                <li><strong>Internship:</strong> Designed onboarding portal for HashedIn University with React and interactive data visualizations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section__container">
          <h2 className="section__title">Skills</h2>
          <div className="skills__grid">
            {[
              'React', 'Angular', 'TypeScript', 'JavaScript',
              'React Native', 'Video.js', 'Node.js', 'GraphQL',
              'Redux', 'Recoil', 'HTML & CSS', 'ShadCN UI',
              'Jest', 'SAML / OIDC', 'React Flow', 'Vite',
            ].map((skill) => (
              <div key={skill} className="skills__tag">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="section section--alt">
        <div className="section__container">
          <h2 className="section__title">Education</h2>
          <div className="education__card">
            <div className="education__header">
              <div>
                <h3>Bachelors of Technology — CSE</h3>
                <p className="education__school">Jaypee Institute of Information Technology, Noida</p>
              </div>
              <div className="education__meta">
                <span className="education__date">Graduated Jan 2021</span>
                <span className="education__gpa">GPA: 8.1 / 10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__left">
            <span className="footer__logo">harshit<span className="footer__dot">.</span></span>
            <span className="footer__copy">&copy; 2026 Harshit Singhal</span>
          </div>
          <div className="footer__right">
            <a href="mailto:singhalharshit70@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/harshit-singhal-56944a182/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
