import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: "250px",
        // => @media (min-width: 250px) { ... }
        sm: "600px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        
        // my animations

        scaleSlow : {
          '0%': { transform: 'scale(1)' },   
          '50%': { transform: 'scale(1.08)'}, 
         '100%': { transform: 'scale(1)' }, 
       },
       shakeAndMove: {
         '0%': {
           transform: 'translateX(0) translateY(0) rotate(0deg)'
         },
         '25%': {
           transform: 'translateX(50px) translateY(20px) rotate(5deg)'
         },
         '50%': {
           transform: 'translateX(0) translateY(0) rotate(-5deg)'
         },
         '75%': {
           transform: 'translateX(-50px) translateY(-20px) rotate(5deg)'
         },
         '100%': {
           transform: 'translateX(0) translateY(0) rotate(0deg)'
         }
       },

       slideAndFade :{
         from :{
           transform: 'translateY(20px)',
           opacity: '0.6'
         },
         'to': {
           transform: 'translateY(0)',
           opacity: '1'
         }
       },
       fromDownFade :{
         from :{
           transform: 'translateY(30px)',
           opacity: '0.7'
         },
         'to': {
           transform: 'translateY(0)',
           opacity: '1'
         }
       },

       cardAnimation: {
         '0%': {
           transform: 'translateY(0%)',
           zIndex: '10',
         },
         '40%': {
           transform: 'translateY(-40%)',
           zIndex: '10',
         },
         '50%': {
           transform: 'translateY(-40%)',
           zIndex: '20',
         },
         '100%': {
           transform: 'translateY(0%)',
           zIndex: '20',
         },
       },
         xcardAnimation: {
         '0%': {
           transform: 'translateY(0%)',
           zIndex: '10',
         },
         '40%': {
           transform: 'translateX(-50%)',
           zIndex: '10',
         },
         '50%': {
           transform: 'translateX(-50%)',
           zIndex: '20',
         },
         '100%': {
           transform: 'translateX(0%)',
           zIndex: '20',
         },
       },
          cardsContainerAnimation: {
         '0%': {
           transform: 'translateY(0%)',
           //zIndex: '10',
           
         },
         '40%': {
           transform: 'translateY(-10%)',
           //zIndex: '10',
         },
         '50%': {
           transform: 'translateY(-10%)',
           zIndex: '0',
         },
         '100%': {
           transform: 'translateY(0%)',
           //zIndex: '20',
         },
       },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scaleSlow : 'scaleSlow 2.1s ease-in-out',
        shakeAndMove : 'shakeAndMove 4.2s ease-in-out',
        slideAndFade : "slideAndFade 2s ease-in-out",
        fromDownFade : "fromDownFade 1s ease-inout",
        cardAnimation : "cardAnimation 5s ease-in-out",
        xcardAnimation : "xcardAnimation 10s ease-in-out",
      cardsContainerAnimation: "cardsContainerAnimation 3s ease-in-out"
      },
    },
  },
  plugins: [],
}
export default config
