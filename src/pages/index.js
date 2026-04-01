import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import heroBg from "../images/hero_group_optimized.jpg"
import Releases from "../data/projects.json"

const recentReleases = [...Releases].sort((a,b) => Number(b.year) - Number(a.year)).slice(0, 3);

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
        {/* Dynamic Recent Projects */}
        {recentReleases.map((release) => (
          <div key={release.id} style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--border-radius)',
            padding: '2rem',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            textAlign: 'left'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            }}
          >
            <div style={{
              position: 'relative',
              aspectRatio: '1 / 1',
              width: '100%',
              backgroundImage: release.image ? `url(${require(`../images/${release.image}`).default || require(`../images/${release.image}`)})` : `linear-gradient(135deg, rgba(255,255,255,0.02), rgba(139,92,246,0.1))`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.02)'
            }}>
              {!release.image && (
                <span style={{ fontSize: '2rem', opacity: 0.5, textAlign: 'center', padding: '0 1rem', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
                  {release.title}
                </span>
              )}
              {release.coming_soon && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(234, 179, 8, 0.95)',
                  color: '#0f172a',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '30px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                  WebkitBackdropFilter: 'blur(4px)',
                  backdropFilter: 'blur(4px)'
                }}>
                  Coming Soon
                </div>
              )}
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{release.title}</h2>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '1rem', fontWeight: 400 }}>
              {release.artist} <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginLeft: '0.3rem' }}>• {release.year}</span>
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              {release.role.join(', ')}
            </div>
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
