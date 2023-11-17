// Write your code here
import DenominationItem from '../DenominationItem'
import './index.css'

const CashWithdrawal = props => {
  const {denominationsList} = props
  const {id, value} = denominationsList
  let balance = 2000

  const onReduce = value1 => {
    balance = balance - value1
    return balance
  }

  return (
    <div className="bg-container1">
      <div className="bg-container2">
        <div className="user-name">
          <div className="profile">S</div>
          <p>Sarah Williams </p>
        </div>
        <div className="balance">
          <p className="your-balance">Your Balance</p>
          <div className="amount">
            <h1>{balance}</h1>
            <p className="your-balance">In Rupees</p>
          </div>
        </div>
        <h1>Withdraw</h1>
        <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>
        <ul>
          {denominationsList.map(eachItem => (
            <DenominationItem
              eachItem={eachItem}
              key={eachItem.id}
              onReduce={onReduce}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CashWithdrawal
