const React = require('react')
const { PropTypes } = React
const { Match, Link } = require('react-router')
const cx = require('classnames')

const src = require('./content')
require('./index.css')

const Content = ({ location })  => {
  const { title, content } = src[location.pathname]
  return (
    <div className="">
      <h2>{title}</h2>
      {content}
    </div>
  )
}

const Disgraced = React.createClass({
  getInitialState() {
    return {
      visible: false,
    }
  },

  show() {
    this.setState({
      visible: true,
    })
  },

  hide() {
    this.setState({
      visible: false,
    })
  },

  componentDidMount() {
    console.log('mount')
    setTimeout(() => {
      this.show()
    }, 200)
  },

  componentWillReceiveProps(nextProps) {
    console.log('componentWillUpdate', nextProps.location.pathname)
    this.hide()
  },

  render() {
    const className = cx([
      'View',
      'Disgraced',
      (this.props.location.pathname === '/disgraced' ? 'index' : 'sub'),
    ])
    return (
      <div className={className}>
        <hgroup className="titleNav">
          <h1><Link to="/disgraced" className="title">sk&ouml;mm.</Link></h1>
          <nav className="SubNavigation">
            <Link to="/disgraced/about" className={location.pathname === '/disgraced/about' ? 'active' : ''}>um sýninguna</Link>
            <Link to="/disgraced/group" className={location.pathname === '/disgraced/group' ? 'active' : ''}>hópurinn</Link>
          </nav>
        </hgroup>
        <section className="Content">
          <Match pattern="/disgraced/about" render={({ location }) => <Content location={location} />} />
          <Match pattern="/disgraced/group" render={({ location }) => <Content location={location} />} />
        </section>
      </div>
    )
  }
})

Disgraced.propTypes = {
  fadeIn: PropTypes.bool,
}

Disgraced.defaultProps = {
  fadeIn: true,
}

module.exports = Disgraced
