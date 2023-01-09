//Style
import './profilPicture.css'

function ProfilPicture({ src, alt}) {
    return(
        <img className='profil-picture' src={src} alt={alt} />
    )
}

// Export to |-src|-pages|-Housing
export default ProfilPicture