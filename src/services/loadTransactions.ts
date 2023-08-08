import { TransactionType } from "@/types/TransactionType";

export const loadTransactions = async () => {
    const transactions: TransactionType[] = await fetch('http://localhost:3000/api')
        .then(res => res.json());
    return transactions;
}

