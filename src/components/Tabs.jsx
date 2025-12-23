import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
    return (
        <div className="mx-6 p-1 bg-[#2A1E11] rounded-2xl flex relative backdrop-blur-sm border border-white/10">
            <button
                onClick={() => onTabChange('FAQ')}
                className={`flex-1 py-3 text-sm font-bold tracking-widest rounded-xl transition-all duration-300 uppercase ${activeTab === 'FAQ'
                    ? 'bg-[#8D6E63] text-white shadow-lg'
                    : 'text-white/50 hover:text-white'
                    }`}
            >
                FAQ
            </button>
            <button
                onClick={() => onTabChange('LIVE CHAT')}
                className={`flex-1 py-3 text-sm font-bold tracking-widest rounded-xl transition-all duration-300 uppercase ${activeTab === 'LIVE CHAT'
                    ? 'bg-[#8D6E63] text-white shadow-lg'
                    : 'text-white/50 hover:text-white'
                    }`}
            >
                LIVE CHAT
            </button>
        </div>
    );
};

export default Tabs;
