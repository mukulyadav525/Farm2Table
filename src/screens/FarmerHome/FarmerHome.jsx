import React, { useState } from 'react';
import {
    BellIcon,
    Cog6ToothIcon,
    UserIcon,
    ChevronDownIcon,
    HomeIcon,
    HeartIcon,
    QuestionMarkCircleIcon,
    PlusIcon,
    StarIcon,
    AdjustmentsHorizontalIcon,
    FireIcon
} from '@heroicons/react/24/solid';
import {
    HeartIcon as HeartIconOutline,
    UserIcon as UserIconOutline,
    QuestionMarkCircleIcon as QuestionMarkOutline
} from '@heroicons/react/24/outline';


import OrderRequestsSheet from './OrderRequestsSheet';
import RunningOrdersSheet from './RunningOrdersSheet';

const StatCard = ({ value, label, onClick, color, icon: Icon }) => (
    <div
        onClick={onClick}
        className={`relative overflow-hidden rounded-[40px] p-8 flex-1 flex flex-col justify-between h-52 shadow-2xl transition-all active:scale-95 group cursor-pointer ${color}`}
    >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

        <div className="flex justify-between items-start relative z-10">
            <div className="w-12 h-12 bg-black/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <Icon className="w-6 h-6 text-[#251605]" />
            </div>
            {label.includes('REQUEST') && (
                <div className="bg-[#E64A19] px-3 py-1 rounded-full animate-pulse shadow-lg shadow-[#E64A19]/30">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">New</span>
                </div>
            )}
        </div>

        <div className="relative z-10">
            <h2 className="text-[#251605] text-6xl font-black tracking-tighter mb-1">{value}</h2>
            <p className="text-[#251605]/50 font-black text-[10px] uppercase tracking-[0.2em] leading-tight">
                {label}
            </p>
        </div>
    </div>
);

const FarmerHome = ({ onNavigate, onAddItem, onRevenueClick, onProfileClick, onSettingsClick, onNotificationClick, onReviewsClick, onHelpClick, onLocationClick }) => {
    const [showOrders, setShowOrders] = useState(false);
    const [showRunningOrders, setShowRunningOrders] = useState(false);

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative pb-32 overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-[#E64A19]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[40%] bg-[#A8D070]/5 blur-[120px] rounded-full" />

            {/* Scrollable Content */}
            <div className="flex-1 px-6 pt-16 overflow-y-auto no-scrollbar relative z-10">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    {/* Location */}
                    <div
                        onClick={onLocationClick}
                        className="flex flex-col cursor-pointer group active:scale-95 transition-all"
                    >
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Live Location</p>
                        <div className="flex items-center gap-2">
                            <span className="text-white text-xl font-black uppercase tracking-tight">Delhi, India</span>
                            <ChevronDownIcon className="w-5 h-5 text-[#A8D070] group-hover:translate-y-0.5 transition-transform" />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={onNotificationClick}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center relative active:scale-90 transition-all backdrop-blur-md"
                        >
                            <BellIcon className="w-6 h-6" />
                            <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#E64A19] rounded-full border-2 border-[#1B1109]" />
                        </button>
                        <button
                            onClick={onSettingsClick}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-90 transition-all backdrop-blur-md"
                        >
                            <Cog6ToothIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="flex gap-4 mb-8">
                    <StatCard
                        value="20"
                        label="Running orders"
                        color="bg-[#A8D070]"
                        icon={AdjustmentsHorizontalIcon}
                        onClick={() => setShowRunningOrders(true)}
                    />
                    <StatCard
                        value="05"
                        label="Order requests"
                        color="bg-[#FF7043]"
                        icon={FireIcon}
                        onClick={() => setShowOrders(true)}
                    />
                </div>

                {/* Revenue Chart Section */}
                <div className="bg-white/5 backdrop-blur-3xl rounded-[48px] p-8 mb-8 border border-white/10 relative shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8D070]/5 blur-[80px] rounded-full -mr-32 -mt-32"></div>

                    <div className="flex justify-between items-center mb-10 relative z-10">
                        <div>
                            <h3 className="text-white text-lg font-black uppercase tracking-[0.2em]">Live Revenue</h3>
                            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mt-1">Real-time performance</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/50 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
                                Daily
                            </button>
                            <button
                                onClick={onRevenueClick}
                                className="w-10 h-10 bg-[#A8D070] rounded-2xl flex items-center justify-center text-[#251605] shadow-lg shadow-[#A8D070]/20 active:scale-90 transition-all"
                            >
                                <PlusIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="relative h-44 w-full mt-4 flex flex-col justify-end">
                        {/* Tooltip Simulation */}
                        <div className="absolute top-0 left-[40%] bg-[#A8D070] rounded-2xl px-4 py-2 shadow-2xl shadow-[#A8D070]/30 transform -translate-x-1/2 -translate-y-4 animate-bounce">
                            <span className="text-[#251605] font-black text-sm tracking-tight">₹500.00</span>
                            <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#A8D070] rotate-45"></div>
                        </div>

                        {/* Chart Visualization */}
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 120">
                            <defs>
                                <linearGradient id="gradientHome" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#A8D070" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#A8D070" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,80 Q40,60 80,70 T160,30 T240,50 T300,10 V120 H0 Z" fill="url(#gradientHome)" />
                            <path d="M0,80 Q40,60 80,70 T160,30 T240,50 T300,10" fill="none" stroke="#A8D070" strokeWidth="4" strokeLinecap="round" />
                            <circle cx="160" cy="30" r="5" fill="#1B1109" stroke="#A8D070" strokeWidth="3" />
                        </svg>

                        {/* X-Axis Labels */}
                        <div className="flex justify-between text-[9px] font-black text-white/20 mt-6 uppercase tracking-[0.2em]">
                            <span>10am</span>
                            <span>12pm</span>
                            <span>02pm</span>
                            <span>04pm</span>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div
                    onClick={onReviewsClick}
                    className="bg-white/5 border border-white/10 rounded-[40px] p-6 mb-12 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-all"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-[#FFD600]/10 rounded-2xl flex items-center justify-center">
                            <StarIcon className="w-8 h-8 text-[#FFD600]" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-white text-2xl font-black tracking-tight">4.9</span>
                                <span className="text-white/20 text-xs font-black uppercase tracking-widest">/ 5.0</span>
                            </div>
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Total 20 Reviews</p>
                        </div>
                    </div>
                    <div className="w-10 h-10 bg-white/5 rounded-2xl flex items-center justify-center text-white/30">
                        <ChevronDownIcon className="w-5 h-5 -rotate-90" />
                    </div>
                </div>
            </div >

            {/* Premium Floating Bottom Navigation */}
            <div className="fixed bottom-10 left-6 right-6 h-24 bg-[#A8D070] rounded-[48px] flex items-center justify-between px-10 shadow-[0_20px_50px_rgba(168,208,112,0.3)] z-50">
                <button
                    onClick={() => onNavigate('farmerHome')}
                    className="flex flex-col items-center gap-1 text-[#251605]"
                >
                    <HomeIcon className="w-8 h-8 drop-shadow-md" />
                    <div className="w-2 h-2 bg-[#251605] rounded-full scale-110"></div>
                </button>

                <button
                    onClick={() => onNavigate('favorites')}
                    className="flex flex-col items-center gap-1 text-[#251605] opacity-40 hover:opacity-100 transition-all"
                >
                    <HeartIconOutline className="w-8 h-8 stroke-2" />
                </button>

                <div className="relative -top-12">
                    <button
                        onClick={onAddItem}
                        className="w-24 h-24 bg-[#D84315] rounded-full flex items-center justify-center border-[6px] border-[#1B1109] shadow-2xl text-white transform hover:scale-110 active:scale-90 transition-all"
                    >
                        <PlusIcon className="w-12 h-12 stroke-[3]" />
                    </button>
                </div>

                <button
                    onClick={onHelpClick}
                    className="flex flex-col items-center gap-1 text-[#251605] opacity-40 hover:opacity-100 transition-all"
                >
                    <QuestionMarkOutline className="w-8 h-8 stroke-2" />
                </button>

                <button
                    onClick={onProfileClick}
                    className="flex flex-col items-center gap-1 text-[#251605] opacity-40 hover:opacity-100 transition-all"
                >
                    <UserIconOutline className="w-8 h-8 stroke-2" />
                </button>
            </div>

            {/* Overlay Sheet */}
            {showOrders && <OrderRequestsSheet onClose={() => setShowOrders(false)} />}
            {showRunningOrders && <RunningOrdersSheet onClose={() => setShowRunningOrders(false)} />}
        </div >
    );
};

export default FarmerHome;
