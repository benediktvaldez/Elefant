const React = require('react')
const { PropTypes } = React
const cx = require('classnames')

require('./index.css')
const LogoElefantLetters = require('./logo-elefant-letters.svg')

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
    const className = cx([
      'elefant-logo',
      this.props.fadeIn ? (this.state.visible ? '' : 'hide') : '',
      this.props.letters ? 'letters' : ''
    ])

    return (
      <LogoElefantLetters className={className} />
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
