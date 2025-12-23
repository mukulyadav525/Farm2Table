import React from 'react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const PriceRow = ({ label, value, isTotal, isDiscount }) => (
    <div className={`flex justify-between items-center mb-3 ${isTotal ? 'mt-6 pt-4 border-t border-white/10' : ''}`}>
        <span className={`${isTotal ? 'text-white text-lg font-bold' : 'text-white/60 text-sm font-medium'}`}>
            {label}
        </span>
        <span className={`${isTotal ? 'text-white text-xl font-bold' : isDiscount ? 'text-green-500 font-bold text-sm' : 'text-white font-bold text-sm'}`}>
            {value}
        </span>
    </div>
);

const PriceBreakdownOverlay = ({ isOpen, onClose, subtotal }) => {
    if (!isOpen) return null;

    // Dummy calculations
    const gst = (subtotal * 0.05).toFixed(2);
    const delivery = 25.00;
    const platformFee = 5.00;
    const discount = 10.00;
    const total = (subtotal + parseFloat(gst) + delivery + platformFee - discount).toFixed(2);

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto transition-opacity"
                onClick={onClose}
            ></div>

            {/* Content Sheet */}
            <div className="bg-[#2D1B0F] w-full max-w-lg rounded-t-[40px] p-8 pb-12 relative z-10 pointer-events-auto animate-slide-up shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10">
                <div className="w-12 h-1.5 bg-white/10 rounded-full mx-auto mb-8"></div>

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-white text-xl font-bold tracking-widest uppercase">Price Details</h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-transform">
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                </div>

                <div className="space-y-1">
                    <PriceRow label="Item Total" value={`₹ ${subtotal}`} />
                    <PriceRow label="GST (5%)" value={`₹ ${gst}`} />
                    <PriceRow label="Delivery Charges" value={`₹ ${delivery}`} />
                    <PriceRow label="Platform Fee" value={`₹ ${platformFee}`} />
                    <PriceRow label="Discount" value={`- ₹ ${discount}`} isDiscount />

                    <PriceRow label="To Pay" value={`₹ ${total}`} isTotal />
                </div>

                <p className="text-white/30 text-xs mt-6 text-center leading-relaxed">
                    Final price includes all applicable taxes and fees.<br />
                    Delivery partner tip is not included.
                </p>
            </div>
        </div>
    );
};

export default PriceBreakdownOverlay;
