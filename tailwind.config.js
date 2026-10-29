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
          border: 'var(--border-default)',
          text: 'var(--text-primary)',
          muted: 'var(--text-muted)',
        },
        brand: {
          accent: 'var(--accent-brand)',
          'hover-bg': 'var(--accent-hover-bg)',
        },
        dark: {
          bg: '#13151A',
          surface: '#1C1F26',
          border: '#2D323E',
          text: '#F8FAFC',
          muted: '#94A3B8',
          accent: '#7C3AED',
        },
        light: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          border: '#E2E8F0',
          text: '#0F172A',
          muted: '#64748B',
          accent: '#7C3AED',
        }
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        md: '6px',
        lg: '6px',
      }
    },
  },
  plugins: [],
}
