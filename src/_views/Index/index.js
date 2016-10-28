const React = require('react')
const { PropTypes } = React
const { Link } = require('react-router')
const cx = require('classnames')

require('./index.css')

const Index = React.createClass({
  getInitialState() {
    return {
      visible: false,
    }
  },

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       visible: true,
  //     })
  //   }, 200)
  // },

  render() {
    const className = cx([
      'Navigation',
      this.props.fadeIn ? (this.state.visible ? '' : 'hide') : ''
    ])
    return (
      <div className="View Index">
        <nav className={className}>
          <Link to="/disgraced">sk&ouml;mm</Link>
        </nav>
      </div>
    )
  }
})

Index.propTypes = {
  fadeIn: PropTypes.bool,
}

Index.defaultProps = {
  fadeIn: true,
}

module.exports = Index
