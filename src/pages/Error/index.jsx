//style
import '../../styles/components/error.css'
//Composant
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main className='error--main'>
            <p className='error--404'>404</p>
            <p className='error--text'>Oups! La page que vous demandez n'exite pas.</p>
            <Link className='error--link' to='/'>Retourner sur la page d'accueil</Link>
        </main>
        
    )
}

export default Error