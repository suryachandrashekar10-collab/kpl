/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kpl: {
          navy:         '#1B2A4A',
          gold:         '#F0A500',
          'gold-light': '#F5C842',
          dark:         '#080C14',
          surface:      '#0D1117',
          card:         '#161B22',
          border:       '#21262D',
          muted:        '#8B949E',
        },
        'red-label':   { DEFAULT: '#C0392B', bg: '#1A0505', border: '#7B1A1A', text: '#FF6B6B' },
        'black-label': { DEFAULT: '#2C2C2C', bg: '#0F0F0F', border: '#444444', text: '#CCCCCC' },
        'blue-label':  { DEFAULT: '#1A4A9A', bg: '#050D1A', border: '#1A3D8B', text: '#6B9FFF' },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', 'sans-serif'],
      },
      backgroundImage: {
        'kpl-gradient':   'linear-gradient(135deg, #1B2A4A 0%, #080C14 100%)',
        'gold-gradient':  'linear-gradient(135deg, #F0A500 0%, #F5C842 100%)',
        'red-gradient':   'linear-gradient(135deg, #C0392B 0%, #5A0A0A 100%)',
        'blue-gradient':  'linear-gradient(135deg, #1A4A9A 0%, #050D1A 100%)',
        'black-gradient': 'linear-gradient(135deg, #2C2C2C 0%, #0F0F0F 100%)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 1.5s ease-in-out infinite',
        'bid-flash':  'bid-flash 0.35s ease-out',
        'sold-drop':  'sold-drop 0.6s cubic-bezier(0.22,1,0.36,1)',
        'slide-in':   'slide-in 0.4s ease-out',
        'float':      'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(240,165,0,0.5)' },
          '50%':     { boxShadow: '0 0 0 14px rgba(240,165,0,0)' },
        },
        'bid-flash': {
          '0%':   { backgroundColor: 'rgba(240,165,0,0.25)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'sold-drop': {
          '0%':   { transform: 'translateY(-24px) scale(1.08)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)',        opacity: '1' },
        },
        'slide-in': {
          '0%':   { transform: 'translateX(-16px)', opacity: '0' },
          '100%': { transform: 'translateX(0)',     opacity: '1' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

