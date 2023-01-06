import Data from '../../assets/data/Logement.json'
import '../../styles/components/card.css'

function Card() {
    return (
        <div className='card--background'>
            {Data.map((item) => (
                <div key={ item.id } className='card'>
                    <img src={item.pictures[0]} alt="logement" className='card--img'/>
                    <h1 className='card--title'>{item.title}</h1>
                </div>
            ))}
        </div>
    )
}

export default Card