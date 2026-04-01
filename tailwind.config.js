/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(20, 20, 20)',
        'dark-secondary': 'rgba(255, 255, 255, 0.06)',
        'dark-border': 'rgba(255, 255, 255, 0.12)',
        'dark-text': 'rgba(255, 255, 255, 0.78)',
        'dark-text-secondary': 'rgba(255, 255, 255, 0.85)',
        'dark-overlay': 'rgba(0, 0, 0, 0.22)',
        'primary-accent': 'rgba(173, 216, 230, 0.18)',
        'primary-accent-border': 'rgba(173, 216, 230, 0.35)',
      },
      backgroundColor: {
        dark: 'rgb(20, 20, 20)',
        'dark-secondary': 'rgba(255, 255, 255, 0.06)',
        'dark-overlay': 'rgba(0, 0, 0, 0.22)',
      },
      borderColor: {
        'dark-border': 'rgba(255, 255, 255, 0.12)',
        'dark-border-light': 'rgba(255, 255, 255, 0.08)',
      },
      fontSize: {
        xs: '0.8rem',
        sm: 'small',
      },
      maxWidth: {
        'content': '1290px',
        'about': '900px',
        'person': '1100px',
      },
      spacing: {
        '5%': '5%',
      },
      backdropBlur: {
        sm: 'blur(6px)',
      },
    },
  },
  plugins: [],
}
