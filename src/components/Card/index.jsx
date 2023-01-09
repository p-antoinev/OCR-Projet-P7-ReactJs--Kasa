//Style
import './card.css'

function Card({ id, title, cover }) {
    return (
        <div key={id} className='card' >
            <img src={cover} alt={`${title}`} className='card--img'/>
            <h2 className='card--title'>{title}</h2>
        </div>
    )
}


// export to HousingList
export default Card