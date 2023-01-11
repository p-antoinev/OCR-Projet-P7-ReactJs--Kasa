import './banner.css'

function Banner(props) {
    return(
        <div className='banner-container' >
            <img src={props.src} alt={props.alt} className='banner--img'/>
            <h1 className='banner--text'>{props.text}</h1>
        </div>
    )
}

// Export to |-src|-pages|-Home
// Export to |-src-|-pages|-About
export default Banner