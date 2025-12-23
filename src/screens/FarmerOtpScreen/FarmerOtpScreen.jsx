import React, { useState } from 'react';
import { ChevronLeftIcon, QuestionMarkCircleIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

const DigitBox = ({ digit, focused, filled }) => {
    return (
        <div className={`relative w-16 h-20 rounded-[24px] flex items-center justify-center text-3xl font-black transition-all duration-300 border-2 shadow-2xl ${focused
                ? 'bg-white/10 border-[#E64A19] shadow-[#E64A19]/20 scale-110 z-10'
                : filled
                    ? 'bg-white/5 border-white/20 text-white'
                    : 'bg-white/5 border-white/5 text-white/20'
            }`}>
            {digit}
            {focused && (
                <div className="absolute bottom-4 w-6 h-1 bg-[#E64A19] rounded-full animate-pulse" />
            )}
        </div>
    );
};

const KeypadButton = ({ label, sub, icon: Icon, onClick }) => (
    <button
        onClick={onClick}
        className="group relative flex flex-col items-center justify-center py-6 rounded-[32px] transition-all active:scale-90"
    >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-active:opacity-100 rounded-[32px] transition-opacity blur-xl"></div>
        {Icon ? (
            <Icon className="w-8 h-8 text-white group-active:text-[#A8D070]" />
        ) : (
            <>
                <span className="text-3xl font-black text-white group-active:text-[#A8D070] transition-colors">{label}</span>
                {sub && <span className="text-[10px] font-black text-white/30 tracking-[0.2em] uppercase mt-1">{sub}</span>}
            </>
        )}
    </button>
);

const FarmerOtpScreen = ({ onBack, onVerify, onHelpClick }) => {
    const [code, setCode] = useState(['2', '0', '2', '']);

    const keys = [
        { label: '1', sub: '' }, { label: '2', sub: 'abc' }, { label: '3', sub: 'def' },
        { label: '4', sub: 'ghi' }, { label: '5', sub: 'jkl' }, { label: '6', sub: 'mno' },
        { label: '7', sub: 'pqrs' }, { label: '8', sub: 'tuv' }, { label: '9', sub: 'wxyz' },
        { label: '.', sub: '' }, { label: '0', sub: '' }, {
            label: 'backspace', icon: ({ className }) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-[#E64A19]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[40%] bg-[#A8D070]/10 blur-[120px] rounded-full" />

            <div className="relative z-10 px-6 pt-16 flex flex-col h-full flex-1">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
                        <span className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em]">Secure Auth</span>
                    </div>
                    <button
                        onClick={onHelpClick}
                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all"
                    >
                        <QuestionMarkCircleIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Title Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A8D070]/10 rounded-3xl mb-6 border border-[#A8D070]/20">
                        <FaceSmileIcon className="w-10 h-10 text-[#A8D070]" />
                    </div>
                    <h1 className="text-white text-4xl font-black tracking-tight uppercase mb-4">Verification</h1>
                    <p className="text-white/40 text-sm font-bold leading-relaxed px-8">
                        We've sent a unique 4-digit code to your registered device <span className="text-white/80">982773XXXX</span>
                    </p>
                </div>

                {/* OTP Section */}
                <div className="bg-white/5 backdrop-blur-3xl rounded-[40px] p-8 border border-white/10 relative shadow-2xl overflow-hidden mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Access Pin</span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#E64A19] rounded-full animate-pulse" />
                            <span className="text-white/60 text-[10px] font-black uppercase tracking-widest"><span className="text-[#E64A19] underline">Resend</span> in 48s</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                        {code.map((d, i) => (
                            <DigitBox key={i} digit={d} filled={d !== ''} focused={code[i] === '' && (i === 0 || code[i - 1] !== '')} />
                        ))}
                    </div>

                    <button
                        onClick={onVerify}
                        className="w-full py-6 bg-[#E64A19] hover:bg-[#FF5722] text-white rounded-[28px] font-black text-sm tracking-[0.3em] uppercase shadow-2xl shadow-[#E64A19]/30 active:scale-95 transition-all relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative z-10">Confirm & Verify</span>
                    </button>
                </div>

                {/* Glass Keypad */}
                <div className="mt-auto grid grid-cols-3 gap-2 pb-8">
                    {keys.map((key, i) => (
                        <KeypadButton
                            key={i}
                            label={key.label}
                            sub={key.sub}
                            icon={key.icon}
                            onClick={() => console.log('Press', key.label)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FarmerOtpScreen;
