module.exports = {
  theme: {
    extend: {
      colors: {
        'dark': '#0F0F0F',
        'accent': '#53FC19',
        'accent-dark': '#3ED200',
        'light': '#FFFFFF',
        'gray-dark': '#1A1A1A',
        'gray-light': '#A0A0A0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 50% 50%, rgba(83, 252, 25, 0.3) 0px, transparent 80%)',
        'hero-pattern': 'url("/img/hero-pattern.svg")',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dev2you: {
          "primary": "#53FC19",
          "secondary": "#FFFFFF",
          "accent": "#53FC19",
          "neutral": "#0F0F0F",
          "base-100": "#0F0F0F",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}