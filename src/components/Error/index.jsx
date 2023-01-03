import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <div>404</div>
            <h1>Oups! La page que vous demandez n'exite pas.</h1>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
        
    )
}

export default Error