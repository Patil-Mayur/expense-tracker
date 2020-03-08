import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const total = transactions.reduce((acc, {amount}) => (acc += amount) , 0).toFixed(2);
    const sign = total < 0 ? '-' : '';
    const currencySymbol = '₹';
    const amount = new Intl.NumberFormat('en-IN').format(Math.abs(total));
    const displayAmount = `${sign}${currencySymbol}${amount}`
    return (
        <>
            <h4>Your Balance</h4>
            <h1>{displayAmount}</h1>
        </>
    )
}
