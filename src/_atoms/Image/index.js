const React = require('react')
const { PropTypes, } = React

const cx = require('classnames')

require('./index.css')

const Image = React.createClass({
  propTypes: {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    delay: PropTypes.number,
  },

  getDefaultProps() {
    return {
      src: '',
      alt: '',
      delay: 0,
    }
  },

  getInitialState() {
    return {
      ready: false,
      loaded: false,
      error: false,
    }
  },

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timedOut: true
      })
    }, this.props.delay)
  },

  handleImageLoaded() {
    this.setState({
      loaded: true,
    })
  },

  handleImageErrored() {
    this.setState({
      error: true,
    })
  },

  render() {
    const classNames = cx([
      'Image',
      this.state.error ? 'error' :
        (this.props.hide ? 'hide' :
          (this.state.loaded && this.state.timedOut ? 'loaded' : 'loading')
        )
    ])
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        className={classNames}
        onLoad={this.handleImageLoaded}
        onError={this.handleImageErrored}
      />
    )
  },
})

module.exports = Image
