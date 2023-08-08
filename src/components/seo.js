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
      <title>{title} | {seo.title}</title>
      {children}
    </div>
  )
}

export default Seo