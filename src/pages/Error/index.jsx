//Style
import './error.css'
//React Tools
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Error() {
  useEffect(() => {
    document.title = 'Page non trouvé'
  })
  return (
    <main className="error--main">
      <p className="error--404">404</p>
      <p className="error--text">
        Oups! La page que vous demandez n'exite pas.
      </p>
      <Link className="error--link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </main>
  )
}

// Export to |-src|-index.jsx
export default Error
