import './index.css'

const RepositoryItem = props => {
  const {Item} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = Item
  return (
    <li className="Container" style={{listStyle: 'none'}}>
      <img src={avatarUrl} alt={name} style={{height: '100px'}} />
      <h1 className="heading">{name}</h1>
      <div className="Content">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            style={{height: '30px'}}
          />
          <p className="para">{starsCount}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            style={{height: '30px'}}
          />
          <p className="para">{forksCount}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            style={{height: '30px'}}
          />
          <p className="para">{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
