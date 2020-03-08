import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    let income = transactions.reduce((acc, {amount}) => (acc+= amount > 0 ? amount : 0), 0).toFixed(2);
    let expense = Math.abs(transactions.reduce((acc, {amount}) => (acc+= amount < 0 ? amount : 0), 0)).toFixed(2);
    income = new Intl.NumberFormat('en-IN').format(income);
    expense = new Intl.NumberFormat('en-IN').format(expense);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+₹{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-₹{expense}</p>
            </div>
        </div>
    )
}
