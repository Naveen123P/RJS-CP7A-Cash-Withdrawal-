// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem, onReduce} = props
  const {value} = eachItem

  const toReduseValue = () => {
    onReduce(value)
  }

  return (
    <li className="list-items">
      <button type="button" className="button" onClick={toReduseValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
