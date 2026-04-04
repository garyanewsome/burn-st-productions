import React, { useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          padding: `1.2rem 5%`,
          background: `rgba(2, 6, 23, 0.75)`,
          backdropFilter: `blur(16px)`,
          WebkitBackdropFilter: `blur(16px)`,
          borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
          transition: `all 0.3s ease`,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: `1.5rem`,
            fontWeight: 800,
            textDecoration: `none`,
            color: `var(--color-text)`,
            letterSpacing: `-0.03em`,
            zIndex: 101 // sit above overlay
          }}
          onClick={closeMenu}
        >
          {siteTitle}
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-menu-desktop">
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ zIndex: 101 }} // sit above overlay
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  )
}

export default Header
