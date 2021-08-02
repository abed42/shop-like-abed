module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        'tuvr-gray': {
          DEFAULT: '#333333'
        },
        'tuvr-gray-40': {
          DEFAULT: '#999999'
        },
        'tuvr-gray-60': {
          DEFAULT: '#666666'
        },
        'tuvr-primary-blue': {
          DEFAULT: '#0071B9'
        },
        'tuvr-dark-blue': {
          DEFAULT: '#265D7F'
        },
        'panel-heading': {
          DEFAULT: '#F2F2F2'
        },
        'table-alternate': {
          DEFAULT: '#F5F5F5'
        },
        'tuvr-green': {
          DEFAULT: '#50B400'
        },
        'tuvr-dark-green': {
          DEFAULT: '#357800'
        },
        'tuvr-blue': {
          DEFAULT: '#0071B9'
        },
        'tuvr-red': {
          DEFAULT: '#D20033'
        },
        'tuvr-dark-red': {
          DEFAULT: '#CF1938'
        },
        'tuvr-black-10-borders': {
          DEFAULT: '#E6E6E6'
        },
        'tuvr-black-10': {
          DEFAULT: '#E6E6E6'
        },
        'tuvr-black-20': {
          DEFAULT: '#CCCCCC'
        },
        'tuvr-black-30': {
          DEFAULT: '#B3B3B3'
        },
        'tuvr-ellipse-bg': {
          DEFAULT: '#4F5F68'
        },
        'tuvr-ellipse-border': {
          DEFAULT: '#D9DFE6'
        },
        'tuvr-done': {
          DEFAULT: '#8BDC9D'
        },
        'tuvr-yellow': {
          DEFAULT: '#FBAF2B'
        },
        'tuvr-done-bg': {
          DEFAULT: '#E8F8EC'
        },
        'tuvr-in-progress': {
          DEFAULT: '#DD9A28'
        },
        'tuvr-in-progress-bg': {
          DEFAULT: '#FFF1D8'
        },
        'tuvr-new': {
          DEFAULT: '#80B7DC'
        },
        'tuvr-light-blue': {
          DEFAULT: '#b3d3ea'
        },
        'tuvr-new-bg': {
          DEFAULT: '#ECF8FF'
        },
        chip: {
          DEFAULT: '#F3F7F9'
        },
        'card-bg': {
          DEFAULT: '#F7F7F7'
        },
        'card-subtitle': {
          DEFAULT: '#666666'
        },
        'tuvr-black-ish': {
          DEFAULT: '#000000D8'
        }
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')]
};
