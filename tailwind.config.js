const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx', './public/**/*.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
            },
            flexGrow: {
                small: 0.001,
                2: 2
            },
            height: {
                '5vh': '5vh',
                '10vh': '10vh',
                '80vh': '80vh',
                '100vh': '100vh',
                125: '125vh',
                150: '150vh'
            },
            inset: {
                'toggle-full': '1.5rem'
            },
            padding: {
                '10vh': '10vh'
            },
            transitionDelay: {
                1500: '1500ms'
            },
            animation: {
                ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                spin: 'spin 0.25s cubic-bezier(0, 0, 0.2, 1)'
            },
            keyframes: {
                pulse: {
                    '0%, 100%': {
                        opacity: 1
                    },
                    '50%': {
                        opacity: 0.7
                    }
                }
            }
        },
        screens: { sm: '568px', md: '768px', lg: '992px', xl: '1200px' },
        colors: {
            primary: 'rgb(242, 142, 28)',
            'primary-hover': 'rgb(227, 133, 26)',
            'primary-active': 'rgb(198, 116, 23)',
            'primary-light': 'rgb(255, 191, 81)',
            'primary-light-90': 'rgba(255, 191, 81, 0.9)',
            'primary-lighter': 'rgb(255,222,167)',
            'primary-light-hover': 'rgb(240, 180, 76)',
            'primary-light-active': 'rgb(209, 157, 66)',
            'primary-dark': 'rgb(185, 96, 0)',
            'primary-dark-hover': 'rgb(174, 90, 0)',
            'primary-dark-active': 'rgb(152, 79, 0)',
            black: 'rgb(0, 0, 0)',
            'black-disabled': 'rgba(0,0,0,0.38)',
            white: 'rgb(255,255,255)',
            error: 'rgb(244,67,54)',
            'error-light': 'rgb(255,121,97)',
            warning: 'rgb(255, 204, 0)',
            info: 'rgb(33,150,243)',
            success: 'rgb(76,175,80)',
            transparent: 'transparent'
        },
        boxShadow: {
            xs:
                '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
            sm:
                '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20)',
            md:
                '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
            lg:
                '0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)',
            xl:
                '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            outline: '0 0 0 3px rgba(242, 142, 28, 0.5)',
            none: 'none',
            error:
                '0 8px 10px 1px rgba(244,67,54,0.14), 0 3px 14px 2px rgba(244,67,54,0.12), 0 5px 5px -3px rgba(244,67,54,0.20)',
            success:
                '0 8px 10px 1px rgba(76,175,80,0.14), 0 3px 14px 2px rgba(76,175,80,0.12), 0 5px 5px -3px rgba(76,175,80,0.20)'
        },
        opacity: {
            0: '0',
            10: '0.1',
            20: '0.2',
            30: '0.3',
            disabled: '0.38',
            40: '0.4',
            50: '0.5',
            60: '0.6',
            70: '0.7',
            80: '0.8',
            90: '0.9',
            100: '1'
        },
        transitionTimingFunction: {
            in: 'cubic-bezier(0, 0, 0.2, 1)',
            out: 'cubic-bezier(0.4, 0, 1, 1)',
            ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        transitionDuration: {
            small: '100ms',
            'medium-in': '250ms',
            'medium-out': '200ms',
            'large-in': '300ms',
            'large-out': '250ms',
            long: '1000ms',
            '2s': '2000ms'
        }
    },
    variants: {
        animation: ['responsive', 'hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        boxShadow: ['responsive', 'hover', 'focus', 'active']
    },
    plugins: [require('@tailwindcss/custom-forms')],
    corePlugins: {
        container: false
    }
}
