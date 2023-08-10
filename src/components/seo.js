import * as React from 'react'
import useSiteMetadata from "../hooks/use-site-metadata"

const Seo = ({ title, description, children }) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: siteUrl,
  }

  return (
    <div>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </div>
  )
}

export default Seo