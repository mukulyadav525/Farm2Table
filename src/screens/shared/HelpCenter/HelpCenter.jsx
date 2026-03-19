import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Tabs from '../../../components/Tabs';
import FAQContent from '../../../components/FAQContent';
import LiveChatIntro from '../../../components/LiveChatIntro';

const HelpCenter = ({ onBack, onNavigate }) => {
    const [activeTab, setActiveTab] = React.useState('FAQ');

    return (
        <div className="min-h-screen bg-[#120B05] flex flex-col pt-safe-top overflow-hidden">
            <div className="max-w-4xl mx-auto w-full flex flex-col min-h-screen">
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                    <button
                        onClick={onBack}
                        className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95 shadow-lg"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold tracking-widest text-white uppercase flex-1 text-center font-black">
                        HELP CENTER
                    </h1>
                    <div className="w-12 h-12" /> {/* Spacer to center title */}
                </div>

                {/* Tabs */}
                <div className="px-6 mb-8 max-w-2xl mx-auto w-full">
                    <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto no-scrollbar px-6">
                    <div className="max-w-3xl mx-auto w-full">
                        {activeTab === 'FAQ' ? (
                            <FAQContent />
                        ) : (
                            <LiveChatIntro onStartChat={() => onNavigate('chat')} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
