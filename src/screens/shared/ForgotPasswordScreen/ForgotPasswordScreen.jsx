import React, { useState } from 'react';
import { ChevronLeftIcon, LockClosedIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const OptionCard = ({ title, iconContent, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full p-4 rounded-[32px] flex items-center gap-4 mb-4 transition-all relative overflow-hidden ${isSelected
                ? 'border-2 border-[#889E58] bg-[#2A2118]'
                : 'bg-[#2A2118] border-2 border-transparent'
                }`}
        >
            {/* Icon Circle */}
            <div className="w-20 h-20 rounded-full bg-[#DDE6C8] flex items-center justify-center shrink-0 overflow-hidden relative">
                {iconContent}
            </div>

            {/* Text */}
            <span className="text-white font-bold text-lg tracking-wide">
                {title}
            </span>
        </button>
    );
};

const ForgotPasswordScreen = ({ onBack, onSend, onHelpClick }) => {
    const [selected, setSelected] = useState('CSC Centre');

    return (
        <div className="min-h-screen bg-[#120B05] px-6 pt-safe-top flex flex-col relative">
            {/* Header */}
            <div className="pt-6 pb-6 flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10 w-fit transition-all active:scale-95"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button
                    onClick={onHelpClick}
                    className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10 transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-3">Forgot Password</h1>
                <p className="text-white/70 text-sm leading-relaxed">
                    Select contact details where you want to reset your passwrod.
                </p>
            </div>

            <div className="flex-1">

                {/* Options */}
                <OptionCard
                    title="Use 2FA"
                    isSelected={selected === 'Use 2FA'}
                    onClick={() => setSelected('Use 2FA')}
                    iconContent={
                        // Simple lock visual similar to design
                        <div className="relative w-full h-full bg-[#889E58]/30 flex items-center justify-center">
                            <LockClosedIcon className="w-10 h-10 text-[#4E342E]" />
                        </div>
                    }
                />

                <OptionCard
                    title="CSC Centre"
                    isSelected={selected === 'CSC Centre'}
                    onClick={() => setSelected('CSC Centre')}
                    iconContent={
                        // Circle quadrants visual simulation
                        <div className="relative w-full h-full">
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#EFEFEF]" />
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#889E58]" />
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#4E342E]" />
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#EFEFEF]" />
                        </div>
                    }
                />

                <OptionCard
                    title="Google Authenticator"
                    isSelected={selected === 'Google Authenticator'}
                    onClick={() => setSelected('Google Authenticator')}
                    iconContent={
                        // Geometric shape
                        <div className="relative w-full h-full flex items-center justify-center bg-[#DDE6C8]">
                            <div className="w-10 h-10 border-4 border-[#889E58] rotate-45" />
                        </div>
                    }
                />

            </div>

            {/* Button */}
            <div className="pb-8">
                <button
                    onClick={onSend}
                    className="w-full py-4 bg-[#8D6E63] hover:bg-[#795548] text-white rounded-3xl font-bold text-lg tracking-wide flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-black/30"
                >
                    <span>Send Password</span>
                    <LockClosedIcon className="w-5 h-5" />
                </button>
            </div>

        </div>
    );
};

export default ForgotPasswordScreen;
