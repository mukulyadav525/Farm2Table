import React, { useState } from 'react';
import {
    HomeIcon,
    ShoppingBagIcon,
    UsersIcon,
    ExclamationTriangleIcon,
    BellIcon,
    ChevronDownIcon,
    ArrowUpIcon,
} from '@heroicons/react/24/solid';
import {
    HomeIcon as HomeOutline,
    ShoppingBagIcon as BagOutline,
    UsersIcon as UsersOutline,
    ExclamationTriangleIcon as ExclamationOutline,
} from '@heroicons/react/24/outline';

const MetricCard = ({ label, value, sub, accent, icon: Icon, onClick }) => (
    <div
        onClick={onClick}
        className="relative overflow-hidden rounded-[36px] p-6 flex flex-col justify-between h-44 shadow-2xl active:scale-95 transition-all cursor-pointer group bg-[#251605] border border-white/5"
    >
        <div className={`absolute top-0 right-0 w-28 h-28 rounded-full -mr-14 -mt-14 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} style={{ background: accent }} />
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center relative z-10" style={{ background: `${accent}22` }}>
            <Icon className="w-5 h-5" style={{ color: accent }} />
        </div>
        <div className="relative z-10">
            <h2 className="text-white text-4xl font-black tracking-tighter">{value}</h2>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-1">{label}</p>
            {sub && <p className="text-white/20 text-[9px] font-bold mt-0.5">{sub}</p>}
        </div>
    </div>
);

const DisputeRow = ({ d }) => (
    <div className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0">
        <div className="w-8 h-8 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <ExclamationTriangleIcon className="w-4 h-4 text-orange-400" />
        </div>
        <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-bold truncate">{d.reason}</p>
            <p className="text-white/30 text-[10px] font-bold">Order #{d.orderId}</p>
        </div>
        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${d.status === 'OPEN' ? 'bg-red-500/10 text-red-400' : 'bg-[#A8D070]/10 text-[#A8D070]'}`}>
            {d.status}
        </span>
    </div>
);

const AdminDashboard = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('home');

    const disputes = [
        { orderId: 1, reason: 'Damaged product', status: 'OPEN' },
        { orderId: 2, reason: 'Late delivery', status: 'OPEN' },
        { orderId: 3, reason: 'Wrong item', status: 'RESOLVED' },
        { orderId: 4, reason: 'Missing item', status: 'OPEN' },
    ];

    const nav = [
        { key: 'home', Icon: HomeIcon, Out: HomeOutline, label: 'Home', action: 'adminDashboard' },
        { key: 'orders', Icon: ShoppingBagIcon, Out: BagOutline, label: 'Orders', action: 'adminOrders' },
        { key: 'users', Icon: UsersIcon, Out: UsersOutline, label: 'Users', action: 'adminUsers' },
        { key: 'disputes', Icon: ExclamationTriangleIcon, Out: ExclamationOutline, label: 'Disputes', action: 'adminDisputes' },
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative pb-32 overflow-hidden">
            <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-[#BC8E5C]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[40%] bg-[#A8D070]/5 blur-[120px] rounded-full" />

            <div className="flex-1 px-6 pt-16 overflow-y-auto no-scrollbar relative z-10 max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Admin Panel</p>
                        <span className="text-white text-xl font-black uppercase tracking-tight">Dashboard</span>
                    </div>
                    <div className="flex gap-3">
                        <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center relative active:scale-90 transition-all">
                            <BellIcon className="w-6 h-6" />
                            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#BC8E5C] rounded-full border-2 border-[#1B1109]" />
                        </button>
                        <div className="w-12 h-12 rounded-2xl bg-[#BC8E5C] flex items-center justify-center shadow-lg shadow-[#BC8E5C]/20">
                            <span className="text-white font-black text-sm">A</span>
                        </div>
                    </div>
                </div>

                {/* Metric Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <MetricCard label="Total Orders" value="142" sub="+12 today" accent="#BC8E5C" icon={ShoppingBagIcon} onClick={() => onNavigate && onNavigate('adminOrders')} />
                    <MetricCard label="Active Farmers" value="10" sub="All verified" accent="#A8D070" icon={UsersIcon} onClick={() => onNavigate && onNavigate('adminUsers')} />
                    <MetricCard label="Consumers" value="14" sub="Registered" accent="#BC8E5C" icon={UsersIcon} onClick={() => onNavigate && onNavigate('adminUsers')} />
                    <MetricCard label="Open Disputes" value="8" sub="Needs review" accent="#F97316" icon={ExclamationTriangleIcon} onClick={() => onNavigate && onNavigate('adminDisputes')} />
                </div>

                {/* Revenue Chart */}
                <div className="bg-white/5 border border-white/10 rounded-[48px] p-8 mb-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC8E5C]/5 blur-[80px] rounded-full -mr-32 -mt-32" />
                    <div className="flex justify-between items-center mb-8 relative z-10">
                        <div>
                            <h3 className="text-white text-base font-black uppercase tracking-[0.2em]">Platform Revenue</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <ArrowUpIcon className="w-3 h-3 text-[#A8D070]" />
                                <span className="text-[#A8D070] text-xs font-black">+18% this week</span>
                            </div>
                        </div>
                        <div className="bg-[#BC8E5C]/10 border border-[#BC8E5C]/20 rounded-2xl px-4 py-2">
                            <span className="text-[#BC8E5C] text-[10px] font-black uppercase tracking-widest">₹9,400</span>
                        </div>
                    </div>
                    <div className="relative h-36 w-full flex flex-col justify-end">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 120">
                            <defs>
                                <linearGradient id="gradAdmin" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#BC8E5C" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#BC8E5C" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,90 Q50,70 80,60 T150,40 T220,55 T300,20 V120 H0 Z" fill="url(#gradAdmin)" />
                            <path d="M0,90 Q50,70 80,60 T150,40 T220,55 T300,20" fill="none" stroke="#BC8E5C" strokeWidth="3" strokeLinecap="round" />
                            <circle cx="150" cy="40" r="4" fill="#1B1109" stroke="#BC8E5C" strokeWidth="2.5" />
                        </svg>
                        <div className="flex justify-between text-[9px] font-black text-white/20 mt-4 uppercase tracking-[0.2em]">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                        </div>
                    </div>
                </div>

                {/* Recent Disputes */}
                <div className="bg-[#251605] border border-white/10 rounded-[40px] p-6 mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white text-xs font-black uppercase tracking-[0.3em]">Recent Disputes</h3>
                        <button
                            onClick={() => onNavigate && onNavigate('adminDisputes')}
                            className="text-[#BC8E5C] text-[10px] font-black uppercase tracking-widest"
                        >
                            View All
                        </button>
                    </div>
                    {disputes.map((d, i) => <DisputeRow key={i} d={d} />)}
                </div>
            </div>

            {/* Floating Bottom Nav */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[500px] h-20 bg-[#BC8E5C] rounded-[40px] flex items-center justify-around px-8 shadow-[0_20px_50px_rgba(188,142,92,0.3)] z-50">
                {nav.map(({ key, Icon, Out, label, action }) => (
                    <button
                        key={key}
                        onClick={() => { setActiveTab(key); onNavigate && onNavigate(action); }}
                        className="flex flex-col items-center gap-1 text-white"
                    >
                        {activeTab === key
                            ? <><Icon className="w-6 h-6 drop-shadow-md" /><div className="w-1.5 h-1.5 bg-white rounded-full" /></>
                            : <Out className="w-6 h-6 opacity-50" />
                        }
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
