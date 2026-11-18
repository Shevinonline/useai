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
        canvas: {
          light: '#FAF8F5',
          dark: '#0B0F17',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#111827',
        },
        ink: {
          light: '#0F172A',
          dark: '#F8FAFC',
        },
        cc: {
          bg: '#FAF8F5',
          darkBg: '#0B0F17',
          navy: '#0F172A',
          blue: '#4F46E5',
          yellow: '#F59E0B',
          cream: '#F1EFEA',
          emerald: '#10B981',
          darkCard: '#111827',
          darkBorder: '#1E293B',
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
          bg: '#0B0F17',
          surface: '#111827',
          border: '#1E293B',
          text: '#F8FAFC',
          muted: '#94A3B8',
          accent: '#6366F1',
          yellow: '#FBBF24',
        },
        light: {
          bg: '#FAF8F5',
          surface: '#FFFFFF',
          muted: '#F1EFEA',
          border: '#E2E8F0',
          'border-strong': '#0F172A',
          text: '#0F172A',
          'text-muted': '#475569',
          accent: '#4F46E5',
          progress: '#10B981',
          yellow: '#F59E0B',
        }
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
      }
    },
  },
  plugins: [],
}
