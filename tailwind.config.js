/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      colors: {
        app: {
          bg: 'var(--bg-main)',
          surface: 'var(--bg-surface)',
          muted: 'var(--bg-muted)',
          border: 'var(--border-default)',
          'border-strong': 'var(--border-strong)',
          text: 'var(--text-primary)',
          'text-muted': 'var(--text-muted)',
        },
        brand: {
          accent: 'var(--accent-brand)',
          'hover-bg': 'var(--accent-hover-bg)',
          progress: 'var(--accent-progress)',
        },
        dark: {
          bg: '#0B0B0D',
          surface: '#121215',
          border: '#242429',
          text: '#F4F4F5',
          muted: '#A1A1AA',
          accent: '#7C3AED',
        },
        light: {
          bg: '#F9F8F6',
          surface: '#FFFFFF',
          muted: '#F2F0EC',
          border: '#DCD9D0',
          'border-strong': '#18181B',
          text: '#141413',
          'text-muted': '#52524E',
          accent: '#6D28D9',
          progress: '#059669',
        }
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '6px',
        xl: '8px',
      }
    },
  },
  plugins: [],
}
