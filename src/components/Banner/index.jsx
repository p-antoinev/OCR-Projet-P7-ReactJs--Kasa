import '../../styles/components/banner.css'

function Banner(props) {
    return(
        <section>
            <img src={props.src} alt={props.alt} />
            <h1>{props.text}</h1>
        </section>
    )
}

export default Banner