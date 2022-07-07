import './index.css'

const LanguageFilterItem = props => {
  const {eachItem, onFilter} = props
  const {language, id} = eachItem
  let clsName = 'button'
  const onClickBtn = () => {
    clsName = 'ClickedBtn'
    onFilter(id)
  }
  return (
    <li style={{listStyle: 'none'}}>
      <button type="button" onClick={onClickBtn} className={clsName}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
