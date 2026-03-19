import React from 'react';
import { ChevronLeftIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

const OrderItem = ({ id, items, date, price, status }) => (
    <div className="bg-[#2A1E11] p-4 rounded-2xl mb-4 border border-white/5">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-white font-bold text-sm">Order #{id}</h3>
                <p className="text-white/40 text-xs">{date}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${status === 'Delivered' ? 'bg-[#A8B77D] text-[#1B1109]' : 'bg-orange-500/20 text-orange-500'
                }`}>
                {status}
            </span>
        </div>
        <p className="text-white/70 text-sm mb-3 line-clamp-1">{items.join(', ')}</p>
        <div className="flex justify-between items-center">
            <span className="text-[#A8B77D] font-bold">₹ {price}</span>
            <button className="text-white/40 text-xs underline">View Details</button>
        </div>
    </div>
);

const TotalOrdersScreen = ({ onBack }) => {
    const orders = [
        { id: '4532', items: ['Tomato', 'Potato', 'Onion'], date: 'Oct 24, 2024', price: '125', status: 'Delivered' },
        { id: '4531', items: ['Fresh Milk', 'Bread', 'Eggs'], date: 'Oct 20, 2024', price: '250', status: 'Delivered' },
        { id: '4530', items: ['Green Apple', 'Bananas'], date: 'Oct 15, 2024', price: '180', status: 'Delivered' },
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col p-6 pt-12">
            <div className="flex items-center gap-4 mb-8">
                <button onClick={onBack} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">My Orders</h1>
            </div>

            <div className="flex gap-4 mb-8">
                <div className="w-1/2 bg-[#A8B77D] rounded-[32px] p-6 flex flex-col justify-between h-40">
                    <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                        <ShoppingBagIcon className="w-5 h-5 text-[#1B1109]" />
                    </div>
                    <div>
                        <span className="text-[#1B1109]/60 text-xs font-bold uppercase block mb-1">Total Orders</span>
                        <span className="text-[#1B1109] text-3xl font-bold">25</span>
                    </div>
                </div>
                <div className="w-1/2 bg-[#251605] border border-white/10 rounded-[32px] p-6 flex flex-col justify-between h-40">
                    <div>
                        <span className="text-white/40 text-xs font-bold uppercase block mb-1">Active</span>
                        <span className="text-white text-3xl font-bold">0</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-0 h-full bg-[#A8B77D]"></div>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Past Orders</h3>
                {orders.map(order => (
                    <OrderItem key={order.id} {...order} />
                ))}
            </div>
        </div>
    );
};

export default TotalOrdersScreen;
