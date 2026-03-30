import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import heroBg from "../images/hero_bg.png"

const IndexPage = () => (
  <Layout>
    {/* Hero Section */}
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.4), var(--color-background)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        textAlign: 'center',
        padding: '0 5%',
        marginTop: '-80px', // Compensate for header to be fully full bleed
      }}
    >
      <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
        Sonic Excellence. <br />
        <span className="text-gradient">Redefined.</span>
      </h1>
      <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '700px', lineHeight: 1.6 }}>
        We are a premier music production group crafting chart-topping hits, bespoke soundscapes, and immersive audio experiences for artists worldwide.
      </p>
      <a href="#projects" className="btn-primary">
        Explore Our Sound
      </a>

      {/* Scroll Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          animation: 'bounce 2s infinite'
        }}
      >
        <a href="#projects" style={{ color: 'var(--color-primary)', fontSize: '2rem', textDecoration: 'none' }}>
          &#x2193;
        </a>
      </div>
    </div>

    {/* Latest Projects Section */}
    <div id="projects" style={{ padding: '6rem 5%', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Latest Projects</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', fontSize: '1.1rem' }}>
        A spotlight on our most recent collaborations and projects.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        width: '100%'
      }}
      >
        {/* Mock Project Cards */}
        {[1, 2, 3].map((item) => (
          <div key={item} style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--border-radius)',
            padding: '2rem',
            border: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'left',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'transform 0.3s ease',
            cursor: 'default',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{
              height: '250px',
              background: `linear-gradient(45deg, var(--color-background), rgba(139, 92, 246, 0.2))`,
              borderRadius: '8px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.02)'
            }}>
              <span style={{ color: 'var(--color-primary)', opacity: 0.5, fontSize: '3rem' }}>&#9835;</span>
            </div>
            <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>Neon Dreams Vol. {item}</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Co-produced and mixed this multi-platinum electronic record, pushing the boundaries of analog synthesis.
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <Link to="/projects" className="btn-primary" style={{ padding: '0.8rem 2.5rem', fontSize: '1rem', textDecoration: 'none' }}>
          View All Projects
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
