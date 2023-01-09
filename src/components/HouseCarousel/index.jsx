//Style & img
import '../../styles/components/houseCarousel.css'
import nextSlideImg from '../../assets/img/Vector_next.svg'
import prevSlideImg from '../../assets/img/Vector_prev.svg'
//React Tools
import { useState } from 'react'


function HouseCarousel( { img } ) {
    
    const numberPicture = img.length
    const firstPicture = [0]
    const lastPicture = img[numberPicture -1]
    const [currentPicture, setCurrentPicture] = useState(firstPicture)
    const pictureIndex = img.indexOf(currentPicture)

    const nextSlide = () => {
        setCurrentPicture( currentPicture === lastPicture ? firstPicture : img[ pictureIndex +1 ])
    }

    const prevSlide = () => {
        setCurrentPicture ( currentPicture === firstPicture ? lastPicture : img[ pictureIndex -1 ])
    }

    
    return(
        <section>
            <div>
                <img src={currentPicture} alt={currentPicture.title} />
            </div>
            {numberPicture !== 1 && 
                <div>
                    <img src={prevSlideImg} alt="previous slide" onClick={() => prevSlide(currentPicture)} />
                    <img src={nextSlideImg} alt="next slide" onClick={() => nextSlide(currentPicture)}/>
                    <div>{img.indexOf(currentPicture) +1} / {numberPicture}</div>
                </div>
            }
        </section>
    )
}

// Export to |-src|-pages|-Housing
export default HouseCarousel