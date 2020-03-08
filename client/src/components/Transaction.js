import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    const classVal = transaction.amount < 0 ? 'minus' : 'plus';
    const currencySymbol = '₹';
    const amount = new Intl.NumberFormat('en-IN').format(Math.abs(transaction.amount));
    const displayAmount = `${sign}${currencySymbol}${amount}`;
    return (
        <li className={classVal}>
            {transaction.text} <span>{displayAmount}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
        </li>
    )
}
