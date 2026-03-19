import React, { useState } from 'react';
import { ArrowRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const NameInputScreen = ({ onNext, onHelpClick }) => {
    const [name, setName] = useState('');

    return (
        <div className="w-full h-screen flex flex-col relative overflow-hidden">

            {/* Help Button - Top Right */}
            <button
                onClick={onHelpClick}
                className="absolute top-8 right-6 w-12 h-12 rounded-full border border-white/20 text-white/70 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 z-50"
            >
                <QuestionMarkCircleIcon className="w-6 h-6" />
            </button>

            {/* Top Half - Green Background with Fruit Basket */}
            <div className="h-[55%] bg-[#889E58] relative flex items-center justify-center pt-10">

                {/* Decorative elements - little fruit icons floating if needed, 
            but for now we focus on the central image placeholder */}

                {/* Main Illustration Placeholder */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* 
                In a real app, this would be <img src="fruit-basket.png" />
                I will simulate it with a composition of emojis for now to be standalone,
                or just a placeholder circle if preferred. Emojis can look fun. 
            */}
                    <div className="w-full h-full flex flex-col items-center justify-end relative z-10">
                        <div className="text-[8rem] leading-none drop-shadow-2xl filter hover:scale-105 transition-transform duration-300">
                            🧺
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] -z-10 opacity-80 grid grid-cols-2 gap-4">
                            <span>🍎</span>
                            <span>🍇</span>
                            <span>🍌</span>
                            <span>🍉</span>
                        </div>
                    </div>
                    {/* Shadow under basket */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/10 blur-xl rounded-full" />
                </div>
            </div>

            {/* Bottom Half - Dark Brown Background */}
            <div className="h-[45%] bg-[#251605] rounded-t-[40px] -mt-10 relative z-20 px-8 pt-12 flex flex-col">

                <label className="text-white text-lg font-medium mb-4 tracking-wide">
                    What is your firstname?
                </label>

                {/* Input Field */}
                <div className="relative mb-8">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tony Start"
                        className="w-full bg-[#1E1E1E] border border-[#889E58] text-white/90 placeholder-white/30 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#889E58]/50 transition-all font-medium"
                    />
                    {/* Checkmark icon if valid could go here */}
                </div>

                {/* Action Button */}
                <button
                    onClick={() => onNext(name)}
                    className="w-full py-4 bg-[#8D6E63] hover:bg-[#795548] text-white rounded-2xl font-bold text-lg tracking-wide flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-black/30"
                >
                    <span>Let's GO</span>
                    <ArrowRightIcon className="w-6 h-6 stroke-2" />
                </button>

            </div>
        </div>
    );
};

export default NameInputScreen;
