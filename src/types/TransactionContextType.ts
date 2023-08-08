import { TransactionType } from "./TransactionType"

export type TransactionContextType = {
    transactions: TransactionType[],
    addTransaction: (transaction: TransactionType) => void;
    removeTransaction: (transactionId: number) => void;
}