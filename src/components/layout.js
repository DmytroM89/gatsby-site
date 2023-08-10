import * as React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-metadata'


const Layout = ({ pageTitle, children }) => {
  const siteMeta = useSiteMetadata()

  return (
    <div className='container mx-auto w-[600px]'>
      <header className='text-6xl font-bold mt-4 mb-8 text-purple-700'>{siteMeta.title}</header>
      <nav className='mb-4'>
        <ul className='flex align-middle justify-around'>
          <li>
            <Link to="/" className='text-blue-600 font-semibold underline hover:text-green-600'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='text-blue-600 font-semibold underline hover:text-green-600'>About</Link>
          </li>
          <li>
            <Link to="/blog" className='text-blue-600 font-semibold underline hover:text-green-600'>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className='text-2xl font-semibold mb-4'>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout