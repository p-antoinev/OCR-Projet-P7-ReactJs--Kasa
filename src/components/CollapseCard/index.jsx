//Style
import './collapseCard.css'
//Icon
import { FaAngleUp } from "react-icons/fa";
//Module
import {useState} from 'react'


function CollapseCard({ title, text }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='collapse--card' >
                <h1 className='collapse--card--title'>
                    {title}
                    <button onClick={() => setIsOpen(false)} className='button button--open'>
                        <FaAngleUp />
                    </button>
                </h1>
                <p className='collapse--card--text'>{text}</p>
        </div>
        
    ) : (   
        <div className='collapse--card' >
                <h1 className='collapse--card--title'>
                    {title}
                    <button onClick={() => setIsOpen(true)} className='button button--close'>
                        <FaAngleUp />
                    </button>
                </h1>
        </div>
    )
}

// Export to |-src|-components|-CharterList
export default CollapseCard