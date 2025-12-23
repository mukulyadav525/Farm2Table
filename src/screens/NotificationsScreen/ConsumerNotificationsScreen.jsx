import React, { useState } from 'react';
import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon, SparklesIcon, TruckIcon } from '@heroicons/react/24/solid';

const NotificationItem = ({ icon: Icon, color, title, subtitle, time, image }) => (
    <div className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${color} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 pt-1">
            <h3 className="text-white text-base font-bold mb-1">{title}</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-1">{subtitle}</p>
            <p className="text-white/40 text-xs font-medium">{time}</p>
        </div>

        {image && (
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-white/5">
                <img src={image} alt="Product" className="w-full h-full object-cover" />
            </div>
        )}
    </div>
);

const ConsumerNotificationsScreen = ({ onBack, onHelpClick }) => {
    const [activeTab, setActiveTab] = useState('orders'); // 'orders' or 'offers'

    const orderNotifications = [
        {
            id: 1,
            icon: TruckIcon,
            color: 'bg-green-600',
            title: 'Order Delivered',
            subtitle: 'Your order #4532 containing Tomato, Potato has been delivered successfully.',
            time: '2 hours ago',
            image: '/src/assets/consumer_home/tomato.png'
        },
        {
            id: 2,
            icon: ShoppingBagIcon,
            color: 'bg-blue-500',
            title: 'Order Confirmed',
            subtitle: 'Seller has accepted your order #4531. It will be packed shortly.',
            time: '1 day ago',
            image: '/src/assets/consumer_home/potato.png'
        },
        {
            id: 3,
            icon: TruckIcon,
            color: 'bg-orange-500',
            title: 'Out for Delivery',
            subtitle: 'Order #4530 is out for delivery with our rider Ramesh.',
            time: '2 days ago'
        }
    ];

    const offerNotifications = [
        {
            id: 101,
            icon: SparklesIcon,
            color: 'bg-purple-500',
            title: 'Weekend Sale!',
            subtitle: 'Get flat 20% off on all fresh organic vegetables this weekend. Use code VEG20.',
            time: '3 hours ago'
        },
        {
            id: 102,
            icon: SparklesIcon,
            color: 'bg-yellow-500',
            title: 'New Arrivals',
            subtitle: 'Fresh seasonal fruits just arrived from Himachal. Check them out now!',
            time: '1 day ago'
        }
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col relative pb-8">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-safe-top pt-8 pb-6 bg-[#251605] rounded-b-[32px] mb-6 shadow-xl">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <h1 className="text-xl font-bold tracking-widest text-white uppercase">
                    NOTIFICATIONS
                </h1>

                <button
                    onClick={onHelpClick}
                    className="w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Tab Switcher */}
            <div className="px-6 mb-6">
                <div className="bg-[#2D1B0F] rounded-full p-1.5 flex shadow-inner border border-white/5">
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`flex-1 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeTab === 'orders'
                            ? 'bg-[#BC8E5C] text-white shadow-lg'
                            : 'text-white/40 hover:text-white/70'
                            }`}
                    >
                        Orders
                    </button>
                    <button
                        onClick={() => setActiveTab('offers')}
                        className={`flex-1 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeTab === 'offers'
                            ? 'bg-[#BC8E5C] text-white shadow-lg'
                            : 'text-white/40 hover:text-white/70'
                            }`}
                    >
                        Offers
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-6 overflow-y-auto">
                {activeTab === 'orders' ? (
                    <div className="flex flex-col gap-2">
                        {orderNotifications.map((notification) => (
                            <NotificationItem key={notification.id} {...notification} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        {offerNotifications.map((notification) => (
                            <NotificationItem key={notification.id} {...notification} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConsumerNotificationsScreen;
