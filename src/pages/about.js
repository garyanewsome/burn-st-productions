import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import teamPlaceholder from "../images/example.png"

import aboutData from "../data/about.json"

const { teamMembers, servicesList } = aboutData;

const AboutPage = () => (
  <Layout>
    <div style={{ padding: '6rem 5%', maxWidth: '100%', margin: '0 auto', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '4rem', textAlign: 'center' }}>
        Meet The Group
      </h1>

      {/* Team Cards Section */}
      <div className="team-grid">
        {teamMembers.map((member, i) => (
          <div key={i}
            style={{
              background: 'var(--color-surface)',
              borderRadius: 'var(--border-radius)',
              border: '1px solid rgba(255,255,255,0.05)',
              overflow: 'hidden',
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
            }}
          >
            <div style={{
              height: '240px',
              backgroundImage: member.image ? `url(${require(`../images/${member.image}`).default || require(`../images/${member.image}`)})` : `url(${teamPlaceholder})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              filter: 'grayscale(50%) brightness(0.8)',
              transition: 'filter 0.3s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%) brightness(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(50%) brightness(0.8)';
              }}
            />
            <div style={{ padding: '2rem' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff', fontSize: '1.5rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>
                {member.role}
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '1rem', marginTop: '1.2rem', marginBottom: 0 }}>
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'var(--color-surface)',
        padding: '3rem',
        borderRadius: 'var(--border-radius)',
        border: '1px solid rgba(255,255,255,0.05)',
        lineHeight: 1.8,
        fontSize: '1.1rem',
        color: 'var(--color-text-muted)'
      }}>
        <p style={{ marginBottom: '2rem' }}>
          <strong style={{ color: '#fff' }}>Sonic Excellence</strong> is not just a tagline; it's the ethos that drives our multi-platinum production collective. Founded in 2018 in the heart of the creative district, our group brings together award-winning producers, mixing engineers, and sound designers.
        </p>

        <p style={{ marginBottom: '2rem' }}>
          We specialize in crafting bespoke audio experiences across genres. Our studio is built around state-of-the-art digital processing, giving us limitless possibilities, pristine clarity, and absolute precision over your final sound.
        </p>

        <h3 style={{ color: '#fff', fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Our Services</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {servicesList.map((service, i) => (
            <li key={i} style={{ padding: '1.2rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center' }}>
              <span style={{ color: 'var(--color-primary)', marginRight: '1rem', fontSize: '1.2rem' }}>✦</span>
              <span style={{ color: '#fff', fontWeight: 600 }}>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="About & Team" />

export default AboutPage
