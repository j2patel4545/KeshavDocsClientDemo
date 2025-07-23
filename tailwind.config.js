/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // ✅ Add this line!

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1e293b', // slate-800
        'primary-50': '#f8fafc', // slate-50
        'primary-100': '#f1f5f9', // slate-100
        'primary-200': '#e2e8f0', // slate-200
        'primary-300': '#cbd5e1', // slate-300
        'primary-400': '#94a3b8', // slate-400
        'primary-500': '#64748b', // slate-500
        'primary-600': '#475569', // slate-600
        'primary-700': '#334155', // slate-700
        'primary-800': '#1e293b', // slate-800
        'primary-900': '#0f172a', // slate-900
        'primary-foreground': '#ffffff', // white

        // Secondary Colors
        'secondary': '#3b82f6', // blue-500
        'secondary-50': '#eff6ff', // blue-50
        'secondary-100': '#dbeafe', // blue-100
        'secondary-200': '#bfdbfe', // blue-200
        'secondary-300': '#93c5fd', // blue-300
        'secondary-400': '#60a5fa', // blue-400
        'secondary-500': '#3b82f6', // blue-500
        'secondary-600': '#2563eb', // blue-600
        'secondary-700': '#1d4ed8', // blue-700
        'secondary-800': '#1e40af', // blue-800
        'secondary-900': '#1e3a8a', // blue-900
        'secondary-foreground': '#ffffff', // white

        // Accent Colors
        'accent': '#06b6d4', // cyan-500
        'accent-50': '#ecfeff', // cyan-50
        'accent-100': '#cffafe', // cyan-100
        'accent-200': '#a5f3fc', // cyan-200
        'accent-300': '#67e8f9', // cyan-300
        'accent-400': '#22d3ee', // cyan-400
        'accent-500': '#06b6d4', // cyan-500
        'accent-600': '#0891b2', // cyan-600
        'accent-700': '#0e7490', // cyan-700
        'accent-800': '#155e75', // cyan-800
        'accent-900': '#164e63', // cyan-900
        'accent-foreground': '#ffffff', // white

        // Background Colors
        'background': '#ffffff', // white
        'surface': '#f8fafc', // slate-50
        'surface-secondary': '#f1f5f9', // slate-100

        // Text Colors
        'text-primary': '#0f172a', // slate-900
        'text-secondary': '#64748b', // slate-500
        'text-muted': '#94a3b8', // slate-400

        // Status Colors
        'success': '#10b981', // emerald-500
        'success-50': '#ecfdf5', // emerald-50
        'success-100': '#d1fae5', // emerald-100
        'success-200': '#a7f3d0', // emerald-200
        'success-300': '#6ee7b7', // emerald-300
        'success-400': '#34d399', // emerald-400
        'success-500': '#10b981', // emerald-500
        'success-600': '#059669', // emerald-600
        'success-700': '#047857', // emerald-700
        'success-800': '#065f46', // emerald-800
        'success-900': '#064e3b', // emerald-900
        'success-foreground': '#ffffff', // white

        'warning': '#f59e0b', // amber-500
        'warning-50': '#fffbeb', // amber-50
        'warning-100': '#fef3c7', // amber-100
        'warning-200': '#fde68a', // amber-200
        'warning-300': '#fcd34d', // amber-300
        'warning-400': '#fbbf24', // amber-400
        'warning-500': '#f59e0b', // amber-500
        'warning-600': '#d97706', // amber-600
        'warning-700': '#b45309', // amber-700
        'warning-800': '#92400e', // amber-800
        'warning-900': '#78350f', // amber-900
        'warning-foreground': '#ffffff', // white

        'error': '#ef4444', // red-500
        'error-50': '#fef2f2', // red-50
        'error-100': '#fee2e2', // red-100
        'error-200': '#fecaca', // red-200
        'error-300': '#fca5a5', // red-300
        'error-400': '#f87171', // red-400
        'error-500': '#ef4444', // red-500
        'error-600': '#dc2626', // red-600
        'error-700': '#b91c1c', // red-700
        'error-800': '#991b1b', // red-800
        'error-900': '#7f1d1d', // red-900
        'error-foreground': '#ffffff', // white

        // Border Colors
        'border': '#e2e8f0', // slate-200
        'border-muted': '#f1f5f9', // slate-100
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 5vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 6vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 7vw, 4rem)',
        'fluid-hero': 'clamp(1.5rem, 4vw, 3.5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(6, 182, 212, 0.2)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'elevation-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        'elevation-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        'elevation-5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'morph-code': 'morphCode 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        },
        morphCode: {
          '0%': {
            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: '0.8',
          },
          '100%': {
            transform: 'matrix3d(1.05, 0, 0, 0, 0, 1.05, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'extra-tight': '-0.05em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'extra-loose': '2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
}