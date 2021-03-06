const React = require('react')
const cx = require('classnames')

const TitleNav = require('../../_components/TitleNav')

require('./index.css')

const Index = React.createClass({
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

  render() {
    const titleClassName = cx([
      'fp',
      'index',
      (this.state.loading ? 'loading' : ''),
      (this.props.location.pathname === '/sman' ? 'loading' : 'index'),
    ])
    const className = cx([
      'View',
      'Index',
      (this.state.loading ? 'loading' : ''),
    ])

    const projects = [
      {
        route: '/sman',
        title: 'SMÁN',
      },
    ]
    return (
      <div className={className}>
        <TitleNav className={titleClassName} title="verkefnin" navList={projects} />
      </div>
    )
  }
})

module.exports = Index
