import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
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
      }}
    >
      {siteTitle}
      <span style={{ color: `var(--color-primary)` }}>.</span>
    </Link>
    <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  </header>
)

export default Header
