import React from 'react';
import { LockClosedIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { KeyIcon } from '@heroicons/react/24/solid';

const VerificationScreen = ({ onClose, onResend }) => {
    return (
        <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm">

            {/* Close Button Float */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <button
                    onClick={onClose}
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                    <XMarkIcon className="w-6 h-6 text-black" />
                </button>
            </div>

            {/* Card */}
            <div className="w-full max-w-sm bg-[#2A1E11] rounded-[40px] p-2 mb-32 border border-[#889E58]/30 mx-4 relative overflow-hidden">
                {/* Illustration Background */}
                <div className="h-64 bg-gradient-to-br from-[#4E342E] to-[#251605] rounded-[32px] relative overflow-hidden flex items-center justify-center mb-6">
                    {/* Simulated hand pressing pin pad - Simple vector shapes */}
                    <div className="text-9xl relative top-4">🔐</div>
                    <div className="absolute top-4 right-8 text-orange-500 font-bold tracking-widest text-xl rotate-12">///</div>
                </div>

                <div className="px-4 pb-6 text-center">
                    <h2 className="text-white text-xl font-bold mb-4 leading-tight">
                        We’ve Sent Verification <br />
                        Code to ****_****_***24
                    </h2>

                    <p className="text-white/70 text-sm mb-6">
                        Didn’t receive the link? Then re-send <br />
                        the password below! <KeyIcon className="w-4 h-4 inline text-yellow-500" />
                    </p>

                    <button
                        onClick={onResend}
                        className="w-full py-4 bg-[#8D6E63] hover:bg-[#795548] text-white rounded-3xl font-bold text-lg tracking-wide flex items-center justify-center gap-2 transition-transform active:scale-95"
                    >
                        <span>Re-Send OTP</span>
                        <LockClosedIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default VerificationScreen;
