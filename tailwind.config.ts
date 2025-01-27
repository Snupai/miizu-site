import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'serif'],
        signika: ['Signika Negative', 'sans-serif'],
      },
      keyframes: {
        'soft-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'soft-bounce': 'soft-bounce 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
