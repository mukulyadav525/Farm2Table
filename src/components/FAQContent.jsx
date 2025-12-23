import React from 'react';
import { MagnifyingGlassIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div
            className={`mb-4 rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#5D4037]/50 border border-white/10' : 'bg-[#2A1E11] border border-white/5'
                }`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-5 text-left"
            >
                <span className="font-semibold text-white text-base pr-4">
                    {question}
                </span>
                <div className={`p-2 rounded-full border border-white/10 transition-colors ${isOpen ? 'bg-[#889E58]/20 border-[#889E58]' : ''}`}>
                    {isOpen ? (
                        <ChevronUpIcon className="w-4 h-4 text-white" />
                    ) : (
                        <ChevronDownIcon className="w-4 h-4 text-white/40" />
                    )}
                </div>
            </button>

            {isOpen && (
                <div className="px-5 pb-6 pt-0 text-sm text-white/70 leading-relaxed font-light">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQContent = () => {
    const [openIndex, setOpenIndex] = React.useState(0);

    const faqs = [
        {
            question: "What is Farm2Table?",
            answer: "Farm2Table is a application developed to help farmers earn more and deliver healthy and fresh crops firect to consumers.",
        },
        {
            question: "How Farm2Table Works?",
            answer: "We connect local farmers directly with consumers through our app, handling logistics to ensure freshness.",
        },
        {
            question: "How Do you Track Orders?",
            answer: "You can track your order in real-time from the 'My Orders' section in the app menu.",
        },
        {
            question: "How does Interconnect work?",
            answer: "Interconnect is our proprietary network that optimizes delivery routes for fastest farm-to-door service.",
        }
    ];

    return (
        <div className="mt-6 px-6">
            {/* Search Bar */}
            <div className="relative mb-6">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                    type="text"
                    placeholder="Where can I..."
                    className="w-full bg-[#2A1E11] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-[#889E58]/50"
                />
            </div>

            {/* Accordion List */}
            <div className="space-y-2">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQContent;
