/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Brand palette
                cream: {
                    DEFAULT: '#FDF8F5',
                    warm: '#F5EDE3',
                },
                coffee: {
                    DEFAULT: '#4B2E2B',
                    dark: '#2C1A18',
                    light: '#7A5C57',
                },
                spice: {
                    DEFAULT: '#B23A2B',
                    dark: '#9b2f1e',
                    light: '#C94D3D',
                },
                golden: {
                    DEFAULT: '#C6A75E',
                    light: '#E8D5A3',
                    muted: '#D4C09A',
                },
                border: '#E8D5C4',
                card: '#FFFAF7',
            },
            fontFamily: {
                heading: ['Cormorant Garamond', 'Georgia', 'serif'],
                body: ['Source Sans 3', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.1' }],
                'hero': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.15' }],
                'section': ['clamp(1.8rem, 3.5vw, 2.8rem)', { lineHeight: '1.2' }],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
            },
            borderRadius: {
                lg: '0.75rem',
                xl: '1rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                'warm-sm': '0 2px 8px rgba(75, 46, 43, 0.08)',
                'warm-md': '0 4px 20px rgba(75, 46, 43, 0.12)',
                'warm-lg': '0 8px 40px rgba(75, 46, 43, 0.18)',
                'warm-xl': '0 16px 60px rgba(75, 46, 43, 0.22)',
            },
            backgroundImage: {
                'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
