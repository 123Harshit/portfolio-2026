import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['contact', 'projects', 'experience', 'about']
    const onScroll = () => {
      const scrollPos = window.scrollY + 200
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveLink(`#${id}`)
          return
        }
      }
      setActiveLink('#')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__brand">HARSHIT</a>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`navbar__link ${activeLink === href ? 'navbar__link--active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>

        <a href={`${import.meta.env.BASE_URL}HARSHIT_SINGHAL_Resume.pdf`} download className="navbar__cta">
          Resume
        </a>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </nav>
  )
}
