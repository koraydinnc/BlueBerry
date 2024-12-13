export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        hussar: ['HussarPrint', 'sans-serif'],
        hussarB: ['HussarPrintB', 'sans-serif'],
        hussarA: ['HussarPrintA', 'sans-serif'],
        mont: ['Mont', 'sans-serif'], 
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animationDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.animation-delay-200': { 'animation-delay': '200ms' },
          '.animation-delay-400': { 'animation-delay': '400ms' },
          '.animation-delay-600': { 'animation-delay': '600ms' },
          '.animation-delay-800': { 'animation-delay': '800ms' },
        },
        ['responsive', 'hover']
      );
    },
  ],
}
