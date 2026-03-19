import React, { useState } from 'react';
import { ChevronLeftIcon, CheckCircleIcon, XCircleIcon, TruckIcon, CurrencyRupeeIcon } from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/outline';

const HistoryCard = ({ delivery }) => {
    const statusCfg = {
        DELIVERED: { label: 'Delivered', bg: 'bg-[#A8D070]/10', text: 'text-[#A8D070]', icon: CheckCircleIcon },
        FAILED: { label: 'Failed', bg: 'bg-red-500/10', text: 'text-red-400', icon: XCircleIcon },
    };
    const cfg = statusCfg[delivery.status] || statusCfg.DELIVERED;
    const Icon = cfg.icon;

    return (
        <div className="bg-[#251605] border border-white/5 rounded-[32px] p-5 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                        <TruckIcon className="w-6 h-6 text-white/40" />
                    </div>
                    <div>
                        <p className="text-white font-black text-sm">{delivery.customerName}</p>
                        <p className="text-white/30 text-[10px] font-bold mt-0.5">{delivery.date}</p>
                    </div>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${cfg.bg}`}>
                    <Icon className={`w-3.5 h-3.5 ${cfg.text}`} />
                    <span className={`text-[10px] font-black uppercase tracking-widest ${cfg.text}`}>{cfg.label}</span>
                </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-white/5 relative z-10">
                <div>
                    <p className="text-white/30 text-[10px] font-bold uppercase">Distance</p>
                    <p className="text-white font-black text-sm mt-0.5">{delivery.distance}</p>
                </div>
                <div className="text-center">
                    <p className="text-white/30 text-[10px] font-bold uppercase">Order ID</p>
                    <p className="text-white/60 font-bold text-xs mt-0.5">#{delivery.id}</p>
                </div>
                <div className="text-right">
                    <p className="text-white/30 text-[10px] font-bold uppercase">Earned</p>
                    <p className="text-[#60A5FA] font-black text-lg mt-0.5">{delivery.earned}</p>
                </div>
            </div>
        </div>
    );
};

const DeliveryHistoryScreen = ({ onBack }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const history = [
        { id: 'D-1021', customerName: 'Amit Sharma', date: 'Today, 02:30 PM', distance: '3.2 km', earned: '₹85', status: 'DELIVERED' },
        { id: 'D-1019', customerName: 'Priya Verma', date: 'Today, 11:00 AM', distance: '5.1 km', earned: '₹110', status: 'DELIVERED' },
        { id: 'D-1018', customerName: 'Rahul Das', date: 'Yesterday, 04:00 PM', distance: '2.8 km', earned: '₹70', status: 'DELIVERED' },
        { id: 'D-1015', customerName: 'Neha Gupta', date: 'Yesterday, 09:15 AM', distance: '6.0 km', earned: '₹130', status: 'FAILED' },
        { id: 'D-1011', customerName: 'Karan Mehta', date: '17 Dec, 01:00 PM', distance: '4.5 km', earned: '₹95', status: 'DELIVERED' },
    ];

    const filtered = activeFilter === 'All' ? history : history.filter(d => d.status === activeFilter);
    const totalEarned = history.filter(d => d.status === 'DELIVERED').reduce((acc, d) => acc + parseInt(d.earned.replace('₹', '')), 0);

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-10">
            <div className="max-w-4xl mx-auto w-full flex flex-col min-h-screen">
                <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-[#60A5FA]/5 blur-[120px] rounded-full" />

                {/* Header */}
                <div className="px-6 pt-16 pb-10 bg-[#251605] rounded-b-[48px] shadow-2xl relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all bg-white/5">
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">Delivery History</h1>
                        <div className="w-12 h-12" />
                    </div>

                    {/* Summary */}
                    <div className="bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-[40px] p-8 relative overflow-hidden shadow-2xl max-w-2xl mx-auto w-full">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <CurrencyRupeeIcon className="w-4 h-4 text-white/60" />
                                <span className="text-white/60 text-xs font-black uppercase tracking-widest">Total Earned</span>
                            </div>
                            <h2 className="text-white text-5xl font-black tracking-tighter mb-4">₹{totalEarned}</h2>
                            <div className="flex gap-6">
                                <div>
                                    <p className="text-white/50 text-[10px] font-bold uppercase">Delivered</p>
                                    <p className="text-white font-black text-lg">{history.filter(d => d.status === 'DELIVERED').length}</p>
                                </div>
                                <div>
                                    <p className="text-white/50 text-[10px] font-bold uppercase">Failed</p>
                                    <p className="text-red-300 font-black text-lg">{history.filter(d => d.status === 'FAILED').length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter + List */}
                <div className="px-6 mt-8 relative z-10">
                    <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar">
                        {['All', 'DELIVERED', 'FAILED'].map(f => (
                            <button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${activeFilter === f ? 'bg-[#60A5FA] border-[#60A5FA] text-white' : 'bg-[#251605] border-white/10 text-white/40'}`}
                            >
                                {f === 'All' ? 'All' : f === 'DELIVERED' ? '✓ Delivered' : '✗ Failed'}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filtered.map(d => <HistoryCard key={d.id} delivery={d} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryHistoryScreen;
