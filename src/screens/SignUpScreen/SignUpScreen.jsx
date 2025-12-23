import React, { useState } from 'react';
import { ArrowRightIcon, EyeIcon, EyeSlashIcon, ExclamationTriangleIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
// Note: Using EnvelopeIcon for email input
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const SignUpScreen = ({ onSignIn, onSignUp, onHelpClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Simulation of error state as per design
    const hasError = true;

    return (
        <div className="min-h-screen bg-[#120B05] px-6 pt-safe-top flex flex-col relative">
            {/* Header Icon */}
            <div className="absolute top-6 right-6">
                <button
                    onClick={onHelpClick}
                    className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10 transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="mt-20 mb-8 text-center">
                <h1 className="text-3xl font-bold text-white mb-2">Sign Up For Free</h1>
            </div>

            <div className="flex-1 space-y-6">

                {/* Email Address */}
                <div className="space-y-2">
                    <label className="text-white font-bold text-sm tracking-wide ml-1">Email Address</label>
                    <div className={`relative flex items-center bg-[#2A2118] rounded-3xl border ${hasError ? 'border-farm-orange' : 'border-farm-accent'} px-4 py-4`}>
                        <EnvelopeIcon className="w-6 h-6 text-white/70 mr-3" />
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="bg-transparent flex-1 text-white placeholder-white/40 focus:outline-none"
                        />
                    </div>
                    {/* Error Message Simulation */}
                    {hasError && (
                        <div className="flex items-center bg-[#2A2118] border border-farm-orange rounded-3xl px-4 py-3 text-farm-orange text-sm font-semibold">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-3" />
                            <span>Invalid Email Address!!!</span>
                        </div>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <label className="text-white font-bold text-sm tracking-wide ml-1">Password</label>
                    <div className="relative flex items-center bg-[#2A2118] rounded-3xl border border-white/10 px-4 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white/70 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password..."
                            className="bg-transparent flex-1 text-white placeholder-white/40 focus:outline-none"
                        />
                        <button onClick={() => setShowPassword(!showPassword)} className="text-white/40 hover:text-white">
                            {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Password Confirmation */}
                <div className="space-y-2">
                    <label className="text-white font-bold text-sm tracking-wide ml-1">Password Confirmation</label>
                    <div className="relative flex items-center bg-[#2A2118] rounded-3xl border border-white/10 px-4 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white/70 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Enter your password..."
                            className="bg-transparent flex-1 text-white placeholder-white/40 focus:outline-none"
                        />
                        <button onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-white/40 hover:text-white">
                            {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Sign Up Button */}
                <button
                    onClick={onSignUp}
                    className="w-full py-4 bg-[#8D6E63] hover:bg-[#795548] text-white rounded-3xl font-bold text-lg tracking-wide flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-black/30 mt-4"
                >
                    <span>Sign Up</span>
                    <ArrowRightIcon className="w-6 h-6 stroke-2" />
                </button>

                {/* Footer Link */}
                <div className="text-center mt-6">
                    <span className="text-white/80 text-sm">Already have an account? </span>
                    <button onClick={onSignIn} className="text-[#EA7C24] font-bold text-sm hover:underline">
                        Sign In.
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SignUpScreen;
