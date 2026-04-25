import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Semantic surface tokens */
        background: 'var(--bg)',
        foreground: 'var(--text)',
        border:     'var(--border)',

        card: {
          DEFAULT:    'var(--bg-card)',
          foreground: 'var(--text)',
          hover:      'var(--bg-card-hover)',
        },
        surface:  'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',

        /* Text */
        muted: {
          DEFAULT:    'var(--bg-surface)',
          foreground: 'var(--text-muted)',
        },

        primary: {
          DEFAULT: 'var(--primary-500)',
          foreground: '#ffffff',
          50:  'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },

        accent: {
          DEFAULT: 'var(--accent)',
          glow:    'var(--accent-glow)',
        },

        /* Ink scale */
        ink: {
          0: 'var(--ink-0)',
          1: 'var(--ink-1)',
          2: 'var(--ink-2)',
          3: 'var(--ink-3)',
          4: 'var(--ink-4)',
        },

        /* Foreground scale */
        fg: {
          1: 'var(--fg-1)',
          2: 'var(--fg-2)',
          3: 'var(--fg-3)',
          4: 'var(--fg-4)',
        },

        /* Semantic status */
        success:     'var(--success)',
        warning:     'var(--warning)',
        danger:      'var(--danger)',
        destructive: {
          DEFAULT:    'var(--danger)',
          foreground: 'var(--fg-1)',
        },
        info: 'var(--info)',

        /* Data categories */
        'cat-engineering': 'var(--cat-engineering)',
        'cat-science':     'var(--cat-science)',
        'cat-ai':          'var(--cat-ai)',
        'cat-leadership':  'var(--cat-leadership)',
        'cat-cloud':       'var(--cat-cloud)',

        /* Keep these for any remaining usage */
        input: 'var(--ink-1)',
        ring:  'var(--primary-ring)',
        secondary: {
          DEFAULT:    'var(--ink-2)',
          foreground: 'var(--fg-2)',
        },
      },

      borderRadius: {
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        full: 'var(--radius-full)',
      },

      fontFamily: {
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },

      boxShadow: {
        sm:               'var(--shadow-sm)',
        md:               'var(--shadow-md)',
        lg:               'var(--shadow-lg)',
        primary:          'var(--shadow-primary)',
        'primary-strong': 'var(--shadow-primary-strong)',
        'glow-accent':    'var(--glow-accent)',
      },

      transitionTimingFunction: {
        out:    'var(--ease-out)',
        spring: 'var(--ease-spring)',
      },

      transitionDuration: {
        fast: 'var(--dur-fast)',
        base: 'var(--dur-base)',
        slow: 'var(--dur-slow)',
      },

      animation: {
        'fade-in':    'fadeIn 0.5s var(--ease-out)',
        'slide-up':   'slideUp 0.5s var(--ease-out)',
        'line-grow':  'lineGrow 0.6s var(--ease-out) forwards',
        'pulse-ring': 'pulseRing 4s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        lineGrow: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        pulseRing: {
          '0%, 100%': { opacity: '0.8' },
          '50%':      { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
