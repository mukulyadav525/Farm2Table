import React from 'react';
import { ArrowRightIcon, CheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'; // Using CheckIcon for success

const FarmerSuccessScreen = ({ onStart, onHelpClick }) => {
    return (
        <div className="min-h-screen bg-[#120B05] flex flex-col items-center justify-center px-6 relative">

            {/* Help Button - Top Right */}
            <button
                onClick={onHelpClick}
                className="absolute top-8 right-6 w-12 h-12 rounded-full border border-white/20 text-white/50 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 z-50"
            >
                <QuestionMarkCircleIcon className="w-6 h-6" />
            </button>

            {/* Animated Success Checkmark */}
            <div className="mb-12 relative flex items-center justify-center">
                {/* Outer Glow Ring */}
                <div className="w-40 h-40 bg-[#C5E1A5] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(197,225,165,0.3)] animate-pulse">
                    {/* Inner Check Circle */}
                    <div className="w-24 h-24 bg-[#4CAF50] rounded-full flex items-center justify-center shadow-lg">
                        <CheckIcon className="w-12 h-12 text-white stroke-4" strokeWidth={3} />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center mb-16">
                <h1 className="text-3xl font-bold text-white mb-4 tracking-wide">
                    Congratulations!!!
                </h1>
                <p className="text-white/80 text-lg font-light tracking-wide">
                    You are Verified Now!!
                </p>
            </div>

            {/* Button */}
            <button
                onClick={onStart}
                className="w-full max-w-xs py-5 bg-[#9CCC65] hover:bg-[#8BC34A] text-[#1B5E20] rounded-[40px] font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl border border-[#AED581]"
            >
                <span>START YOUR JOURNEY</span>
                <ArrowRightIcon className="w-5 h-5" />
            </button>

        </div>
    );
};

export default FarmerSuccessScreen;
