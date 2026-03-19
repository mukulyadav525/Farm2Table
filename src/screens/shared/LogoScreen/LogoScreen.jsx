import React from 'react';
import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const LogoScreen = ({ onGetStarted, onAccessibility, onLanguage, onHelpClick }) => {
    return (
        <div className="w-full h-screen bg-[#251605] flex flex-col items-center justify-between py-12 px-6 relative overflow-hidden">

            {/* Help Button - Top Right */}
            <button
                onClick={onHelpClick}
                className="absolute top-8 right-6 w-12 h-12 rounded-full border border-white/20 text-white/50 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 z-50"
            >
                <QuestionMarkCircleIcon className="w-6 h-6" />
            </button>

            {/* Background/Logo Area */}
            <div className="flex-1 flex flex-col items-center justify-center w-full">
                {/* Logo Simulation */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full border-4 border-white flex flex-col items-center justify-center overflow-hidden shadow-2xl">
                    {/* Sky/Field Background simulation */}
                    <div className="absolute inset-0 bg-sky-300">
                        <div className="absolute bottom-0 w-full h-1/2 bg-yellow-500/80 transform -skew-y-6 origin-bottom-left scale-150" />
                        <div className="absolute bottom-0 w-full h-1/3 bg-green-700/80 transform skew-y-3 origin-bottom-right scale-150" />
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/90 rounded-full blur-sm" /> {/* Sun */}
                    </div>

                    {/* Text Banner */}
                    <div className="relative z-10 bg-white w-[120%] py-4 transform -rotate-2 shadow-lg flex flex-col items-center justify-center">
                        <h1 className="text-3xl font-black tracking-widest text-[#251605] uppercase">
                            Farm2Table
                        </h1>
                    </div>

                    {/* Est Tag */}
                    <div className="absolute top-[62%] z-20 bg-black/80 px-3 py-1 rounded-full">
                        <span className="text-yellow-400 text-[10px] font-bold tracking-wider">EST. 2024</span>
                    </div>

                    {/* Bottom Curved Text Simulation */}
                    <div className="absolute bottom-8 text-[8px] font-bold text-[#251605] tracking-widest opacity-60">
                        CROP SHOP EAT NONSTOP!
                    </div>
                </div>
            </div>

            {/* Buttons Area */}
            <div className="w-full space-y-4 mb-8">
                {/* Get Started Button */}
                <button
                    onClick={onGetStarted}
                    className="w-full py-4 bg-[#8D6E63] hover:bg-[#795548] text-white rounded-2xl font-bold text-lg tracking-wide flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-black/30"
                >
                    <span>Get Started</span>
                    <ArrowRightIcon className="w-5 h-5 stroke-2" />
                </button>

                {/* Secondary Buttons */}
                <button
                    onClick={onAccessibility}
                    className="w-full py-4 bg-[#3E2723] hover:bg-[#321f1b] text-white/90 rounded-2xl font-medium text-base tracking-wide transition-colors border border-white/5"
                >
                    Accessibility
                </button>

                <button
                    onClick={onLanguage}
                    className="w-full py-4 bg-[#3E2723] hover:bg-[#321f1b] text-white/90 rounded-2xl font-medium text-base tracking-wide transition-colors border border-white/5"
                >
                    Language
                </button>
            </div>

            {/* Home Indicator Handle simulation if needed, but usually handled by OS */}
            <div className="w-32 h-1 bg-white/20 rounded-full" />
        </div>
    );
};

export default LogoScreen;
