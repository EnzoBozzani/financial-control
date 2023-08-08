import { TransactionType } from "@/types/TransactionType";
const Transaction = require('@/../models/Transaction');

export const loadTransactions = async () => {
    const transactions: TransactionType[] = await fetch('/api')
        .then(res => res.json());
    return transactions;
}

export const addTransaction = async (transaction: TransactionType) => {
    await Transaction.create(transaction);
};

export const removeTransaction = async (transactionId: number) => {
    const transaction = await Transaction.findByPk(transactionId);
    await transaction.destroy();
};