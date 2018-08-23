import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 style={{color: 'tomato'}}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/logic/">Go to logic page</Link>
  </div>
)

export default IndexPage