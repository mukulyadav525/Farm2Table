export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          bg: '#251605', // Deep dark brown from background
          card: '#422A16', // Lighter brown for cards
          accent: '#A05E23', // Orange/Brown CTA
          orange: '#EA7C24', // Bright orange for headlines/icons
          text: '#F5E6D3', // Off-white/cream
          muted: '#8B5E3C', // Muted text
          dark: '#120B05', // Very dark for chat bg
          'chat-user': '#3E2723',
          'chat-bot': '#2D1F16', // Or similar transparent dark
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Generic modern font
      }
    },
  },
  plugins: [],
}
