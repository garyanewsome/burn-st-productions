import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Releases from "../data/projects.json"

const sortedReleases = [...Releases].sort((a, b) => Number(b.year) - Number(a.year));

const ProjectsPage = () => (
  <Layout>
    <div style={{ padding: '6rem 5%', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Projects</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '4rem' }}>
        A curated collection of original studio releases, in-house collaborations, and client production work.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2.5rem'
      }}>
        {sortedReleases.map(release => (
          <div key={release.id} style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--border-radius)',
            padding: '2rem',
            border: '1px solid rgba(255,255,255,0.05)',
            transition: 'all 0.3s ease'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
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
    </div>
  </Layout>
)

export const Head = () => <Seo title="Releases - Projects" />

export default ProjectsPage
