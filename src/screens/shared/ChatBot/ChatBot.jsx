import React, { useState } from 'react';
import { ChevronLeftIcon, MagnifyingGlassIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'; // Using PaperAirplane for send
// Ideally I'd use the exact icon from design (bent arrow), but this is close

const ChatMessage = ({ message, isUser, timestamp }) => {
    return (
        <div className={`flex flex-col mb-4 ${isUser ? 'items-end' : 'items-start'}`}>
            <div
                className={`max-w-[80%] px-5 py-3 text-sm leading-relaxed ${isUser
                        ? 'bg-[#8D6E63] text-white rounded-2xl rounded-tr-sm'
                        : 'bg-[#212121] text-white/90 rounded-2xl rounded-tl-sm border border-white/5'
                    }`}
            >
                {message}
            </div>
            {timestamp && (
                <span className="text-xs text-white/30 mt-1 px-1">
                    {timestamp}
                </span>
            )}
        </div>
    );
};

const ChatChoice = ({ text }) => {
    return (
        <button className="bg-[#8D6E63] text-white text-xs px-4 py-2 rounded-full self-end mb-2 mr-2">
            {text}
        </button>
    )
}

const ChatBot = ({ onBack }) => {
    const [input, setInput] = useState('');

    return (
        <div className="min-h-screen bg-[#120B05] flex flex-col relative">
            {/* Header - Distinct Orange Background as per design */}
            <div className="bg-[#EF6C00] pt-12 pb-24 px-6 rounded-b-[40px] relative z-0">
                <div className="flex items-center">
                    <button
                        onClick={onBack}
                        className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="ml-4 text-xl font-semibold tracking-wide text-white">
                        Live Chat Support
                    </h1>
                </div>
                {/* Background Pattern overlay could go here */}
            </div>

            {/* Chat Area Container - Popped over the header */}
            <div className="flex-1 bg-[#1A1A1A] -mt-10 rounded-t-[40px] relative z-10 flex flex-col overflow-hidden mx-0 pt-8">

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {/* Static convo from screenshot */}
                    <ChatMessage
                        isUser={true}
                        message="Hi I don't think my app is working for me."
                        timestamp="3:00PM"
                    />

                    <ChatMessage
                        isUser={false}
                        message="I am really sorry to hear that you are going though this. You don't have to face it alone."
                    />
                    <ChatMessage
                        isUser={false}
                        message="Our AI chatbot is designed to provide you support and help. Can you specify what is not working on our app?"
                    />
                    <ChatMessage
                        isUser={false}
                        message="You can check your network connection."
                    />

                    {/* Bot Icon for the last message */}
                    <div className="flex items-end gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                            {/* Generic bot icon shape */}
                            <div className="grid grid-cols-2 gap-0.5">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="bg-[#212121] text-white/90 px-5 py-3 rounded-2xl rounded-tl-sm border border-white/5 text-sm">
                            Did it resolve your problem?
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <ChatChoice text="Yes Thanks" />
                    </div>

                    <div className="text-right">
                        <span className="text-xs text-white/30 mr-1">3:02PM</span>
                    </div>

                </div>

                {/* Input Area */}
                <div className="p-6 pb-8 bg-[#1A1A1A]">
                    <div className="flex items-center gap-3">
                        <div className="relative flex-1">
                            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Chat with...|"
                                className="w-full bg-[#2A2A2A] border border-white/5 rounded-full py-4 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-farm-orange/50 text-sm"
                            />
                        </div>
                        <button className="p-4 bg-[#7CB342] rounded-full text-white shadow-lg hover:bg-[#689F38] transition-colors">
                            {/* The icon in screenshot looks like a return/enter arrow */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" transform="scale(-1, 1) translate(-24, 0)" />
                                {/* Flipped arrow to match "Enter" style somewhat, or I'll just use a normal arrow */}
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChatBot;
