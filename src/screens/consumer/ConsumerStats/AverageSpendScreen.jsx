import React from 'react';
import { ChevronLeftIcon, CurrencyRupeeIcon } from '@heroicons/react/24/solid';

const AverageSpendScreen = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col p-6 pt-12">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">Spending</h1>
            </div>

            <div className="bg-[#FF8A3D] rounded-[40px] p-8 mb-8 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center mb-6">
                        <CurrencyRupeeIcon className="w-6 h-6 text-[#1B1109]" />
                    </div>
                    <span className="text-[#1B1109]/60 text-sm font-bold uppercase tracking-widest block mb-2">Average Spend</span>
                    <span className="text-[#1B1109] text-5xl font-black">₹ 50.0</span>
                    <p className="text-[#1B1109]/60 text-xs font-bold mt-2">Per Order</p>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full border-[10px] border-white/20"></div>
                <div className="absolute bottom-[-40px] right-[40px] w-24 h-24 rounded-full bg-white/10"></div>
            </div>

            <div className="bg-[#251605] rounded-[32px] p-6 border border-white/10 mb-6">
                <h3 className="text-white font-bold mb-6">Monthly Breakdown</h3>
                <div className="flex items-end justify-between h-32 gap-2">
                    {['Jul', 'Aug', 'Sep', 'Oct'].map((month, i) => (
                        <div key={month} className="flex flex-col items-center gap-2 group">
                            <div className={`w-12 rounded-t-lg transition-all ${i === 3 ? 'bg-[#FF8A3D] h-24' : 'bg-white/10 h-16 group-hover:bg-[#FF8A3D]/50'}`}></div>
                            <span className="text-white/40 text-xs font-bold">{month}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#251605] rounded-[32px] p-6 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">Total Spent (Oct)</span>
                    <span className="text-white font-bold">₹ 1,250</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                    <div className="w-[70%] h-full bg-[#FF8A3D]"></div>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">
                    You've spent <span className="text-[#FF8A3D]">12% more</span> than last month. Great job supporting local farmers!
                </p>
            </div>
        </div>
    );
};

export default AverageSpendScreen;
