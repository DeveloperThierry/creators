import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main>
        <h1>Page Not Found</h1>
        <Link to="/">
            <button>Go Back Home</button>
        </Link>
    </main>
  )
}

export default NotFound