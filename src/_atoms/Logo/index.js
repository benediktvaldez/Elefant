const React = require('react')
const { PropTypes } = React
const cx = require('classnames')

require('./index.css')
const logo = require('./logo-elefant.svg')
const logoLetters = require('./logo-elefant-letters.svg')

const Logo = React.createClass({
  getInitialState() {
    return {
      visible: false,
    }
  },

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true,
      })
    }, 200)
  },

  render() {
    return (
      <img
        src={this.props.letters ? logoLetters : logo}
        className={cx(['elefant-logo', this.props.fadeIn ? (this.state.visible ? '' : 'hide') : '', this.props.letters ? 'letters' : ''])}
        alt="logo"
      />
    )
  }
})

Logo.propTypes = {
  letters: PropTypes.bool,
  fadeIn: PropTypes.bool,
}

Logo.defaultProps = {
  letters: false,
  fadeIn: true,
}

module.exports = Logo
