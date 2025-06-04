import { defineConfig, presetUno, presetTypography, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,600,700',
        display: 'Poppins:400,500,600,700,800',
      },
    }),
  ],
  theme: {
    breakpoints: {
      'xs': '375px',  // iPhone SE and small phones
      'sm': '640px',  // Small tablets and large phones
      'md': '768px',  // Tablets
      'lg': '1024px', // Small laptops
      'xl': '1280px', // Laptops
      '2xl': '1536px' // Large screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '0.75rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316', // Orange - Indian saffron
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
      secondary: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e', // Green - Indian flag green
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
      accent: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6', // Blue - Indian navy
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
      gold: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b', // Gold
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Poppins', 'sans-serif'],
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
      'slide-up': 'slideUp 0.6s ease-out',
      'bounce-slow': 'bounce 2s infinite',
      'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      'shimmer': 'shimmer 2s linear infinite',
      'float': 'float 3s ease-in-out infinite',
      'glow-pulse': 'glowPulse 2s ease-in-out infinite',
    },
    keyframes: {
      pulseGlow: {
        '0%, 100%': { 
          boxShadow: '0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2)',
          transform: 'scale(1)'
        },
        '50%': { 
          boxShadow: '0 0 30px rgba(249, 115, 22, 0.6), 0 0 60px rgba(249, 115, 22, 0.3)',
          transform: 'scale(1.02)'
        },
      },
      shimmer: {
        '0%': { backgroundPosition: '-200% 0' },
        '100%': { backgroundPosition: '200% 0' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-5px)' },
      },
      glowPulse: {
        '0%, 100%': { 
          boxShadow: '0 0 15px rgba(34, 197, 94, 0.3), 0 0 30px rgba(34, 197, 94, 0.1)',
        },
        '50%': { 
          boxShadow: '0 0 25px rgba(34, 197, 94, 0.5), 0 0 50px rgba(34, 197, 94, 0.2)',
        },
      },
    },
  },
  shortcuts: {
    'btn-primary': 'bg-primary-500! hover:bg-primary-600! text-white! font-semibold py-3 px-6 rounded-lg transition-colors duration-200',
    'btn-secondary': 'bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200',
    'btn-outline': 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200',
    'btn-hero-primary': 'relative bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden',
    'btn-hero-outline': 'relative border-2 border-secondary-500 text-secondary-400 hover:text-white font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden hover:bg-secondary-500',
    'card': 'bg-white rounded-xl shadow-lg p-6',
    'gradient-bg': 'bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500',
    'text-gradient': 'bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent',
  },
  rules: [
    ['text-shadow', { 'text-shadow': '2px 2px 4px rgba(0,0,0,0.3)' }],
    ['text-shadow-lg', { 'text-shadow': '4px 4px 8px rgba(0,0,0,0.4)' }],
    ['shimmer-effect', { 
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      'background-size': '200% 100%',
    }],
    ['glow-primary', {
      'box-shadow': '0 0 20px rgba(249, 115, 22, 0.4), 0 0 40px rgba(249, 115, 22, 0.2)',
    }],
    ['glow-secondary', {
      'box-shadow': '0 0 15px rgba(34, 197, 94, 0.3), 0 0 30px rgba(34, 197, 94, 0.1)',
    }],
    // Global reset rules
    ['*', { 'box-sizing': 'border-box' }],
    ['html', { 'margin': '0', 'padding': '0', 'overflow-x': 'hidden' }],
    ['body', { 'margin': '0', 'padding': '0', 'overflow-x': 'hidden' }],
    // Remove underlines from all links and buttons
    ['a', { 'text-decoration': 'none' }],
    ['button', { 'text-decoration': 'none' }],
    ['a:hover', { 'text-decoration': 'none' }],
    ['button:hover', { 'text-decoration': 'none' }],
    ['a:focus', { 'text-decoration': 'none' }],
    ['button:focus', { 'text-decoration': 'none' }],
    // Force btn-primary background color
    ['.btn-primary', { 
      'background-color': '#f97316 !important',
      'color': '#ffffff !important'
    }],
    ['.btn-primary:hover', { 
      'background-color': '#ea580c !important'
    }],
    // Remove default button styles
    ['button', {
      'background': 'none',
      'border': 'none',
      'outline': 'none',
      'appearance': 'none',
      'background-color': 'transparent'
    }],
    ['.mega-menu-trigger', {
      'background-color': 'transparent !important',
      'border': 'none !important',
      'outline': 'none !important'
    }],
  ],
}) 