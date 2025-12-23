import React from 'react';
import {
    CheckCircleIcon
} from '@heroicons/react/24/solid';

const OrderSuccessScreen = ({ onTrack, onContinue }) => {
    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col items-center justify-center p-8">
            <div className="w-full flex flex-col items-center gap-8 mb-20 animate-in fade-in zoom-in duration-700">
                <div className="relative">
                    <div className="absolute inset-0 bg-[#A8B77D] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <CheckCircleIcon className="w-32 h-32 text-[#A8B77D] relative z-10" />
                </div>

                <div className="text-center">
                    <h1 className="text-white text-4xl font-black mb-4 tracking-tighter">Congratulations!!!</h1>
                    <p className="text-white/50 text-base font-medium leading-relaxed max-w-[200px] mx-auto">
                        Your order have been taken and is being attended to
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col gap-4 max-w-[280px]">
                <button
                    onClick={onTrack}
                    className="w-full h-16 bg-[#A8B77D] rounded-[24px] text-[#251605] font-black tracking-widest uppercase shadow-xl active:scale-95 transition-all text-sm"
                >
                    Track Order
                </button>
                <button
                    onClick={onContinue}
                    className="w-full h-14 bg-white/5 border border-white/20 rounded-[24px] text-white/60 font-black tracking-widest uppercase active:scale-95 transition-all text-[11px]"
                >
                    Continue Shopping
                </button>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/20 rounded-full"></div>
        </div>
    );
};

export default OrderSuccessScreen;
