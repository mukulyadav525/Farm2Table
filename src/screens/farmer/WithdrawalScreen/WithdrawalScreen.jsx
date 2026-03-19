import React, { useState } from 'react';
import { ChevronLeftIcon, CheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const WithdrawalSuccessScreen = ({ onClose }) => {
    return (
        <div className="min-h-screen bg-[#251605] flex flex-col items-center justify-center px-6 relative">
            {/* Decorative Stars */}
            <div className="absolute top-20 left-10 w-6 h-6 text-[#9CCC65] opacity-70">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>
            <div className="absolute top-32 right-16 w-4 h-4 text-[#9CCC65] opacity-50">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>
            <div className="absolute top-48 left-20 w-3 h-3 text-[#9CCC65] opacity-60">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>
            <div className="absolute bottom-48 right-10 w-5 h-5 text-[#9CCC65] opacity-70">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>
            <div className="absolute bottom-32 left-16 w-4 h-4 text-[#9CCC65] opacity-50">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            </div>

            {/* Success Icon */}
            <div className="w-32 h-32 bg-[#9CCC65] rounded-full flex items-center justify-center mb-12 shadow-2xl">
                <CheckIcon className="w-20 h-20 text-white stroke-[3]" />
            </div>

            {/* Success Message */}
            <h1 className="text-white text-3xl font-bold mb-16">Withdrawal Successful</h1>

            {/* OK Button */}
            <button
                onClick={onClose}
                className="w-full max-w-sm bg-[#9CCC65] text-[#251605] py-4 rounded-full font-bold text-lg uppercase tracking-wide shadow-lg active:scale-95 transition-transform"
            >
                OK
            </button>
        </div>
    );
};

const WithdrawalScreen = ({ onBack, onSuccess, onHelpClick }) => {
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [amount, setAmount] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
    };

    const handleSuccessClose = () => {
        setShowSuccess(false);
        onSuccess && onSuccess();
    };

    if (showSuccess) {
        return <WithdrawalSuccessScreen onClose={handleSuccessClose} />;
    }

    return (
        <div className="min-h-screen bg-[#251605] px-6 pt-safe-top flex flex-col relative pb-8">
            {/* Header */}
            <div className="flex items-center justify-between pt-6 pb-8">
                <button
                    onClick={onBack}
                    className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold tracking-widest text-white uppercase">
                    WITHDRAW FUNDS
                </h1>
                <button
                    onClick={onHelpClick}
                    className="w-12 h-12 rounded-full border border-white/50 text-white hover:bg-white/10 flex items-center justify-center transition-all active:scale-95"
                >
                    <QuestionMarkCircleIcon className="w-6 h-6" />
                </button>
            </div>

            {/* Balance Display */}
            <div className="bg-[#3E2723] rounded-[40px] p-6 mb-8 text-center shadow-lg border border-[#4E342E]">
                <p className="text-[#D7CCC8] text-sm mb-2">Available Balance</p>
                <h2 className="text-white text-4xl font-bold">₹50,000.00</h2>
            </div>

            {/* Withdrawal Form */}
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="bg-[#3E2723] rounded-[40px] p-6 mb-6 shadow-lg border border-[#4E342E]">

                    {/* Amount */}
                    <div className="mb-6">
                        <label className="text-[#D7CCC8] text-sm mb-2 block uppercase tracking-wide">
                            Withdrawal Amount
                        </label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            required
                            className="w-full bg-[#251605] text-white px-4 py-3 rounded-2xl border border-white/10 focus:border-[#9CCC65] focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Account Holder Name */}
                    <div className="mb-6">
                        <label className="text-[#D7CCC8] text-sm mb-2 block uppercase tracking-wide">
                            Account Holder Name
                        </label>
                        <input
                            type="text"
                            value={accountHolderName}
                            onChange={(e) => setAccountHolderName(e.target.value)}
                            placeholder="Enter account holder name"
                            required
                            className="w-full bg-[#251605] text-white px-4 py-3 rounded-2xl border border-white/10 focus:border-[#9CCC65] focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Account Number */}
                    <div className="mb-6">
                        <label className="text-[#D7CCC8] text-sm mb-2 block uppercase tracking-wide">
                            Account Number
                        </label>
                        <input
                            type="text"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            placeholder="Enter account number"
                            required
                            className="w-full bg-[#251605] text-white px-4 py-3 rounded-2xl border border-white/10 focus:border-[#9CCC65] focus:outline-none transition-colors"
                        />
                    </div>

                    {/* IFSC Code */}
                    <div>
                        <label className="text-[#D7CCC8] text-sm mb-2 block uppercase tracking-wide">
                            IFSC Code
                        </label>
                        <input
                            type="text"
                            value={ifscCode}
                            onChange={(e) => setIfscCode(e.target.value)}
                            placeholder="Enter IFSC code"
                            required
                            className="w-full bg-[#251605] text-white px-4 py-3 rounded-2xl border border-white/10 focus:border-[#9CCC65] focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#9CCC65] text-[#251605] py-4 rounded-full font-bold text-lg uppercase tracking-wide shadow-lg active:scale-95 transition-transform"
                >
                    Withdraw
                </button>
            </form>
        </div>
    );
};

export default WithdrawalScreen;
