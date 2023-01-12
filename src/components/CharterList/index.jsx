//Data
import { charterList } from '../../data/charter.js'
//Style & Img
import './charterList.css'
//Composant
import CollapseCard from '../CollapseCard'

function CharterList() {
  return (
    <div className="card-list">
      {charterList.map((item) => (
        <div key={item.id} className="card-list--container">
          <CollapseCard
            design={'about-card--text'}
            title={item.title}
            text={item.content}
          />
        </div>
      ))}
    </div>
  )
}

// export to |-src|-pages|-About
// Export to |-src-|pages|-Housing
export default CharterList
