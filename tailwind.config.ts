import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50:  '#FFFEF9',
          100: '#FAF6E8',
          200: '#F5EDD4',
          300: '#EDE0BE',
          400: '#E0CFA0',
        },
        gold: {
          300: '#E8C97A',
          400: '#D4A843',
          500: '#B8922A',
          600: '#9A7820',
          700: '#7A5E16',
          800: '#5C4510',
        },
        ink: {
          50:  '#F0EEE8',
          100: '#D8D4C8',
          200: '#A8A090',
          300: '#787060',
          400: '#4A4438',
          500: '#2C2820',
          600: '#1C1810',
          700: '#100E08',
          800: '#0A0804',
        },
        archive: {
          blue:  '#1C2E3E',
          sepia: '#8B6948',
          rust:  '#8B3A2A',
          moss:  '#4A6040',
        },
      },
      fontFamily: {
        display:  ['var(--font-display)', 'Georgia', 'serif'],
        serif:    ['var(--font-serif)', 'Georgia', 'serif'],
        body:     ['var(--font-body)', 'Georgia', 'serif'],
        sans:     ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:     ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper.svg')",
        'gold-gradient': 'linear-gradient(135deg, #D4A843 0%, #B8922A 50%, #D4A843 100%)',
        'ink-gradient':  'linear-gradient(180deg, #1C1810 0%, #2C2820 100%)',
      },
      boxShadow: {
        'certificate': '0 4px 32px rgba(28,24,16,0.12), 0 1px 4px rgba(28,24,16,0.08)',
        'certificate-lg': '0 8px 64px rgba(28,24,16,0.18), 0 2px 8px rgba(28,24,16,0.10)',
        'gold-glow': '0 0 24px rgba(184,146,42,0.25)',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        DEFAULT: '3px',
        'md': '4px',
        'lg': '6px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      letterSpacing: {
        'widest': '0.25em',
        'archive': '0.15em',
        'stamp': '0.1em',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease-out forwards',
        'fade-in':     'fadeIn 0.5s ease-out forwards',
        'shimmer':     'shimmer 2.5s infinite',
        'pulse-gold':  'pulseGold 3s ease-in-out infinite',
        'unfurl':      'unfurl 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(184,146,42,0)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(184,146,42,0.15)' },
        },
        unfurl: {
          '0%':   { opacity: '0', transform: 'scaleY(0.8) translateY(-10px)' },
          '100%': { opacity: '1', transform: 'scaleY(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
