import React, { useState } from 'react';
import { ChevronLeftIcon, CheckCircleIcon, TruckIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { ClockIcon, FunnelIcon } from '@heroicons/react/24/outline';

const statusCfg = {
    PLACED:    { label: 'Placed',    bg: 'bg-blue-400/10',    text: 'text-blue-400' },
    CONFIRMED: { label: 'Confirmed', bg: 'bg-[#A8D070]/10',   text: 'text-[#A8D070]' },
    SHIPPED:   { label: 'Shipped',   bg: 'bg-orange-400/10',  text: 'text-orange-400' },
    DELIVERED: { label: 'Delivered', bg: 'bg-[#A855F7]/10',   text: 'text-[#A855F7]' },
    CANCELLED: { label: 'Cancelled', bg: 'bg-red-500/10',     text: 'text-red-400' },
};

const OrderRow = ({ order }) => {
    const cfg = statusCfg[order.status] || statusCfg.PLACED;
    return (
        <div className="bg-[#251605] border border-white/5 rounded-[28px] p-5 shadow-xl">
            <div className="flex items-center justify-between mb-3">
                <div>
                    <span className="text-white/30 text-[10px] font-bold uppercase">Order ID</span>
                    <p className="text-white font-black text-sm tracking-tight">#{order.id}</p>
                </div>
                <span className={`text-[10px] font-black uppercase px-3 py-1.5 rounded-full ${cfg.bg} ${cfg.text}`}>{cfg.label}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-white/5">
                <div>
                    <p className="text-white/30 text-[10px] font-bold">Customer</p>
                    <p className="text-white text-xs font-bold mt-0.5">{order.customerName}</p>
                </div>
                <div className="text-center">
                    <p className="text-white/30 text-[10px] font-bold">Method</p>
                    <p className="text-white/60 text-xs font-bold mt-0.5">{order.method}</p>
                </div>
                <div className="text-right">
                    <p className="text-white/30 text-[10px] font-bold">Total</p>
                    <p className="text-[#A855F7] font-black text-sm mt-0.5">₹{order.total}</p>
                </div>
            </div>
        </div>
    );
};

const AdminOrdersScreen = ({ onBack }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const orders = [
        { id: 1,  customerName: 'Amit Sharma',  method: 'UPI',  total: '500',  status: 'PLACED' },
        { id: 2,  customerName: 'Priya Verma',  method: 'CARD', total: '700',  status: 'PLACED' },
        { id: 3,  customerName: 'Rahul Das',    method: 'COD',  total: '450',  status: 'DELIVERED' },
        { id: 4,  customerName: 'Neha Gupta',   method: 'UPI',  total: '600',  status: 'PLACED' },
        { id: 5,  customerName: 'Karan Mehta',  method: 'CARD', total: '350',  status: 'DELIVERED' },
        { id: 6,  customerName: 'Sneha Iyer',   method: 'UPI',  total: '900',  status: 'CONFIRMED' },
        { id: 7,  customerName: 'Amit Sharma',  method: 'UPI',  total: '200',  status: 'SHIPPED' },
        { id: 8,  customerName: 'Priya Verma',  method: 'CARD', total: '300',  status: 'SHIPPED' },
        { id: 9,  customerName: 'Rahul Das',    method: 'UPI',  total: '800',  status: 'CONFIRMED' },
        { id: 10, customerName: 'Neha Gupta',   method: 'COD',  total: '250',  status: 'DELIVERED' },
    ];

    const filters = ['All', 'PLACED', 'CONFIRMED', 'SHIPPED', 'DELIVERED'];
    const filtered = activeFilter === 'All' ? orders : orders.filter(o => o.status === activeFilter);

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-10">
            <div className="max-w-6xl mx-auto w-full flex flex-col min-h-screen">
                <div className="absolute top-[-10%] right-[-20%] w-[80%] h-[40%] bg-[#A855F7]/5 blur-[120px] rounded-full" />

                {/* Header */}
                <div className="px-6 pt-16 pb-8 bg-[#251605] rounded-b-[48px] shadow-2xl relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90 bg-white/5">
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">All Orders</h1>
                        <FunnelIcon className="w-6 h-6 text-white/40" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {[{ label: 'Total', val: orders.length, color: '#A855F7' },
                          { label: 'Delivered', val: orders.filter(o => o.status === 'DELIVERED').length, color: '#A8D070' },
                          { label: 'Active', val: orders.filter(o => o.status !== 'DELIVERED').length, color: '#60A5FA' }
                        ].map(s => (
                            <div key={s.label} className="bg-white/5 rounded-[28px] p-4 text-center border border-white/10">
                                <p className="font-black text-3xl" style={{ color: s.color }}>{s.val}</p>
                                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-6 mt-6 relative z-10">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-5">
                        {filters.map(f => (
                            <button key={f} onClick={() => setActiveFilter(f)}
                                className={`px-4 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap border transition-all ${activeFilter === f ? 'bg-[#A855F7] border-[#A855F7] text-white' : 'bg-[#251605] border-white/10 text-white/40'}`}>
                                {f}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {filtered.map(o => <OrderRow key={o.id} order={o} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOrdersScreen;
