import React from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    CalendarDaysIcon,
    ArrowUpCircleIcon,
    PresentationChartLineIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

const DailyDot = ({ intensity }) => (
    <div className={`w-full aspect-square rounded-[12px] shadow-inner transition-all duration-500 ${intensity === 'high' ? 'bg-white scale-110 shadow-white/20' :
            intensity === 'medium' ? 'bg-white/40' :
                'bg-white/10'
        }`}></div>
);

const FarmerMonthlyStatsScreen = ({ onBack, onHelpClick }) => {
    return (
        <div className="min-h-screen bg-[#120B05] flex flex-col relative overflow-hidden pb-12">
            {/* Header - Vibrant Orange Aesthetic */}
            <div className="px-6 pt-16 pb-20 bg-[#FF7043] rounded-b-[60px] shadow-2xl relative border-b border-black/5">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center active:scale-95 transition-all backdrop-blur-md"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">Monthly View</h1>
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center active:scale-95 transition-all backdrop-blur-md"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-6 border border-white/20 shadow-inner">
                        <CalendarDaysIcon className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-1">Monthly Earnings</p>
                    <h2 className="text-white text-6xl font-black tracking-tighter mb-2">₹42.8K</h2>
                    <p className="text-[#251605] text-xs font-black uppercase tracking-[0.2em] bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md">December 2025</p>
                </div>
            </div>

            {/* Activity Map Section */}
            <div className="px-6 -mt-10 relative z-10 flex-1 space-y-6">
                {/* Visual Analytics Overlay */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#251605] border border-white/5 rounded-[32px] p-6 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <ArrowUpCircleIcon className="w-4 h-4 text-[#A8D070]" />
                            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Vs Last Month</span>
                        </div>
                        <p className="text-white text-2xl font-black">+18.5%</p>
                    </div>
                    <div className="bg-[#251605] border border-white/5 rounded-[32px] p-6 shadow-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <PresentationChartLineIcon className="w-4 h-4 text-white/40" />
                            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Active Days</span>
                        </div>
                        <p className="text-white text-2xl font-black">22/30</p>
                    </div>
                </div>

                {/* Activity Heatmap Card */}
                <div className="bg-[#251605] border border-white/5 rounded-[40px] p-8 shadow-xl">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-white text-base font-black uppercase tracking-[0.2em]">Activity Map</h3>
                            <p className="text-white/30 text-[10px] uppercase font-black tracking-widest mt-1">Farm Participation</p>
                        </div>
                        <SparklesIcon className="w-6 h-6 text-[#FF7043] animate-pulse" />
                    </div>

                    <div className="grid grid-cols-7 gap-3 mb-4">
                        {/* Days Labels */}
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                            <span key={d} className="text-white/20 text-[10px] font-black text-center mb-2">{d}</span>
                        ))}
                        {/* Heatmap Dots Simulation */}
                        {[...Array(28)].map((_, i) => (
                            <DailyDot key={i} intensity={i % 5 === 0 ? 'high' : i % 3 === 0 ? 'medium' : 'low'} />
                        ))}
                    </div>

                    <div className="flex items-center gap-6 mt-8 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">Peak</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                            <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">Stable</span>
                        </div>
                    </div>
                </div>

                {/* Insight Banner */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 shadow-xl text-center">
                    <p className="text-white/40 text-xs font-bold leading-relaxed px-4">
                        "Your farm activity is <span className="text-[#FF7043] font-black">consistent</span>. Keep up the high delivery frequency to unlock level 3 rewards!"
                    </p>
                </div>
            </div>

            {/* Footer Pad */}
            <div className="mt-8 flex justify-center">
                <div className="w-32 h-1.5 bg-white/10 rounded-full"></div>
            </div>
        </div>
    );
};

export default FarmerMonthlyStatsScreen;
