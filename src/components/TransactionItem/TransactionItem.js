import './TransactionItem.css'
import React from 'react'
const TransactionItem = props => {
  const { transactionDetails, deleteTransaction } = props
  const { id, title, amount, type } = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <div className='transaction'>
      <li className="table-row">
        <p className="transaction-text">{title}</p>
        <p className="transaction-text">$ {amount}</p>
        <p className="transaction-text">{type}</p>
        <div className="delete-container">
          <button
            className="delete-button"
            type="button"
            onClick={onDeleteTransaction}
            testid="delete"
          >
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default TransactionItem
