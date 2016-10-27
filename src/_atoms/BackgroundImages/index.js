const React = require('react')
const { PropTypes } = React

const cx = require('classnames')

require('./index.css')

const BackgroundImages = React.createClass({
  getInitialState() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  },

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  },

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },

  handleImageLoaded() {
    this.setState({
      loaded: true,
    })
  },
  handleImageErrored() {
    this.setState({
      loaded: false,
    })
  },

  render() {
    const classNames = cx(['BackgroundImages-wrap', this.state.loaded ? 'loaded' : 'loading'])
    return (
      <div className={classNames}>
        {this.props.images.map((image) => {
          return (
            <img
              src={`//images.contentful.com/${image}?w=${window.innerWidth}&h=${window.innerHeight}&fit=fill`}
              alt=''
              key={image}
              onLoad={this.handleImageLoaded}
              onError={this.handleImageErrored}
            />
          )
        })}
      </div>
    )
  }
})

BackgroundImages.propTypes = {
  images: PropTypes.array.isRequired,
}

BackgroundImages.defaultProps = {
  images: [
    '8p5ax9lafoyw/3aiHV0JJckeeO2yAy6skuI/ba53613fc5145eb9f2e48a5364bb5af5/photo-1438260483147-81148f799f25.jpeg',
    // '8p5ax9lafoyw/4o6yogKGTKOCQemu08ASKK/e5cc816794db1064c540d92c3ff85dba/yzS7SdLJRRWKRPmVD0La_creditcard.jpg',
    // '8p5ax9lafoyw/5vrVYbucw0uwskwiQOKa2k/30935ff5391836222aa24b78cdd05b59/photo-1439902315629-cd882022cea0.jpeg',
    // '8p5ax9lafoyw/31yVxzVHvqswcA46W8AEsU/42f322ee2655c30e47374cddb70e0237/829d24cf.jpeg',
  ]
}

module.exports = BackgroundImages
