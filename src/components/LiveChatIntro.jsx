import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'; // Using generic icon as placeholder for image if needed, or I'll try to generate a div art
// Or I can use a simple emoji or just text description as requested.
// The design has a large illustration. I'll simulate it with a Circle and an Emoji/Icon.

const LiveChatIntro = ({ onStartChat }) => {
    return (
        <div className="mt-8 px-8 flex flex-col items-center flex-1">
            {/* Illustration Area */}
            <div className="w-64 h-64 bg-[#2A1E11] rounded-full flex items-center justify-center mb-8 border-4 border-[#889E58]/20 relative overflow-hidden shadow-2xl">
                {/* Placeholder for the Farmer Illustration */}
                <div className="text-9xl relative z-10 filter drop-shadow-2xl">👩‍🌾</div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#120B05]/40" />
                <div className="absolute -bottom-4 w-full h-1/2 bg-[#889E58]/10 blur-2xl rounded-full" />
            </div>

            {/* Text Content */}
            <div className="text-center space-y-4 mb-4">
                <h2 className="text-xl font-bold leading-relaxed text-white">
                    We are here to help you with your every day food needs!
                </h2>
                <p className="text-white/60 text-sm font-medium tracking-wide">
                    We aim to reply within few minutes 🤠
                </p>
            </div>

            {/* Spacer to push button down if needed, but flex-col handles it */}
            <div className="flex-1" />

            {/* Floating Button */}
            <button
                onClick={onStartChat}
                className="w-full py-5 px-6 bg-[#9CCC65] hover:bg-[#8BC34A] text-[#1B5E20] rounded-[32px] font-bold tracking-[0.1em] uppercase flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-xl shadow-black/30 mb-12 border border-[#AED581]"
            >
                <span>Live Chat</span>
                <ChatBubbleLeftRightIcon className="w-6 h-6 stroke-2" />
            </button>
        </div>
    );
};

export default LiveChatIntro;
