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
        display: ['"Space Grotesk"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        cc: {
          bg: '#FFF8F2',
          darkBg: '#0B1021',
          navy: '#10162F',
          blue: '#3A10E5',
          yellow: '#FFD300',
          cream: '#F5EFE6',
          emerald: '#008A5E',
          darkCard: '#131A33',
          darkBorder: '#3B497E',
        },
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
          bg: '#0B1021',
          surface: '#131A33',
          border: '#3B497E',
          text: '#F8F7F4',
          muted: '#9BA4C2',
          accent: '#3A10E5',
          yellow: '#FFD300',
        },
        light: {
          bg: '#FFF8F2',
          surface: '#FFFFFF',
          muted: '#F5EFE6',
          border: '#10162F',
          'border-strong': '#10162F',
          text: '#10162F',
          'text-muted': '#4F5568',
          accent: '#3A10E5',
          progress: '#008A5E',
          yellow: '#FFD300',
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
