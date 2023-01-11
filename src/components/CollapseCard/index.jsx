//Style & Img
import './collapseCard.css'
import arrowImg from '../../assets/img/Vector.svg'
//Icon

//Module
import {useState} from 'react'


function CollapseCard({ title, text }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='collapse--card' >
                <div className='collapse--card--title'>
                    {title}
                    <button onClick={() => setIsOpen(false)} className='button button--open'>
                       <img className='arrow-collapse' src={arrowImg} alt="flêche" />
                    </button>
                </div>
                <div className='collapse--card--text'>{text}</div>
        </div>
        
    ) : (   
        <div className='collapse--card' >
                <div className='collapse--card--title'>
                    {title}
                    <button onClick={() => setIsOpen(true)} className='button button--close'>
                        <img className='arrow-collapse' src={arrowImg} alt="flêche" />
                    </button>
                </div>
        </div>
    )
}

// Export to |-src|-components|-CharterList
export default CollapseCard