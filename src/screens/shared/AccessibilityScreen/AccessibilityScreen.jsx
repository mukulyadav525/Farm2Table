import React, { useState } from 'react';
import { ChevronLeftIcon, QuestionMarkCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { BookOpenIcon, MicrophoneIcon, EyeIcon, MagnifyingGlassIcon, HandRaisedIcon } from '@heroicons/react/24/solid';
// Using solid icons for the features, slightly different from outline to match the filled look if needed.
// Actually standard heroicons are fine.

const AccessOption = ({ icon: Icon, label, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full p-4 rounded-3xl flex items-center justify-between mb-3 transition-all duration-200 border border-white/5 ${isSelected
                ? 'bg-[#889E58] text-white'
                : 'bg-[#3E2723] text-white/80 hover:bg-[#4E342E]'
                }`}
        >
            <div className="flex items-center gap-4">
                <Icon className="w-6 h-6" />
                <span className="font-medium text-base tracking-wide">{label}</span>
            </div>

            {/* Radio Circle */}
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-white' : 'border-white/40'
                }`}>
                {isSelected && <div className="w-3 h-3 bg-white rounded-full" />}
            </div>
        </button>
    );
};

const AccessibilityScreen = ({ onBack, onContinue, onHelpClick }) => {
    const [selected, setSelected] = useState('Voice access');

    const options = [
        { id: 'screen-reader', label: 'Screen Reader', icon: BookOpenIcon },
        { id: 'Voice access', label: 'Voice access', icon: MicrophoneIcon },
        { id: 'invert-colors', label: 'Invert colors to improve contrast', icon: EyeIcon },
        { id: 'magnifier', label: 'Magnifier', icon: MagnifyingGlassIcon },
        { id: 'braille', label: 'Braille embossers', icon: HandRaisedIcon },
    ];

    return (
        <div className="min-h-screen bg-[#120B05] flex flex-col px-6 pt-safe-top">
            <div className="max-w-md mx-auto w-full flex flex-col min-h-screen">
                {/* Header */}
                <div className="flex items-center justify-between pt-6 pb-8">
                    <button
                        onClick={onBack}
                        className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>

                    <h1 className="text-xl font-bold tracking-widest text-white uppercase">
                        ACCESSIBILITY
                    </h1>

                    <button
                        onClick={onHelpClick}
                        className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10 transition-all active:scale-95"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Title */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white leading-tight">
                        Having any Problem ? <br />
                        Try out these features
                    </h2>
                </div>

                {/* Options List */}
                <div className="flex-1 overflow-y-auto pb-8 no-scrollbar">
                    {options.map((option) => (
                        <AccessOption
                            key={option.id}
                            icon={option.icon}
                            label={option.label}
                            isSelected={selected === option.label}
                            onClick={() => setSelected(option.label)}
                        />
                    ))}
                </div>

                {/* Continue Button */}
                <div className="pb-8 pt-4">
                    <button
                        onClick={() => onContinue(selected)}
                        className="w-full py-4 bg-[#8D6E63] hover:bg-[#795548] text-white rounded-3xl font-bold text-lg tracking-wide flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-black/30"
                    >
                        <span>Continue</span>
                        <ArrowRightIcon className="w-6 h-6 stroke-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccessibilityScreen;
