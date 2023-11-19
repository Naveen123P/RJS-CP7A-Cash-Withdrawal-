// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const initialDenominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class CashWithdrawal extends Component {
  state = {balance: 2000, denominationsList: initialDenominationsList}

  onReduce = id => {
    const {balance} = this.state
    for (const each of initialDenominationsList) {
      if (each.id === id) {
        this.setState(prevState => ({
          balance: prevState - each.value,
        }))
        break
      }
    }
  }

  render() {
    const {balance} = this.state
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
              <p className="acc-bal">{balance}</p>
              <p className="your-balance">In Rupees</p>
            </div>
          </div>
          <p className="acc-bal">Withdraw</p>
          <p className="your-balance">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {initialDenominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                onReduce={this.onReduce}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
