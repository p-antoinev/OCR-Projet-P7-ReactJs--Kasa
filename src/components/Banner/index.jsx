import './banner.css'

function Banner({ src, alt, text }) {
    return(
        <div className='banner-container' >
            <img src={src} alt={alt} className='banner--img' />
            <h1 className='banner--text'>{text}</h1>
        </div>
    )
}

// Export to |-src|-pages|-Home
// Export to |-src-|-pages|-About
export default Banner