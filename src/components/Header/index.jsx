import { Link } from 'react-router-dom'
import '../../styles/components/header.css'
import logoHeader from '../../assets/img/LOGO.png'
import '../../styles/globalStyle.css'

function Header() {
    return (
        <header>
            <img src={logoHeader} alt="logo kasa" />
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>
    )
}

export default Header