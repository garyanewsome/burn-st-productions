import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          // Removed constraints to allow full bleed sections (like Hero)
          paddingTop: `0`, // Managed per page or via main padding
          minHeight: `100vh`,
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <main style={{ flexGrow: 1 }}>{children}</main>
        <footer
          style={{
            marginTop: `auto`,
            padding: `3rem 5%`,
            textAlign: `center`,
            color: `var(--color-text-muted)`,
            fontSize: `0.875rem`,
            borderTop: `1px solid rgba(255,255,255,0.05)`,
            background: `var(--color-background)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Music Production Company. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default Layout
