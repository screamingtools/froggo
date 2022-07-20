import './scss/main.scss'

/**************************/
/* HOT MODULE REPLACEMENT */

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction && module.hot) {
  module.hot.accept()
}
