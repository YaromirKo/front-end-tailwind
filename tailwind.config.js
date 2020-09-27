// const plugin = require('tailwindcss/plugin')

module.exports = {
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
  // prefix: 'tw-',
  // important: true,
  // plugins: [
  //   plugin(function({ addComponents }) {
  //     const buttons = {
  //       '.btn': {
  //         padding: '.5rem 1rem',
  //         borderRadius: '.25rem',
  //         fontWeight: '600',
  //       },
  //       '.btn-blue': {
  //         backgroundColor: '#3490dc',
  //         color: '#fff',
  //         '&:hover': {
  //           backgroundColor: '#2779bd'
  //         },
  //       },
  //       '.btn-red': {
  //         backgroundColor: '#e3342f',
  //         color: '#fff',
  //         '&:hover': {
  //           backgroundColor: '#cc1f1a'
  //         },
  //       },
  //     }
  //
  //     addComponents(buttons)
  //   })
  // ]
}
