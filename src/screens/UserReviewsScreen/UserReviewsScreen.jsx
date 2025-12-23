import React from 'react';
import { ChevronLeftIcon, QuestionMarkCircleIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { HomeIcon, HeartIcon, PlusIcon, UserIcon } from '@heroicons/react/24/outline';

const ReviewCard = ({ avatar, date, title, rating, review }) => (
    <div className="bg-[#A1887F] rounded-[32px] p-6 mb-4 shadow-lg relative">
        <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#251605]">
                <img src={avatar} alt="User" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
                <p className="text-white text-xs mb-2">{date}</p>
                <h3 className="text-white text-lg font-bold mb-2">{title}</h3>

                {/* Star Rating */}
                <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon
                            key={i}
                            className={`w-4 h-4 ${i < rating ? 'text-[#FF6F00]' : 'text-white/30'}`}
                        />
                    ))}
                </div>
            </div>

            <button className="text-white/70 hover:text-white transition-colors">
                <EllipsisVerticalIcon className="w-6 h-6" />
            </button>
        </div>

        <p className="text-white text-sm leading-relaxed">{review}</p>
    </div>
);

const UserReviewsScreen = ({ onBack, onHelpClick }) => {
    const reviews = [
        {
            id: 1,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
            date: '20/12/2024',
            title: 'Great Service',
            rating: 5,
            review: 'The app is lifesaver. The fruits and vegetables are so fresh and very cheap.'
        },
        {
            id: 2,
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
            date: '20/12/2024',
            title: 'Awesome and Nice',
            rating: 4,
            review: 'The app is lifesaver. The fruits and vegetables are so fresh and very cheap.'
        },
        {
            id: 3,
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
            date: '20/12/2024',
            title: 'Awesome and Nice',
            rating: 4,
            review: 'The fruits and vegetables are so fresh.'
        },
        {
            id: 4,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
            date: '20/12/2024',
            title: 'Awesome and Nice',
            rating: 4,
            review: 'Great quality products and fast delivery!'
        }
    ];

    return (
        <div className="min-h-screen bg-[#251605] flex flex-col relative pb-24">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-safe-top pt-6 pb-6">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <h1 className="text-xl font-bold tracking-widest text-white uppercase">
                    USER REVIEW
                </h1>

                <button
                    onClick={onHelpClick}
                    className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Reviews List */}
            <div className="flex-1 px-6 overflow-y-auto pb-4">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>

            {/* Floating Bottom Navigation */}
            <div className="absolute bottom-8 left-6 right-6 h-20 bg-[#9CCC65] rounded-[40px] flex items-center justify-between px-8 shadow-2xl">
                <button className="flex flex-col items-center gap-1 text-[#251605]">
                    <HomeIcon className="w-7 h-7 stroke-2" />
                </button>

                <button className="flex flex-col items-center gap-1 text-[#251605]">
                    <HeartIcon className="w-7 h-7 stroke-2" />
                </button>

                <div className="relative -top-10">
                    <button className="w-20 h-20 bg-[#BF360C]/90 rounded-full flex items-center justify-center border-4 border-[#251605] shadow-xl text-white hover:bg-[#D84315] hover:scale-105 transition-all">
                        <PlusIcon className="w-10 h-10" />
                    </button>
                </div>

                <button className="flex flex-col items-center gap-1 text-[#251605]">
                    <QuestionMarkCircleIcon className="w-7 h-7 stroke-2" />
                </button>

                <button className="flex flex-col items-center gap-1 text-[#251605]">
                    <UserIcon className="w-7 h-7 stroke-2" />
                </button>
            </div>
        </div>
    );
};

export default UserReviewsScreen;
