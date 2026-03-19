import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    HomeIcon,
    HeartIcon,
    QuestionMarkCircleIcon,
    UserIcon,
    PlusIcon
} from '@heroicons/react/24/outline'; // Using outline for nav items as per design consistency

const TotalRevenueScreen = ({ onBack, onHelpClick }) => {
    const [selectedPeriod, setSelectedPeriod] = useState('1 Week');

    return (
        <div className="min-h-screen bg-[#251605] px-6 pt-safe-top flex flex-col relative pb-24">

            {/* Header */}
            <div className="flex items-center justify-between pt-6 pb-4">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-lg font-bold tracking-widest text-white uppercase">
                    TOTAL REVENUE
                </h1>
                <button
                    onClick={onHelpClick}
                    className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Greeting */}
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                    Hello, Mahendar ! <span className="text-3xl">👋</span>
                </h2>
            </div>

            {/* Revenue Card */}
            <div className="bg-[#4E342E] rounded-[40px] p-6 mb-8 flex-1 relative shadow-lg">
                <h3 className="text-white text-5xl font-bold mb-8">₹500</h3>

                {/* Chart Container */}
                <div className="relative h-64 w-full">
                    {/* Horizontal Grid Lines */}
                    {[100, 90, 80, 70, 60, 50].map((val, i) => (
                        <div key={val} className="flex items-center mb-10 last:mb-0 absolute w-full" style={{ top: `${i * 20}%` }}>
                            <span className="text-white/50 text-xs w-8">{val}</span>
                            <div className="h-px bg-white/10 flex-1 border-t border-dashed border-white/20"></div>
                        </div>
                    ))}

                    {/* SVG Chart */}
                    <svg className="absolute inset-0 w-full h-full pt-2 pl-8" preserveAspectRatio="none" viewBox="0 0 300 200">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* The Path - Approx curve based on image */}
                        {/* Starts high, dips, small peak, dips low, high peak, drops */}
                        <path
                            d="M0,20 C20,20 40,60 60,60 S80,100 100,100 S120,40 140,40 S160,100 180,100 S200,80 220,70 S240,30 260,30 S280,60 300,80"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <path
                            d="M0,20 C20,20 40,60 60,60 S80,100 100,100 S120,40 140,40 S160,100 180,100 S200,80 220,70 S240,30 260,30 S280,60 300,80 V200 H0 Z"
                            fill="url(#chartGradient)"
                        />

                        {/* Point 1 */}
                        <circle cx="140" cy="40" r="6" fill="#EA7C24" stroke="white" strokeWidth="2" />
                        {/* Tooltip for Point 1 */}
                        <g transform="translate(140, 10)">
                            <rect x="-20" y="-25" width="40" height="20" rx="10" fill="white" />
                            <text x="0" y="-11" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#251605">₹80</text>
                        </g>

                        {/* Point 2 */}
                        <circle cx="300" cy="80" r="6" fill="#EA7C24" stroke="white" strokeWidth="2" />
                        {/* Tooltip for Point 2 */}
                        <g transform="translate(280, 70)">
                            <rect x="-20" y="25" width="40" height="20" rx="10" fill="white" />
                            <text x="0" y="39" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#251605">₹80</text>
                        </g>
                    </svg>
                </div>
            </div>

            {/* Period Selector */}
            <div className="bg-[#4E342E] p-1.5 rounded-full flex relative mb-8">
                {/* Active Indicator Background - Simplistic approach */}
                {['1 Day', '1 Week', '1 Month'].map((period) => (
                    <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`flex-1 py-3 text-center rounded-full text-sm font-bold transition-all ${selectedPeriod === period
                            ? 'bg-[#A1887F] text-[#251605] shadow-md'
                            : 'text-white/70 hover:text-white'
                            }`}
                    >
                        {period}
                    </button>
                ))}
            </div>

            {/* Floating Bottom Navigation (Visual Only) */}
            <div className="absolute bottom-8 left-6 right-6 h-20 bg-[#9CCC65] rounded-[40px] flex items-center justify-between px-8 shadow-2xl">
                <button className="flex flex-col items-center gap-1 text-[#BF360C]">
                    <HomeIcon className="w-7 h-7" strokeWidth={2.5} />
                    <div className="w-1.5 h-1.5 bg-[#BF360C] rounded-full"></div>
                </button>

                <button className="flex flex-col items-center gap-1 text-[#251605]">
                    <HeartIcon className="w-7 h-7 stroke-2" />
                </button>

                <div className="relative -top-10">
                    <button className="w-20 h-20 bg-[#BF360C]/90 rounded-full flex items-center justify-center border-4 border-[#251605] shadow-xl text-white">
                        <PlusIcon className="w-10 h-10" />
                    </button>
                </div>

                <button className="flex flex-col items-center gap-1 text-[#251605]">
                    <QuestionMarkCircleIcon className="w-7 h-7 stroke-2" />
                </button>

                <button className="flex flex-col items-center gap-1 text-[#251605]">
                    <UserIcon className="w-7 h-7 stroke-2" />
                </button>
            </div>

        </div>
    );
};

export default TotalRevenueScreen;
