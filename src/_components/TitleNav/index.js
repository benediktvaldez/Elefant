const React = require('react')
const { PropTypes, } = React
const cx = require('classnames')
const { Link } = require('react-router')

require('./index.css')

const TitleNav = React.createClass({
  propTypes: {
    title: PropTypes.string,
    titleLink: PropTypes.string,
    navList: PropTypes.arrayOf(PropTypes.shape({
      route: PropTypes.string,
      title: PropTypes.string,
    })),
  },

  getDefaultProps() {
    return {
      title: 'fyrirsögn',
      titleLink: '',
      navList: [],
    }
  },

  getInitialState() {
    return {}
  },

  renderTitle() {
    const hasLink = !!this.props.titleLink

    if (!this.props.title) {
      return null
    }

    if (hasLink) {
      return (
        <h1>
          <Link to={this.props.titleLink} className="title">{this.props.title}</Link>
        </h1>
      )
    }

    return <h1>{this.props.title}</h1>
  },

  renderNav() {
    if (this.props.navList.length === 0) {
      return null
    }

    return (
      <nav className="SubNavigation">
        {this.props.navList.map((item) => this.renderNavItem(item))}
      </nav>
    )
  },

  renderNavItem(item) {
    return <Link to={item.route} key={item.route} className={location.pathname === item.route ? 'active' : ''}>{item.title}</Link>
  },

  render() {
    const _renderTitle = this.renderTitle()
    const _renderNav = this.renderNav()
    const className = cx([
      'titleNav',
      this.props.className,
    ])
    return (
      <hgroup className={className}>
        {_renderTitle}
        {_renderNav}
      </hgroup>
    )
  },
})

module.exports = TitleNav
