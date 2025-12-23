import React from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    ArrowUpIcon,
    CurrencyRupeeIcon,
    ShoppingBagIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import { ChartBarIcon, StarIcon } from '@heroicons/react/24/solid';

const FarmerTodayStatsScreen = ({ onBack, onHelpClick }) => {
    const hourlyData = [
        { time: '08 AM', revenue: 200 },
        { time: '10 AM', revenue: 450 },
        { time: '12 PM', revenue: 300 },
        { time: '02 PM', revenue: 600 },
        { time: '04 PM', revenue: 150 },
        { time: '06 PM', revenue: 400 },
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-12">
            {/* Header */}
            <div className="px-6 pt-16 pb-10 bg-[#A8D070] rounded-b-[48px] shadow-2xl relative">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-2xl bg-[#251605]/10 text-[#251605] flex items-center justify-center active:scale-95 transition-all"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-[#251605] text-xs font-black tracking-[0.4em] uppercase">Today's Stats</h1>
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-2xl bg-[#251605]/10 text-[#251605] flex items-center justify-center active:scale-95 transition-all"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-[#251605]/60 text-xs font-black uppercase tracking-widest mb-2">Total Revenue Today</p>
                    <h2 className="text-[#251605] text-6xl font-black tracking-tighter mb-6">₹1,200</h2>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#251605] rounded-full text-[#A8D070]">
                        <ArrowUpIcon className="w-4 h-4 stroke-[3]" />
                        <span className="text-xs font-black">12% Growth</span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="px-6 -mt-8 relative z-10 flex-1 flex flex-col gap-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#251605] border border-white/5 rounded-[32px] p-6 shadow-xl">
                        <ShoppingBagIcon className="w-6 h-6 text-[#A8D070] mb-4" />
                        <p className="text-white text-3xl font-black">24</p>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">New Orders</p>
                    </div>
                    <div className="bg-[#251605] border border-white/5 rounded-[32px] p-6 shadow-xl">
                        <ClockIcon className="w-6 h-6 text-orange-400 mb-4" />
                        <p className="text-white text-3xl font-black">4.2h</p>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Avg. Processing</p>
                    </div>
                </div>

                {/* Hourly Chart */}
                <div className="bg-[#251605] border border-white/5 rounded-[40px] p-8 shadow-xl flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-white text-base font-black uppercase tracking-widest">Hourly Breakdown</h3>
                        <ChartBarIcon className="w-5 h-5 text-white/30" />
                    </div>

                    <div className="flex-1 flex items-end justify-between gap-4 mb-4">
                        {hourlyData.map((d, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-3">
                                <div
                                    className={`w-full rounded-t-2xl transition-all duration-1000 ${i === 3 ? 'bg-[#A8D070]' : 'bg-white/10'}`}
                                    style={{ height: `${(d.revenue / 600) * 100}%` }}
                                ></div>
                                <span className="text-white/30 text-[9px] font-black uppercase whitespace-nowrap rotate-45 mt-2">{d.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Seller Banner */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-[32px] p-6 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10 flex items-center justify-between">
                        <div>
                            <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Top Performing Crop</p>
                            <h4 className="text-white text-2xl font-black uppercase tracking-tight">Red Tomatoes</h4>
                        </div>
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                            <StarIcon className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Pad */}
            <div className="mt-8 flex justify-center">
                <div className="w-32 h-1.5 bg-white/10 rounded-full"></div>
            </div>
        </div>
    );
};

export default FarmerTodayStatsScreen;
