import './MoneyDetails.css'
import React from 'react'
const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <div className='details-balance'>
          <p className="details-text">Your Balance</p>
          <p className="details-money" testid="balanceAmount">
            $ {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" testid="incomeAmount">
           $ {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">

        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" testid="expensesAmount">
           ${expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
