'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { TransactionContextType } from '../types/TransactionContextType';
import { TransactionType } from "@/types/TransactionType";


const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType);

export const TransactionContextProvider = ({ children, storedTransactions } : { children: ReactNode, storedTransactions: TransactionType[]}) => {
    const [ transactions, setTransactions ] = useState<TransactionType[]>([]);

    useEffect(() => {
        if (storedTransactions){
            setTransactions(storedTransactions);
        }
    });

    return (
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}

export const useTransactions = () => useContext(TransactionContext);