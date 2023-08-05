import { NextResponse } from "next/server";

export async function GET() {
    const Transaction = require("@/../models/Transaction");
    const allTransactions = await Transaction.findAll();
    return NextResponse.json({ allTransactions });
}