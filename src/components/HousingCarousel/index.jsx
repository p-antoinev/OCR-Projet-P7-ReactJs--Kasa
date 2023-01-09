//Style & img
import './houseCarousel.css'
import nextSlideImg from '../../assets/img/Vector_next.svg'
import prevSlideImg from '../../assets/img/Vector_prev.svg'
//React Tools
import { useState } from 'react'


function HousingCarousel( { img } ) {
    
    const numberPicture = img.length
    const firstPicture = img[0]
    const lastPicture = img[numberPicture -1]
    const [currentPicture, setCurrentPicture] = useState(firstPicture)
    const pictureIndex = img.indexOf(currentPicture)
    //<div>{img.indexOf(currentPicture) +1} / {numberPicture}</div>

    const nextSlide = () => {
        setCurrentPicture( currentPicture === lastPicture ? firstPicture : img[ pictureIndex +1 ])
    }

    const prevSlide = () => {
        setCurrentPicture ( currentPicture === firstPicture ? lastPicture : img[ pictureIndex -1 ])
    }

    
    return(
        <section className='carousel'>
            <img src={currentPicture} alt={currentPicture.title} className='carousel--img'/>
            {numberPicture !== 1 && 
                <div className='container'>
                    <img src={prevSlideImg} className='arrow arrow--prev' alt="previous slide" onClick={() => prevSlide(currentPicture)} />
                    <img src={nextSlideImg} className='arrow arrow--next' alt="next slide" onClick={() => nextSlide(currentPicture)}/>
                </div>
            }
        </section>
    )
}

// Export to |-src|-pages|-Housing
export default HousingCarousel