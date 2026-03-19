import React from 'react';
import {
    ChevronLeftIcon,
    Cog6ToothIcon,
    HomeIcon,
    HeartIcon,
    QuestionMarkCircleIcon,
    UserIcon,
    PlusIcon,
    AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';
import { UserIcon as UserIconSolid } from '@heroicons/react/24/solid';

const FarmerProfileScreen = ({ onBack, onNavigate, onHelpClick, onSettingsClick, onAddItem }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] relative flex flex-col pb-32 overflow-x-hidden">

            {/* Header Section */}
            <div className="relative h-72 w-full overflow-hidden">
                {/* Background Image/Overlay */}
                <div className="absolute inset-0 bg-[#251605]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#A8D070]/5 blur-[80px] rounded-full -mr-32 -mt-32"></div>
                </div>

                {/* Header Actions */}
                <div className="absolute top-0 left-0 right-0 px-6 pt-12 flex justify-center z-20">
                    <div className="max-w-6xl mx-auto w-full flex justify-between items-center">
                        <button
                            onClick={onBack}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md active:scale-90 transition-all"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>

                        <button
                            onClick={onSettingsClick}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md active:scale-90 transition-all"
                        >
                            <Cog6ToothIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Profile Centerpiece */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 z-10 text-center">
                    <div className="w-24 h-24 rounded-[32px] border-4 border-[#251605] overflow-hidden shadow-2xl mb-4 p-1 bg-white/5">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                            alt="Mahendar"
                            className="w-full h-full object-cover rounded-[24px]"
                        />
                    </div>
                    <h1 className="text-white text-3xl font-black tracking-tight uppercase">Mahendar</h1>
                    <div className="mt-2 px-6 py-1 rounded-full border border-white/20 bg-white/5 text-[10px] font-black text-white/60 tracking-[0.2em] uppercase">
                        Farmer
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
                {/* Stats Grid */}
                <div className="mt-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {/* Card 1: Today's Frequency (Green Variant) */}
                    <div
                        onClick={() => onNavigate('farmerTodayStats')}
                        className="bg-[#A8D070] rounded-[48px] p-8 relative flex flex-col shadow-2xl shadow-[#A8D070]/20 active:scale-95 transition-all cursor-pointer group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-[#251605] text-2xl font-black leading-tight uppercase tracking-tighter">Today's<br />Frequency</h3>
                            <div className="w-10 h-10 bg-[#251605]/10 rounded-2xl flex items-center justify-center text-[#251605]">
                                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Bar Chart Sensation */}
                        <div className="flex-1 flex items-end justify-between gap-2.5 px-2 mb-8 h-32">
                            {[0.3, 0.5, 0.9, 0.65, 0.4, 0.55, 0.15].map((h, i) => (
                                <div
                                    key={i}
                                    className={`w-3.5 rounded-full transition-all duration-700 ${i === 2 ? 'bg-[#251605] h-[90%]' : 'bg-[#251605]/20'}`}
                                    style={{ height: `${h * 100}%` }}
                                ></div>
                            ))}
                        </div>

                        <div className="text-center pt-4 border-t border-[#251605]/10">
                            <p className="text-[#251605]/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Today's Revenue</p>
                            <p className="text-[#251605] text-4xl font-black tracking-tighter">₹1200</p>
                        </div>
                    </div>

                    {/* Card 2: Monthly Activity (Orange Variant) */}
                    <div
                        onClick={() => onNavigate('farmerMonthlyStats')}
                        className="bg-[#FF7043] rounded-[48px] p-8 relative flex flex-col shadow-2xl shadow-[#FF7043]/20 active:scale-95 transition-all cursor-pointer group"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-white text-2xl font-black leading-tight uppercase tracking-tighter">Monthly<br />Activity</h3>
                            <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z" /></svg>
                            </div>
                        </div>

                        {/* Dot Grid Pulse */}
                        <div className="flex-1 grid grid-cols-4 gap-4 content-start mb-8">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-12 h-12 rounded-[18px] transition-all duration-300 ${i % 3 === 0 ? 'bg-white shadow-xl' : i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'}`}
                                ></div>
                            ))}
                        </div>

                        <div className="text-center pt-4 border-t border-white/20">
                            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Year Summary</p>
                            <p className="text-white text-lg font-black tracking-widest uppercase">This Month</p>
                        </div>
                    </div>
                </div>

                {/* Logout Mission */}
                <div className="px-6 mt-8 mb-40">
                    <button
                        onClick={() => onNavigate('roleSelection')}
                        className="group w-full py-6 bg-[#D84315] rounded-[28px] text-white font-black text-xs tracking-[0.4em] uppercase shadow-2xl shadow-[#D84315]/30 active:scale-95 transition-all relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        Logout
                    </button>
                </div>
            </div>

            {/* Premium Floating Bottom Navigation */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 max-w-lg w-[calc(100%-3rem)] h-24 bg-[#A8D070] rounded-[48px] flex items-center justify-between px-10 shadow-[0_20px_50px_rgba(168,208,112,0.3)] z-50">
                <button
                    onClick={() => onNavigate('farmerHome')}
                    className="flex flex-col items-center gap-1 text-[#251605] opacity-40 hover:opacity-100 transition-all"
                >
                    <HomeIcon className="w-8 h-8 stroke-2" />
                </button>

                <button
                    onClick={() => onNavigate('farmerOrderHistory')}
                    className="flex flex-col items-center gap-1 text-[#251605] opacity-40 hover:opacity-100 transition-all"
                >
                    <HeartIcon className="w-8 h-8 stroke-2" />
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
                    <QuestionMarkCircleIcon className="w-8 h-8 stroke-2" />
                </button>

                <button
                    onClick={() => onNavigate('farmerProfile')}
                    className="flex flex-col items-center gap-1 text-[#D84315] group"
                >
                    <UserIconSolid className="w-8 h-8 drop-shadow-lg" />
                    <div className="w-2 h-2 bg-[#D84315] rounded-full scale-110"></div>
                </button>
            </div>
        </div>
    );
};

export default FarmerProfileScreen;
