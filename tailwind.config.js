/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'purple':'#8284fa',
        'purple-dark':'#5E60CE',
        'blue':'#4EA9DE',
        'blue-dark':'#1e6f9f',
        'danger':'#E25858',

        'gray-100':'#F2F2F2',
        'gray-300':'#808080',
        'gray-400':'#333',
        'gray-500':'#262626',
        'gray-700':'#0D0D0D',
        'gray-600':'#1A1A1A',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};

