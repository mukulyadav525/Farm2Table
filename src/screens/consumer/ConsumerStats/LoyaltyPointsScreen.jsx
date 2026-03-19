import React from 'react';
import { ChevronLeftIcon, GiftIcon, SparklesIcon } from '@heroicons/react/24/solid';

const LoyaltyPointsScreen = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col p-6 pt-12">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">Loyalty Points</h1>
            </div>

            <div className="bg-[#B39DDB] rounded-[40px] p-8 mb-8 text-center relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 shadow-xl">
                        <SparklesIcon className="w-8 h-8 text-[#4A148C]" />
                    </div>
                    <span className="text-[#4A148C] text-6xl font-black mb-2">120</span>
                    <span className="text-[#4A148C]/60 text-sm font-bold uppercase tracking-widest">Available Points</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            </div>

            <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Redeem Rewards</h3>

            <div className="space-y-4">
                <div className="bg-[#251605] border border-white/10 rounded-2xl p-4 flex gap-4 items-center opacity-50">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                        <GiftIcon className="w-6 h-6 text-white/20" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">₹50 Coupon</h4>
                        <p className="text-white/40 text-xs">Requires 200 pts</p>
                    </div>
                    <button disabled className="px-4 py-2 bg-white/5 rounded-lg text-white/20 text-xs font-bold uppercase">Locked</button>
                </div>

                <div className="bg-[#251605] border border-[#B39DDB]/30 rounded-2xl p-4 flex gap-4 items-center">
                    <div className="w-12 h-12 bg-[#B39DDB]/20 rounded-full flex items-center justify-center">
                        <GiftIcon className="w-6 h-6 text-[#B39DDB]" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">Free Delivery</h4>
                        <p className="text-white/40 text-xs">Requires 100 pts</p>
                    </div>
                    <button className="px-4 py-2 bg-[#B39DDB] rounded-lg text-[#4A148C] text-xs font-bold uppercase shadow-lg active:scale-95 transition-transform">Redeem</button>
                </div>
            </div>
        </div>
    );
};

export default LoyaltyPointsScreen;
