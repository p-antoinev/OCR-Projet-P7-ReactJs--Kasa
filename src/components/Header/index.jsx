//Style
import './header.css'
import '../../styles/globalStyle.css'
//React tools
import { Link } from 'react-router-dom'
//Component
import logoHeader from '../../assets/img/LOGO.png'

//onclick cf redirect

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="logo kasa" />
      <nav>
        <Link to="/" className="header--link ">
          Acceuil
        </Link>
        <Link to="/about" className="header--link ">
          À Propos
        </Link>
      </nav>
    </header>
  )
}

// Export to |-src |-index.jsx
export default Header
