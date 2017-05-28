const React = require('react')
const { PropTypes } = React
const cx = require('classnames')

require('./index.css')

const Sman = React.createClass({
  getInitialState() {
    return {
      loading: true,
      visible: false,
    }
  },

  show() {
    this.setState({
      loading: false,
      visible: true,
    })
  },

  hide() {
    this.setState({
      visible: false,
    })
  },

  componentDidMount() {
    setTimeout(() => {
      this.show()
    }, 1000)
  },

  componentWillReceiveProps(nextProps) {
    this.hide()
  },

  render() {
    const className = cx([
      'View',
      'Sman',
      (this.state.loading ? 'loading' : ''),
      (this.props.location.pathname === '/sman' ? 'active' : ''),
    ])
    return (
      <div className={className}>
        <ul className="actors">
          <li>
            <span>Tinna Björt</span>
            <span>Guðjónsdóttir</span>
          </li>
          <li>
            <span>Magnús</span>
            <span>Jónsson</span>
          </li>
          <li className="lead">
            <span>Jónmundur</span>
            <span>Grétarsson</span>
          </li>
          <li>
            <span>Salóme R.</span>
            <span>Gunnarsdóttir</span>
          </li>
          <li>
            <span>Hafsteinn</span>
            <span>Vilhelmsson</span>
          </li>
        </ul>
        <h1>SMÁN</h1>
        <ul className="frumsynt">
          <li>
            <span>Frumsýnt</span>
            <span>11. september</span>
          </li>
        </ul>
        <ul className="other">
          <li>
            <span>Leikstjórn</span>
            <span>Þorsteinn Bachmann</span>
          </li>
        </ul>
      </div>
    )
  }
})

Sman.propTypes = {
  fadeIn: PropTypes.bool,
}

Sman.defaultProps = {
  fadeIn: true,
}

module.exports = Sman
