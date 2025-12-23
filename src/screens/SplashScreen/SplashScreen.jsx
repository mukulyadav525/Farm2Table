import React, { useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
    useEffect(() => {
        // Simulate loading completion
        const timer = setTimeout(() => {
            onFinish();
        }, 2500); // Show for 2.5 seconds
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="relative w-full h-screen bg-[#251605] overflow-hidden flex items-center justify-center">
            {/* Top Circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[120vw] h-[120vw] bg-[#3E2723] rounded-full opacity-100" />

            {/* Bottom Circle */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] w-[120vw] h-[120vw] bg-[#3E2723] rounded-full opacity-100" />

            {/* Left Circle */}
            <div className="absolute top-1/2 left-0 -translate-x-[60%] -translate-y-1/2 w-[100vw] h-[100vw] bg-[#3E2723] rounded-full opacity-100" />

            {/* Right Circle */}
            <div className="absolute top-1/2 right-0 translate-x-[60%] -translate-y-1/2 w-[100vw] h-[100vw] bg-[#3E2723] rounded-full opacity-100" />

            {/* Center Text */}
            <div className="relative z-10 text-white text-4xl font-bold tracking-wider">
                99%
            </div>
        </div>
    );
};

export default SplashScreen;
