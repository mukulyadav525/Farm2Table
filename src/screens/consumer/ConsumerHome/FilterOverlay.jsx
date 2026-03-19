import React, { useState } from 'react';
import { XMarkIcon, StarIcon } from '@heroicons/react/24/solid';

const FilterChip = ({ label, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full font-bold text-sm transition-all border-2 ${isSelected
                ? 'bg-[#A8B77D] text-white border-transparent'
                : 'bg-transparent text-white border-[#BC8E5C]'
            }`}
    >
        {label}
    </button>
);

const PriceButton = ({ label, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={`w-14 h-14 rounded-full font-bold text-lg flex items-center justify-center transition-all ${isSelected
                ? 'bg-[#A8B77D] text-white'
                : 'bg-white text-gray-400'
            }`}
    >
        {label}
    </button>
);

const RatingButton = ({ isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isSelected
                ? 'bg-white text-orange-400'
                : 'bg-white text-gray-200'
            }`}
    >
        <StarIcon className="w-8 h-8" />
    </button>
);

const FilterOverlay = ({ isOpen, onClose, onApply }) => {
    const [selectedOffers, setSelectedOffers] = useState(['Delivery']);
    const [selectedTime, setSelectedTime] = useState('10-15 min');
    const [selectedPrice, setSelectedPrice] = useState('₹₹');
    const [selectedRating, setSelectedRating] = useState(4);

    if (!isOpen) return null;

    const toggleOffer = (offer) => {
        if (selectedOffers.includes(offer)) {
            setSelectedOffers(selectedOffers.filter((o) => o !== offer));
        } else {
            setSelectedOffers([...selectedOffers, offer]);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1B1109]/80 backdrop-blur-md px-4">
            <div className="w-full max-w-sm bg-[#1B1109] rounded-[48px] p-8 border-2 border-[#BC8E5C]/30 relative shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-white text-2xl font-light">Filter your search</h2>
                    <button
                        onClick={onClose}
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group active:scale-95 transition-transform"
                    >
                        <XMarkIcon className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Offers */}
                <div className="mb-8">
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">OFFERS</h3>
                    <div className="flex flex-wrap gap-3">
                        {['Delivery', 'Pick Up', 'Offer'].map((offer) => (
                            <FilterChip
                                key={offer}
                                label={offer}
                                isSelected={selectedOffers.includes(offer)}
                                onClick={() => toggleOffer(offer)}
                            />
                        ))}
                    </div>
                    <div className="mt-3">
                        <FilterChip
                            label="Online payment available"
                            isSelected={selectedOffers.includes('Online payment available')}
                            onClick={() => toggleOffer('Online payment available')}
                        />
                    </div>
                </div>

                {/* Delivery Time */}
                <div className="mb-8">
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">DELIVERY TIME</h3>
                    <div className="flex flex-wrap gap-3">
                        {['10-15 min', '20 min', '30 min'].map((time) => (
                            <FilterChip
                                key={time}
                                label={time}
                                isSelected={selectedTime === time}
                                onClick={() => setSelectedTime(time)}
                            />
                        ))}
                    </div>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">PRICING</h3>
                    <div className="flex gap-4">
                        {['₹', '₹₹', '₹₹₹'].map((price) => (
                            <PriceButton
                                key={price}
                                label={price}
                                isSelected={selectedPrice === price}
                                onClick={() => setSelectedPrice(price)}
                            />
                        ))}
                    </div>
                </div>

                {/* Rating */}
                <div className="mb-10">
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">RATING</h3>
                    <div className="flex justify-between">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <RatingButton
                                key={star}
                                isSelected={star <= selectedRating}
                                onClick={() => setSelectedRating(star)}
                            />
                        ))}
                    </div>
                </div>

                {/* Filter Button */}
                <button
                    onClick={() => {
                        onApply({ selectedOffers, selectedTime, selectedPrice, selectedRating });
                        onClose();
                    }}
                    className="w-full py-5 bg-[#BC8E5C] hover:bg-[#A67D4F] text-white rounded-[32px] font-bold text-lg tracking-widest uppercase shadow-xl shadow-[#BC8E5C]/20 transition-all active:scale-95"
                >
                    FILTER
                </button>
            </div>
        </div>
    );
};

export default FilterOverlay;
