import uuid from 'react-native-uuid';
import React, { useState, createContext } from 'react';

export const StateContext = createContext();
export const TransactionType = { Credit: 1, Debit: 2}
export const StateProvider = (props) => {
    
    const [transactions, setTransactions] = useState([
        {
            id: uuid.v4(),
            name:"Grocery",
            amount: 12.01,
            date: "28-10-2024",
            type: TransactionType.Debit
        },
        {
            id: uuid.v4(),
            name:"Mortgage",
            amount: 12,
            date: "27-10-2024",
            type: TransactionType.Debit
        },
        {
            id: uuid.v4(),
            name:"Home insurance",
            amount: 22,
            date: "26-10-2024",
            type: TransactionType.Debit
        },
        {
            id: uuid.v4(),
            name:"Car insurance",
            amount: 22,
            date: "26-10-2024",
            type: TransactionType.Debit
        },
        {
            id: uuid.v4(),
            name:"Car Loan",
            amount: 12,
            date: "26-10-2024",
            type: TransactionType.Debit
        },
        {
            id: uuid.v4(),
            name:"Credit Card",
            amount: 12,
            date: "23-10-2024",
            type: TransactionType.Debit
        },
        {
            id: uuid.v4(),
            name:"Phone Bill",
            amount: 12,
            date: "22-10-2024",
            type: TransactionType.Debit
        },
        {
            id: uuid.v4(),
            name:"Salary",
            amount: 1800.24,
            date: "12-10-2024",
            type: TransactionType.Credit
        }
    ]);

   const getTransactionById = (id) => {
        return transactions.find( item => item.id == id);
   }

   const getTotalByTransactionType = (type) => {
    return transactions.filter( transaction => transaction.type == type)
    .reduce((total, transaction) => total+transaction.amount, 0);
   }

    return (
        <StateContext.Provider value={{transactions: [transactions, setTransactions], getTransactionById, getTotalByTransactionType}}>
            {props.children}
        </StateContext.Provider>
    )
}