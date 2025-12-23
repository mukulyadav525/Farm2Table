import React, { useState } from 'react';
import {
    ChevronLeftIcon,
    QuestionMarkCircleIcon,
    TagIcon,
    CheckCircleIcon
} from '@heroicons/react/24/solid';

const CouponCard = ({ code, description, discount, isApplied, onApply }) => (
    <div className={`p-5 rounded-[24px] border transition-all relative ${isApplied ? 'bg-[#A8B77D]/20 border-[#A8B77D]' : 'bg-[#251605] border-white/10'}`}>
        <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg">
                <TagIcon className="w-4 h-4 text-[#BC8E5C]" />
                <span className="text-white font-bold tracking-widest text-xs uppercase">{code}</span>
            </div>
            {isApplied && <CheckCircleIcon className="w-6 h-6 text-[#A8B77D]" />}
        </div>
        <p className="text-white/80 text-sm font-medium mb-4">{description}</p>
        <div className="flex justify-between items-center">
            <span className="text-[#BC8E5C] font-bold text-lg">{discount}</span>
            <button
                onClick={onApply}
                disabled={isApplied}
                className={`px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-widest ${isApplied ? 'bg-[#A8B77D] text-[#1B1109]' : 'bg-[#BC8E5C] text-[#1B1109] active:scale-95 transition-transform'}`}
            >
                {isApplied ? 'Applied' : 'Apply'}
            </button>
        </div>
    </div>
);

const DiscountScreen = ({ onBack, onHelpClick }) => {
    const [appliedCoupon, setAppliedCoupon] = useState('WELCOME50');

    const coupons = [
        { id: 1, code: 'WELCOME50', description: 'Get 50% off on your first order above ₹500', discount: '50% OFF' },
        { id: 2, code: 'FREESHIP', description: 'Free delivery on all orders this weekend', discount: 'FREE SHIP' },
        { id: 3, code: 'VEGGIE20', description: 'Flat 20% off on all fresh vegetables', discount: '20% OFF' }
    ];

    return (
        <div className="min-h-screen bg-[#1B1109] flex flex-col pt-12">
            <div className="px-6 flex justify-between items-center mb-8">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-white text-lg font-bold tracking-widest uppercase">Discounts</h1>
                <button
                    onClick={onHelpClick}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            <div className="px-6 mb-6">
                <div className="bg-[#251605] h-14 rounded-2xl flex items-center px-4 border border-white/10">
                    <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        className="bg-transparent flex-1 text-white placeholder-white/20 outline-none text-sm font-bold tracking-widest uppercase"
                    />
                    <button className="text-[#BC8E5C] font-bold text-sm uppercase tracking-widest">Apply</button>
                </div>
            </div>

            <div className="flex-1 px-6 overflow-y-auto space-y-4 pb-8">
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Available Coupons</h3>
                {coupons.map(coupon => (
                    <CouponCard
                        key={coupon.id}
                        {...coupon}
                        isApplied={appliedCoupon === coupon.code}
                        onApply={() => setAppliedCoupon(coupon.code)}
                    />
                ))}
            </div>
        </div>
    );
};

export default DiscountScreen;
