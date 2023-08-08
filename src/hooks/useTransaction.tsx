'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { TransactionType } from "@/types/TransactionType";


const TransactionContext = createContext<TransactionType[]>([]);

export const TransactionContextProvider = ({ children, storedTransactions } : { children: ReactNode, storedTransactions: TransactionType[]}) => {
    const [ transactions, setTransactions ] = useState<TransactionType[]>([]);

    useEffect(() => {
        if (storedTransactions){
            setTransactions(storedTransactions);
        }
    });

    return (
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
}

export const useTransactions = () => useContext(TransactionContext);