import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    FunnelIcon,
    TableCellsIcon
} from '@heroicons/react/24/outline';
import { CheckCircleIcon, ClockIcon, TruckIcon, XCircleIcon, StarIcon } from '@heroicons/react/24/solid';

const OrderCard = ({ order }) => {
    const statusConfig = {
        delivered: { icon: CheckCircleIcon, color: 'text-[#A8D070]', bg: 'bg-[#A8D070]/10', label: 'Delivered' },
        pending: { icon: ClockIcon, color: 'text-orange-400', bg: 'bg-orange-400/10', label: 'Processing' },
        transit: { icon: TruckIcon, color: 'text-blue-400', bg: 'bg-blue-400/10', label: 'In Transit' },
        cancelled: { icon: XCircleIcon, color: 'text-red-500', bg: 'bg-red-500/10', label: 'Returned' }
    };

    const config = statusConfig[order.status] || statusConfig.pending;
    const StatusIcon = config.icon;

    // Simulate "Price vs Market" data
    const isAboveMarket = order.pricePerUnit > order.marketPrice;
    const priceDiff = Math.abs(((order.pricePerUnit - order.marketPrice) / order.marketPrice) * 100).toFixed(0);

    return (
        <div className="bg-[#3E2723] rounded-[32px] p-6 space-y-4 shadow-xl border border-white/5 group active:scale-[0.98] transition-all">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Transaction ID</span>
                    <p className="text-white text-sm font-mono font-bold">#{order.id}</p>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl ${config.bg}`}>
                    <StatusIcon className={`w-4 h-4 ${config.color}`} />
                    <span className={`text-[10px] font-black uppercase tracking-widest ${config.color}`}>{config.label}</span>
                </div>
            </div>

            {/* Product & Market Info */}
            <div className="flex gap-4">
                <div className="w-20 h-20 rounded-[24px] bg-white/5 p-1 border border-white/10 overflow-hidden">
                    <img src={order.productImage} alt={order.productName} className="w-full h-full object-cover rounded-[20px]" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-white text-xl font-black leading-tight uppercase tracking-tight">{order.productName}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-white/50 text-xs font-bold">{order.quantity}{order.unit} sold to</span>
                        <span className="text-[#A8D070] text-xs font-black uppercase">{order.customerName}</span>
                    </div>
                </div>
            </div>

            {/* Market Comparison & Price */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                <div className="bg-white/5 rounded-2xl p-3">
                    <span className="text-white/30 text-[10px] font-bold uppercase block mb-1">Market Match</span>
                    <div className="flex items-center gap-1">
                        {isAboveMarket ? (
                            <ArrowUpIcon className="w-3 h-3 text-[#A8D070]" />
                        ) : (
                            <ArrowDownIcon className="w-3 h-3 text-red-400" />
                        )}
                        <span className={`text-sm font-black ${isAboveMarket ? 'text-[#A8D070]' : 'text-red-400'}`}>
                            {priceDiff}% {isAboveMarket ? 'Above' : 'Below'}
                        </span>
                    </div>
                </div>
                <div className="bg-white/5 rounded-2xl p-3 text-right">
                    <span className="text-white/30 text-[10px] font-bold uppercase block mb-1">Total Earning</span>
                    <p className="text-white text-xl font-black">₹{order.earnings.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

const FarmerOrderHistoryScreen = ({ onBack, onHelpClick }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const orders = [
        {
            id: 'TXN-001',
            productName: 'Red Tomato',
            quantity: 45,
            unit: 'Kg',
            status: 'delivered',
            customerName: 'FreshBasket',
            date: '22 Dec',
            earnings: 4050,
            pricePerUnit: 90,
            marketPrice: 82,
            productImage: '/src/assets/consumer_home/tomato.png'
        },
        {
            id: 'TXN-002',
            productName: 'Onion Red',
            quantity: 120,
            unit: 'Kg',
            status: 'transit',
            customerName: 'VeggieCo',
            date: '21 Dec',
            earnings: 3600,
            pricePerUnit: 30,
            marketPrice: 32,
            productImage: '/src/assets/consumer_home/onion.png'
        },
        {
            id: 'TXN-003',
            productName: 'Potato',
            quantity: 200,
            unit: 'Kg',
            status: 'pending',
            customerName: 'SuperStore',
            date: 'Today',
            earnings: 5000,
            pricePerUnit: 25,
            marketPrice: 20,
            productImage: '/src/assets/consumer_home/potato.png'
        }
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-x-hidden pb-12">
            {/* Header - Premium Styled */}
            <div className="px-6 pt-16 pb-10 bg-[#251605] rounded-b-[48px] shadow-2xl relative">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all bg-white/5"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">Order History</h1>
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all bg-white/5"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Main Stats Card */}
                <div className="bg-[#A8D070] rounded-[40px] p-8 relative overflow-hidden group shadow-2xl shadow-[#A8D070]/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <StarIcon className="w-4 h-4 text-[#251605]" />
                            <span className="text-[#251605]/60 text-xs font-black uppercase tracking-widest">Performance</span>
                        </div>
                        <h2 className="text-[#251605] text-5xl font-black tracking-tighter leading-none mb-1">₹142.5K</h2>
                        <p className="text-[#251605]/70 text-sm font-bold">Total Sales this Quarter</p>
                    </div>
                </div>

                {/* Mini Insights */}
                <div className="flex gap-4 mt-6">
                    <div className="flex-1 bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10">
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest block mb-1">Top Selling</span>
                        <p className="text-[#A8D070] text-lg font-black uppercase tracking-tight">Tomatoes</p>
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/10">
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest block mb-1">Efficiency</span>
                        <p className="text-white text-lg font-black uppercase tracking-tight">98% Avg.</p>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="px-6 flex-1 -mt-6">
                {/* Filters */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar py-4 mb-4">
                    {['All', 'Vegetables', 'Fruits', 'Grains', 'Completed'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${activeFilter === filter
                                    ? 'bg-[#E64A19] border-[#E64A19] text-white shadow-lg shadow-[#E64A19]/20'
                                    : 'bg-[#251605] border-white/10 text-white/50'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* List */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Recent Invoices</span>
                        <FunnelIcon className="w-4 h-4 text-white/40" />
                    </div>
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            </div>

            {/* Fab for Reports */}
            <button className="fixed bottom-10 right-6 w-14 h-14 bg-[#A8D070] rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all border-4 border-[#1B1109] text-[#1B1109]">
                <TableCellsIcon className="w-6 h-6" />
            </button>
        </div>
    );
};

export default FarmerOrderHistoryScreen;
