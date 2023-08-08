import { NextResponse } from "next/server";
const Transaction = require("@/../models/Transaction");

export async function GET() {
    const allTransactions = await Transaction.findAll();
    return NextResponse.json({ allTransactions });
}

// export async function POST(req: Request){
//     const formData = await req.formData();
//     const title = formData.get('title');
//     const description = formData.get('description');
//     const value = formData.get('value');
//     const type = formData.get('type');
//     await Transaction.create({ title, description, value, type });
// }

// export async function DELETE(req: Request){
//     const { id } = req.
// }

// export const addTransaction = async (transaction: TransactionType) => {
//     await Transaction.create(transaction);
// };

// export const removeTransaction = async (transactionId: number) => {
//     const transaction = await Transaction.findByPk(transactionId);
//     await transaction.destroy();
// };