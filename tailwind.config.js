module.exports = {
    mode: 'layers',
    layers: ['base', 'components', 'utilities'],
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
    ],
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
    theme: {
        extend: {
            spacing: {
                'card-img': '24.625rem',
            },
            borderRadius: {
                middle: '12px',
                large: '16px',
                'db-large': '24px'
            },
            height: {
                modal: '50%',
                'modal-mob': '80%',
                'card-img': '16.668rem'
            }
        }

    }
}
