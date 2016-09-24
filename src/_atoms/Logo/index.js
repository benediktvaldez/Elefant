const React = require('react')
const { PropTypes } = React
const cx = require('classnames')

require('./index.css')
const logo = require('./logo-elefant.svg')
const logoLetters = require('./logo-elefant-letters.svg')

const Logo = (props) => {
  return (
    <img
      src={props.letters ? logoLetters : logo}
      className={cx(['elefant-logo', props.letters ? 'letters' : ''])}
      alt="logo"
    />
  )
}

Logo.propTypes = {
  letters: PropTypes.bool,
}

Logo.defaultProps = {
  letters: false
}

module.exports = Logo
