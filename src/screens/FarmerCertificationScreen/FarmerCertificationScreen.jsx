import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    ShieldCheckIcon,
    CloudArrowUpIcon,
    DocumentCheckIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline';

const FarmerCertificationScreen = ({ onBack, onNavigate }) => {
    const [isUploaded, setIsUploaded] = useState(false);

    const handleUpload = () => {
        // Mock upload logic
        setIsUploaded(true);
    };

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative overflow-hidden pb-12">
            {/* Background Blobs */}
            <div className="absolute top-[-10%] left-[-20%] w-[80%] h-[40%] bg-[#A8D070]/5 blur-[120px] rounded-full" />

            {/* Header */}
            <div className="px-6 pt-16 pb-8 bg-[#251605] border-b border-white/5 shadow-2xl relative z-10 text-center">
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center active:scale-95 transition-all"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-white text-xs font-black tracking-[0.4em] uppercase">Certification</h1>
                    <div className="w-12 h-12" /> {/* Spacer */}
                </div>

                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#A8D070]/10 rounded-3xl mb-6 border border-[#A8D070]/20">
                    <ShieldCheckIcon className="w-10 h-10 text-[#A8D070]" />
                </div>
                <h2 className="text-white text-3xl font-black tracking-tight uppercase mb-2 leading-tight">GoI Organic <br /> Certification</h2>
                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">Authorized by Government of India</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="px-6 pt-10 flex-1 flex flex-col gap-6 relative z-10">

                {/* Info Box */}
                <div className="bg-[#2A1E11] border border-[#A8D070]/20 rounded-[32px] p-6 flex gap-4 items-start">
                    <InformationCircleIcon className="w-6 h-6 text-[#A8D070] shrink-0" />
                    <p className="text-white/60 text-xs font-bold leading-relaxed">
                        To build trust with your buyers, please upload your "Pure Organic Farming" certificate issued by the Indian Government authorities. Once verified, a premium badge will appear on your profile.
                    </p>
                </div>

                {!isUploaded ? (
                    /* Upload Section */
                    <div
                        onClick={handleUpload}
                        className="border-2 border-dashed border-white/10 rounded-[40px] p-12 flex flex-col items-center justify-center gap-4 hover:border-[#A8D070]/50 transition-all cursor-pointer group bg-white/5"
                    >
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CloudArrowUpIcon className="w-10 h-10 text-white/30 group-hover:text-[#A8D070]" />
                        </div>
                        <div className="text-center">
                            <p className="text-white font-black text-sm uppercase tracking-widest mb-1">Click to Upload</p>
                            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">PDF, PNG or JPG max 10MB</p>
                        </div>
                    </div>
                ) : (
                    /* Success State */
                    <div className="bg-white/5 border border-[#A8D070] rounded-[40px] p-10 flex flex-col items-center text-center gap-6">
                        <div className="w-20 h-20 bg-[#A8D070] rounded-full flex items-center justify-center shadow-2xl shadow-[#A8D070]/30 animate-pulse">
                            <DocumentCheckIcon className="w-10 h-10 text-[#251605]" />
                        </div>
                        <div>
                            <h3 className="text-white text-xl font-black uppercase tracking-tight mb-2">Certificate Received</h3>
                            <p className="text-white/40 text-xs font-bold leading-relaxed px-6">
                                Your GoI certification is currently under review by our moderation team. You'll be notified once the "Organic" badge is active.
                            </p>
                        </div>
                        <button
                            onClick={onBack}
                            className="bg-[#A8D070] text-[#251605] px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-[#A8D070]/20 active:scale-95 transition-all"
                        >
                            Return to Settings
                        </button>
                    </div>
                )}

                {/* Authority Badge Section */}
                <div className="mt-auto py-8 flex flex-col items-center gap-4 opacity-30">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                        alt="GoI"
                        className="h-16 invert grayscale"
                    />
                    <p className="text-white text-[9px] font-black uppercase tracking-[0.3em]">Official Authority Verification</p>
                </div>
            </div>
        </div>
    );
};

export default FarmerCertificationScreen;
