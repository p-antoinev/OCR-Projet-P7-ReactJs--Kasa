import '../../styles/components/card.css'

function Card({ id, title, img }) {
    return (
        <div key={id} className='card' >
            <img src={img} alt={`${title}`} className='card--img'/>
            <h2 className='card--title'>{title}</h2>
        </div>
    )
}


// export to HousingList
export default Card