import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

const WithdrawalHistoryScreen = ({ onBack }) => {
    const withdrawals = [
        { id: 1, date: '2024-01-15', amount: 5000, status: 'Completed', transactionId: 'TXN001234' },
        { id: 2, date: '2024-01-08', amount: 3500, status: 'Completed', transactionId: 'TXN001235' },
        { id: 3, date: '2024-01-01', amount: 7500, status: 'Completed', transactionId: 'TXN001236' },
        { id: 4, date: '2023-12-25', amount: 4200, status: 'Completed', transactionId: 'TXN001237' },
        { id: 5, date: '2023-12-18', amount: 6800, status: 'Completed', transactionId: 'TXN001238' },
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] text-white flex flex-col">
            {/* Header */}
            <div className="px-6 pt-12 pb-6 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full bg-[#251605] border border-white/10 flex items-center justify-center active:scale-95 transition-transform"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-2xl font-bold">Withdrawal History</h1>
            </div>

            {/* Summary Card */}
            <div className="mx-6 mb-6 bg-gradient-to-br from-[#BC8E5C] to-[#9A7248] rounded-[32px] p-6 shadow-lg">
                <p className="text-white/70 text-sm mb-1">Total Withdrawn</p>
                <h2 className="text-4xl font-bold">₹27,000</h2>
            </div>

            {/* Withdrawal List */}
            <div className="px-6 pb-6 flex-1">
                <h3 className="text-lg font-bold mb-4">Recent Withdrawals</h3>
                <div className="space-y-3">
                    {withdrawals.map(withdrawal => (
                        <div
                            key={withdrawal.id}
                            className="bg-[#251605] rounded-2xl p-4 border border-white/5"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="font-bold text-lg">₹{withdrawal.amount.toLocaleString()}</p>
                                    <p className="text-white/50 text-xs">{withdrawal.transactionId}</p>
                                </div>
                                <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs font-bold">
                                    {withdrawal.status}
                                </span>
                            </div>
                            <p className="text-white/70 text-sm">{new Date(withdrawal.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WithdrawalHistoryScreen;
