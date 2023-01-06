import '../../styles/components/banner.css'

function Banner(props) {
    return(
        <section className='banner'>
            <img src={props.src} alt={props.alt} className='banner--img'/>
            <h1 className='banner--text'>{props.text}</h1>
        </section>
    )
}

export default Banner