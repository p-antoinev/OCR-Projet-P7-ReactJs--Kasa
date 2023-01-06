//Style
import '../../styles/components/collapseCard.css'


function CollapseCard({ title, text }) {
    return(
        <div className='collapse--card'>
            <h1 className='collapse--card--title'>{title}</h1>
            <p className='collapse--card--text'>{text}</p>
        </div>
    )
}

// Export to |-src|-components|-CharterList
export default CollapseCard