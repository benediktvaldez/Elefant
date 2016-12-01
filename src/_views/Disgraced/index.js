const React = require('react')
const { PropTypes } = React
const { Match } = require('react-router')
const cx = require('classnames')

const TitleNav = require('../../_components/TitleNav')

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
      'Disgraced',
      (this.state.loading ? 'loading' : ''),
      (this.props.location.pathname === '/disgraced' ? 'index' : 'sub'),
    ])
    const titleClassName = cx([
      (this.state.loading ? 'loading' : ''),
      (this.props.location.pathname === '/disgraced' ? 'index' : 'sub'),
    ])
    const navigation = [
      {
        route: '/disgraced/about',
        title: 'um sýninguna',
      },
      {
        route: '/disgraced/group',
        title: 'hópurinn',
      },
    ]
    return (
      <div className={className}>
        <TitleNav
          className={titleClassName}
          title="skömm."
          titleLink="/disgraced"
          navList={navigation}
        />
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
