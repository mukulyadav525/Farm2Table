import React, { useState } from 'react';
import { ArrowRightIcon, EyeIcon, EyeSlashIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { EnvelopeIcon } from '@heroicons/react/24/outline'; // Using Envelope for email
// We need icons for FB, Google, Insta. I will use text/generic icons placeholders or simple SVGs inline to avoid extra deps if possible 
// but FontAwesome is not installed. I'll make simple SVG circles.

const SocialButton = ({ icon }) => (
    <button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
        {icon}
    </button>
);

const SignInScreen = ({ onSignUp, onSignIn, onForgotPassword, onHelpClick }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#120B05] px-6 pt-safe-top flex flex-col relative w-full h-full">
            {/* Header Icon */}
            <div className="absolute top-6 right-6">
                <button
                    onClick={onHelpClick}
                    className="p-3 rounded-full border border-white/50 text-white hover:bg-white/10 transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="mt-20 mb-10 text-center">
                <h1 className="text-3xl font-bold text-white">Sign In To Farm2Table</h1>
            </div>

            <div className="flex-1 space-y-6">

                {/* Email Address */}
                <div className="space-y-2">
                    <label className="text-white font-bold text-sm tracking-wide ml-1">Email Address</label>
                    <div className="relative flex items-center bg-[#2A2118] rounded-3xl border border-[#889E58] px-4 py-4"> {/* Green border simulation from design */}
                        <EnvelopeIcon className="w-6 h-6 text-white/70 mr-3" />
                        <input
                            type="email"
                            defaultValue="princesskaguya@gmail.com"
                            className="bg-transparent flex-1 text-white placeholder-white/40 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <label className="text-white font-bold text-sm tracking-wide ml-1">Password</label>
                    <div className="relative flex items-center bg-[#2A2118] rounded-3xl border border-white/5 px-4 py-4">
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

                {/* Sign In Button */}
                <button
                    onClick={onSignIn}
                    className="w-full py-4 bg-[#8D6E63] hover:bg-[#795548] text-white rounded-3xl font-bold text-lg tracking-wide flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-black/30 mt-4"
                >
                    <span>Sign In</span>
                    <ArrowRightIcon className="w-6 h-6 stroke-2" />
                </button>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-8">
                    {/* Facebook */}
                    <SocialButton icon={<span className="font-bold text-xl text-white">f</span>} />
                    {/* Google */}
                    <SocialButton icon={<span className="font-bold text-xl text-white">G</span>} />
                    {/* Instagram */}
                    <SocialButton icon={
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                        </svg>
                    } />
                </div>

                {/* Footer Links */}
                <div className="flex flex-col items-center gap-2 mt-8">
                    <div className="text-sm">
                        <span className="text-white/80">Don't have an account? </span>
                        <button onClick={onSignUp} className="text-[#EA7C24] font-bold hover:underline">
                            Sign Up.
                        </button>
                    </div>
                    <button onClick={onForgotPassword} className="text-[#EA7C24] font-bold text-sm hover:underline">
                        Forgot Password
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SignInScreen;
