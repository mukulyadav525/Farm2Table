import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/solid';

const NumberOfOrdersScreen = ({ onBack }) => {
    const stats = [
        { label: 'Total Orders', value: '28K', icon: CheckCircleIcon, color: 'from-green-500 to-green-600' },
        { label: 'Pending', value: '156', icon: ClockIcon, color: 'from-yellow-500 to-yellow-600' },
        { label: 'In Transit', value: '42', icon: TruckIcon, color: 'from-blue-500 to-blue-600' },
    ];

    const recentOrders = [
        { id: 'ORD001', customer: 'Rajesh Kumar', items: 5, amount: 450, status: 'Delivered', date: '2024-01-15' },
        { id: 'ORD002', customer: 'Priya Sharma', items: 3, amount: 320, status: 'In Transit', date: '2024-01-15' },
        { id: 'ORD003', customer: 'Amit Patel', items: 7, amount: 680, status: 'Pending', date: '2024-01-14' },
        { id: 'ORD004', customer: 'Sneha Gupta', items: 4, amount: 410, status: 'Delivered', date: '2024-01-14' },
        { id: 'ORD005', customer: 'Vikram Singh', items: 6, amount: 590, status: 'Delivered', date: '2024-01-13' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-500/20 text-green-500';
            case 'In Transit': return 'bg-blue-500/20 text-blue-500';
            case 'Pending': return 'bg-yellow-500/20 text-yellow-500';
            default: return 'bg-gray-500/20 text-gray-500';
        }
    };

    return (
        <div className="min-h-screen bg-[#1B1109] text-white flex flex-col pb-6">
            {/* Header */}
            <div className="px-6 pt-12 pb-6 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full bg-[#251605] border border-white/10 flex items-center justify-center active:scale-95 transition-transform"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-2xl font-bold">Order Statistics</h1>
            </div>

            {/* Stats Grid */}
            <div className="px-6 mb-6 grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 flex flex-col items-center justify-center aspect-square`}
                    >
                        <stat.icon className="w-8 h-8 mb-2 opacity-90" />
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs opacity-80 text-center">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="px-6 flex-1">
                <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
                <div className="space-y-3">
                    {recentOrders.map(order => (
                        <div
                            key={order.id}
                            className="bg-[#251605] rounded-2xl p-4 border border-white/5"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <p className="font-bold">{order.customer}</p>
                                    <p className="text-white/50 text-xs">{order.id}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(order.status)}`}>
                                    {order.status}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="text-sm">
                                    <span className="text-white/70">{order.items} items</span>
                                    <span className="text-white/40 mx-2">•</span>
                                    <span className="text-white/70">{new Date(order.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                                </div>
                                <p className="font-bold text-[#BC8E5C]">₹{order.amount}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NumberOfOrdersScreen;
