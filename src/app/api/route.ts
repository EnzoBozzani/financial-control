import { NextResponse } from "next/server";

export async function GET() {
    const Transaction = require("@/../models/Transaction");
    const allTransactions = await Transaction.findAll();
    return NextResponse.json({ allTransactions });
}

// export async function POST(req, res){

// }

// export const addTransaction = async (transaction: TransactionType) => {
//     await Transaction.create(transaction);
// };

// export const removeTransaction = async (transactionId: number) => {
//     const transaction = await Transaction.findByPk(transactionId);
//     await transaction.destroy();
// };