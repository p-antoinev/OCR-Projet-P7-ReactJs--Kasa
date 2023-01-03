import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/about">À Propos</Link>
        </nav>
    )
}

export default Header