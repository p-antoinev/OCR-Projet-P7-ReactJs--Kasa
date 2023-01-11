//Style
import './rating.css'
//Icon
import { FaStar } from 'react-icons/fa'


function Rating({ rating }) {
    const stars = [1, 2, 3, 4, 5]

    return(
        <div className='rating'>
            {stars.map((star) => rating >= star ? (
                    <FaStar key={star.toString()} className='star redstar'/>
                ) : (
                    <FaStar key={star.toString()} className='star greystar'/>
                )
            )}
        </div>
    )
}

// Export to |-src|-pages|-Housing
export default Rating