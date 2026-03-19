import React from 'react';
import {
    ChevronLeftIcon,
    MapPinIcon,
    PhoneIcon
} from '@heroicons/react/24/solid';
import mapBg from '../../../assets/dark_map_bg.png';

const OrderTrackingScreen = ({ onBack, onStatusClick }) => {
    return (
        <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 z-0">
                <img src={mapBg} alt="Map" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

                {/* Simulated Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 800" fill="none">
                    <path d="M150 200 L150 250 L250 250 L250 450" stroke="#BC8E5C" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 6" />
                </svg>
            </div>

            {/* Header Overlay */}
            <div className="relative z-20 px-6 pt-12 flex justify-between items-start">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full bg-[#1B1109]/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <div className="w-12 h-12 rounded-full bg-[#1B1109]/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center active:scale-90 transition-all">
                    <MapPinIcon className="w-6 h-6" />
                </div>
            </div>

            {/* Tracker Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center">
                {/* Simulated Delivery Marker */}
                <div className="absolute top-[250px] left-[250px] -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-[#BC8E5C] flex items-center justify-center shadow-2xl">
                        <div className="bg-[#BC8E5C] w-5 h-2.5 rounded-sm"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Panel */}
            <div className="relative z-30 px-6 pb-12">
                <div className="bg-[#1B1109]/90 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 shadow-2xl">
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-white text-xl font-black mb-1">20 minutes left</h2>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Delivery to <span className="text-orange-500">Jor Bagh, Delhi</span></p>

                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-white/10 rounded-full mt-6 flex overflow-hidden">
                            <div className="w-[60%] h-full bg-[#A8B77D] rounded-full"></div>
                        </div>
                    </div>

                    <div
                        onClick={onStatusClick}
                        className="bg-[#251605] rounded-[32px] p-4 flex items-center gap-4 mb-6 border border-white/5 cursor-pointer active:scale-[0.98] transition-all"
                    >
                        <div className="w-12 h-12 rounded-[18px] bg-[#BC8E5C]/20 flex items-center justify-center text-[#BC8E5C]">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z" /></svg> {/* Simulating list icon */}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-white font-bold text-sm leading-tight">Delivery Status</h4>
                            <p className="text-white/30 text-[10px] leading-tight mt-0.5">We will deliver your goods to you in the shortest possible time.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pl-2">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                                className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/20"
                                alt="Mayank"
                            />
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm">Mayank Yadav</span>
                                <span className="text-white/40 text-[10px] uppercase tracking-wider">Personal Courier</span>
                            </div>
                        </div>
                        <button className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center active:scale-90">
                            <PhoneIcon className="w-5 h-5 text-orange-500" />
                        </button>
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="flex justify-center mt-6">
                    <div className="w-32 h-1 bg-white/20 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default OrderTrackingScreen;
