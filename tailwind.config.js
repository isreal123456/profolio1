/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#1a1a2e',
        panel: '#22223b',
        primaryStart: '#667eea',
        primaryEnd: '#764ba2',
        accentBlue: '#56ccf2',
        accentPink: '#ff4d8d',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 40px rgba(102, 126, 234, 0.35)',
        card: '0 15px 40px rgba(4, 8, 36, 0.45)',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(118, 75, 162, 0.45)' },
          '50%': { boxShadow: '0 0 0 14px rgba(118, 75, 162, 0)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 10% 20%, rgba(86, 204, 242, 0.25), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255, 77, 141, 0.2), transparent 40%), linear-gradient(135deg, #667eea, #764ba2)',
      },
    },
  },
  plugins: [],
}
