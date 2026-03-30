import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <div style={{ padding: '6rem 5%', maxWidth: '800px', margin: '0 auto', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', textAlign: 'center' }}>
          Let's Work Together
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: '4rem' }}>
          Ready to elevate your sound? Drop us a line and tell us about your project.
        </p>

        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          style={{
            background: 'var(--color-surface)',
            padding: '4rem',
            borderRadius: 'var(--border-radius)',
            border: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}
        >
          {/* Hidden field for Netlify Form Handling integration */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Name / Artist Name</label>
            <input type="text" id="name" name="name" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem' }} />
          </div>

          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Email Address</label>
            <input type="email" id="email" name="email" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem' }} />
          </div>

          <div>
            <label htmlFor="project" style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Project Type</label>
            <select id="project" name="project" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem', appearance: 'none' }}>
              <option value="Full Production" style={{ background: '#020617' }}>Full-Service Production</option>
              <option value="Mixing & Mastering" style={{ background: '#020617' }}>Mixing & Mastering</option>
              <option value="Session Work" style={{ background: '#020617' }}>Session Tracking / Writing</option>
              <option value="Other" style={{ background: '#020617' }}>Other (Please Specify)</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: '#fff', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>Project Details & Links</label>
            <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1rem', resize: 'vertical' }}></textarea>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
