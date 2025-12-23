import React from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    ArrowPathIcon,
    CalendarIcon,
    ShieldCheckIcon,
    BanknotesIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon, ClockIcon, XCircleIcon, CreditCardIcon } from '@heroicons/react/24/solid';

const TransactionCard = ({ txn }) => {
    const statusConfig = {
        completed: { icon: CheckCircleIcon, color: 'text-[#A8D070]', bg: 'bg-[#A8D070]/10', label: 'Completed' },
        pending: { icon: ClockIcon, color: 'text-orange-400', bg: 'bg-orange-400/10', label: 'Processing' },
        failed: { icon: XCircleIcon, color: 'text-red-500', bg: 'bg-red-500/10', label: 'Failed' }
    };

    const config = statusConfig[txn.status] || statusConfig.pending;
    const StatusIcon = config.icon;

    return (
        <div className="bg-[#251605] rounded-[32px] p-6 space-y-4 shadow-xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Row 1 */}
            <div className="flex justify-between items-start relative z-10">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <BanknotesIcon className="w-6 h-6 text-white/50" />
                    </div>
                    <div>
                        <p className="text-white text-sm font-black uppercase tracking-tight">{txn.method}</p>
                        <p className="text-white/30 text-[10px] font-bold mt-0.5">{txn.date}</p>
                    </div>
                </div>
                <div className={`px-4 py-1.5 rounded-full ${config.bg}`}>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${config.color}`}>{config.label}</span>
                </div>
            </div>

            {/* Row 2 - Amount & Fee */}
            <div className="flex justify-between items-end pt-2 relative z-10">
                <div>
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] block mb-1">Amount Transferred</span>
                    <p className="text-white text-3xl font-black tracking-tight">₹{txn.amount.toLocaleString()}</p>
                </div>
                <div className="text-right">
                    <span className="text-white/20 text-[10px] font-bold block">Platform Fee: ₹{txn.fee}</span>
                    <p className="text-white/40 text-[10px] font-bold">Ref: {txn.id}</p>
                </div>
            </div>

            {/* Destination Row */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 relative z-10">
                <ShieldCheckIcon className="w-4 h-4 text-[#A8D070]" />
                <p className="text-white/50 text-[10px] font-bold">Sent to Bank Account ending in {txn.accLast4}</p>
            </div>
        </div>
    );
};

const FarmerWithdrawalHistoryScreen = ({ onBack, onHelpClick, onNavigate }) => {
    const txns = [
        {
            id: 'REF-99281',
            amount: 15000,
            fee: 150,
            status: 'completed',
            date: '18 Dec, 02:30 PM',
            method: 'Direct Bank',
            accLast4: '4521'
        },
        {
            id: 'REF-99275',
            amount: 12500,
            fee: 125,
            status: 'pending',
            date: 'Today, 10:15 AM',
            method: 'IMPS Transfer',
            accLast4: '4521'
        },
        {
            id: 'REF-99260',
            amount: 8000,
            fee: 80,
            status: 'completed',
            date: '10 Dec, 11:00 AM',
            method: 'UPI Payout',
            accLast4: '9876'
        },
        {
            id: 'REF-99255',
            amount: 2500,
            fee: 25,
            status: 'failed',
            date: '05 Dec, 09:20 AM',
            method: 'Direct Bank',
            accLast4: '4521'
        }
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-x-hidden pb-12">
            {/* Custom Header with Dashboard Aesthetic */}
            <div className="px-6 pt-16 pb-20 bg-[#3E2723] rounded-b-[60px] shadow-2xl relative border-b border-[#4E342E]">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all bg-white/5"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">Withdrawals</h1>
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all bg-white/5"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Profile-like Centerpiece */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-4 border border-white/10 shadow-inner">
                        <CreditCardIcon className="w-10 h-10 text-[#A8D070]" />
                    </div>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Available Balance</p>
                    <h2 className="text-white text-5xl font-black tracking-tighter mb-8">₹50,000</h2>

                    <button
                        onClick={() => onNavigate && onNavigate('withdrawal')}
                        className="bg-[#E64A19] text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#E64A19]/30 active:scale-95 transition-all border-4 border-[#3E2723] ring-2 ring-[#E64A19]/50"
                    >
                        Withdraw Now
                    </button>
                </div>
            </div>

            {/* Analytics Overlays - Farmer Centric */}
            <div className="px-6 -mt-10 relative z-20">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#A8D070] rounded-[32px] p-5 shadow-2xl">
                        <div className="flex items-center gap-2 mb-2">
                            <CalendarIcon className="w-4 h-4 text-[#251605]/60" />
                            <span className="text-[#251605]/40 text-[10px] font-black uppercase tracking-tight">Next Payout</span>
                        </div>
                        <p className="text-[#251605] text-lg font-black uppercase">25 Dec</p>
                        <p className="text-[#251605]/50 text-[10px] font-bold mt-1">Expected Arrival</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-5">
                        <div className="flex items-center gap-2 mb-2">
                            <ArrowPathIcon className="w-4 h-4 text-orange-400" />
                            <span className="text-white/40 text-[10px] font-black uppercase tracking-tight">Pending</span>
                        </div>
                        <p className="text-white text-lg font-black uppercase">₹12,500</p>
                        <p className="text-white/30 text-[10px] font-bold mt-1">In Verification</p>
                    </div>
                </div>
            </div>

            {/* Transaction List */}
            <div className="px-6 mt-10">
                <div className="flex items-center justify-between mb-6 px-2">
                    <h3 className="text-white text-xs font-black uppercase tracking-[0.3em]">Payout History</h3>
                    <div className="flex gap-4">
                        <InformationCircleIcon className="w-5 h-5 text-white/20" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {txns.map((txn) => (
                        <TransactionCard key={txn.id} txn={txn} />
                    ))}
                </div>
            </div>

            {/* Home Indicator */}
            <div className="mt-8 pt-4 flex justify-center">
                <div className="w-32 h-1.5 bg-white/20 rounded-full"></div>
            </div>
        </div>
    );
};

export default FarmerWithdrawalHistoryScreen;
