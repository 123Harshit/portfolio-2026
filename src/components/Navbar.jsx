import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: 'mailto:singhalharshit70@gmail.com' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const contentRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="nav-header">
      <div
        className={`nav-container ${open ? 'nav-container--open' : ''}`}
      >
        {/* Top bar */}
        <div className="nav-bar">
          <a href="#" className="nav-brand" aria-label="Home" onClick={() => setOpen(false)}>
            <span className="nav-brand__text">Harshit Singhal</span>
          </a>

          <div className="nav-bar__right">
            {/* Theme toggle */}
            <button
              className="nav-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <div className="nav-theme-toggle__bg" />
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Hamburger / Close */}
            <button
              className="nav-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <div className="nav-toggle__bg" />
              {open ? (
                <>
                  <span className="nav-toggle__x nav-toggle__x--1" />
                  <span className="nav-toggle__x nav-toggle__x--2" />
                </>
              ) : (
                <>
                  <span className="nav-toggle__line nav-toggle__line--1" />
                  <span className="nav-toggle__line nav-toggle__line--2" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Expandable content */}
        <div
          className={`nav-panel ${open ? 'nav-panel--open' : ''}`}
          ref={contentRef}
        >
          <div className="nav-panel__inner">
            <div className="nav-panel__grid">
              <div className="nav-panel__links">
                <nav className="nav-panel__nav">
                  {navLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="nav-panel__link"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="nav-panel__card">
                <div className="nav-panel__card-inner">
                  <div className="nav-panel__card-content">
                    <h3 className="nav-panel__card-title">Software Engineer</h3>
                    <p className="nav-panel__card-text">
                      Building performant web apps with React, TypeScript, and modern tooling.
                      Currently at FuboTV working on video AI platforms.
                    </p>
                    <a href="mailto:singhalharshit70@gmail.com" className="nav-panel__card-btn">
                      <span className="nav-panel__card-btn-dot" />
                      <span>Get in Touch</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-panel__footer">
              <div className="nav-panel__footer-left">
                <p className="nav-panel__footer-text">Bengaluru, India</p>
              </div>
              <div className="nav-panel__footer-mid">
                <p className="nav-panel__footer-text">FuboTV — 2024–Present</p>
              </div>
              <div className="nav-panel__footer-right">
                <a
                  className="nav-panel__footer-link"
                  href="https://www.linkedin.com/in/harshit-singhal-56944a182/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  <span className="nav-panel__footer-dot" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
