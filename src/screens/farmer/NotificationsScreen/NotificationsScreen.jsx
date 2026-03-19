import React, { useState } from 'react';
import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

const NotificationItem = ({ avatar, title, subtitle, time, productImage }) => (
    <div className="flex items-center gap-4 py-4 border-b border-white/10 last:border-0">
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#251605]">
            <img src={avatar} alt="User" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
            <h3 className="text-white text-base font-medium mb-1">{title}</h3>
            {subtitle && <p className="text-white/70 text-sm">{subtitle}</p>}
            <p className="text-white/50 text-xs mt-1">{time}</p>
        </div>

        {productImage && (
            <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#251605]">
                <img src={productImage} alt="Product" className="w-full h-full object-cover" />
            </div>
        )}
    </div>
);

const UpdateItem = ({ icon, title, subtitle, time, starred }) => (
    <div className="flex items-center gap-4 py-4 border-b border-white/10 last:border-0">
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#251605]">
            <img src={icon} alt="Scheme" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
            <h3 className="text-white text-base font-medium mb-1">{title}</h3>
            <p className="text-white/70 text-xs">{subtitle}</p>
        </div>

        <div className="flex flex-col items-end gap-2">
            <p className="text-white/50 text-xs">{time}</p>
            {starred && <StarIcon className="w-5 h-5 text-[#FF6F00]" />}
        </div>
    </div>
);

const NotificationsScreen = ({ onBack, onHelpClick }) => {
    const [activeTab, setActiveTab] = useState('notification'); // 'notification' or 'updates'

    const notifications = [
        {
            id: 1,
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
            title: 'Tanya Yadav Placed a new order',
            time: '20 min ago',
            productImage: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=100&h=100&fit=crop'
        },
        {
            id: 2,
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
            title: 'Salim Smith left a 5 star review',
            time: '20 min ago',
            productImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop'
        },
        {
            id: 3,
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
            title: 'Royal Bengal agreed to cancel',
            time: '20 min ago',
            productImage: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=100&h=100&fit=crop'
        },
        {
            id: 4,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
            title: 'Pabel Vuiya Placed a new order',
            time: '20 min ago',
            productImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&h=100&fit=crop'
        }
    ];

    const updates = [
        {
            id: 1,
            icon: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop',
            title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
            subtitle: 'Government Scheme',
            time: '20 min ago',
            starred: false
        },
        {
            id: 2,
            icon: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=100&h=100&fit=crop',
            title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
            subtitle: 'Government Scheme',
            time: '20 min ago',
            starred: true
        },
        {
            id: 3,
            icon: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop',
            title: 'Kisan Credit Card (KCC) Scheme',
            subtitle: 'Government Scheme',
            time: '20 min ago',
            starred: true
        },
        {
            id: 4,
            icon: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=100&h=100&fit=crop',
            title: 'Krishi Vigyan Kendras (KVKs)',
            subtitle: 'Workshop',
            time: '20 min ago',
            starred: true
        },
        {
            id: 5,
            icon: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop',
            title: 'National Centre of Organic Farming (NCOF)',
            subtitle: 'Workshop',
            time: '20 min ago',
            starred: true
        },
        {
            id: 6,
            icon: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=100&h=100&fit=crop',
            title: 'Minimum Support Price (MSP) Hikes',
            subtitle: 'Trending',
            time: '20 min ago',
            starred: true
        },
        {
            id: 7,
            icon: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop',
            title: 'Focus on Climate-Resilient Varieties',
            subtitle: 'Trending',
            time: '20 min ago',
            starred: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#251605] flex flex-col relative pb-8">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-safe-top pt-6 pb-6">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <h1 className="text-xl font-bold tracking-widest text-white uppercase">
                    {activeTab === 'notification' ? 'NOTIFICATION' : 'UPDATES'}
                </h1>

                <button
                    onClick={onHelpClick}
                    className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Tab Switcher */}
            <div className="px-6 mb-6">
                <div className="bg-[#6D4C41] rounded-full p-1 flex">
                    <button
                        onClick={() => setActiveTab('notification')}
                        className={`flex-1 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${activeTab === 'notification'
                            ? 'bg-[#8D6E63] text-white'
                            : 'text-white/70'
                            }`}
                    >
                        NOTIFICATION
                    </button>
                    <button
                        onClick={() => setActiveTab('updates')}
                        className={`flex-1 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${activeTab === 'updates'
                            ? 'bg-[#8D6E63] text-white'
                            : 'text-white/70'
                            }`}
                    >
                        UPDATES
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-6 overflow-y-auto">
                {activeTab === 'notification' ? (
                    <div>
                        {notifications.map((notification) => (
                            <NotificationItem key={notification.id} {...notification} />
                        ))}
                    </div>
                ) : (
                    <div>
                        {updates.map((update) => (
                            <UpdateItem key={update.id} {...update} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NotificationsScreen;
