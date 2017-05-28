const React = require('react')
const { PropTypes } = React

const cx = require('classnames')

const Image = require('../Image')

require('./index.css')

const BackgroundImages = React.createClass({
  getInitialState() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio || 1,
    }
  },

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio || 1,
    })
  },

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.updateInterval = setInterval(() => {
      this.forceUpdate()
    }, this.props.updateTime || 10000)
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    window.clearInterval(this.updateInterval)
  },

  shouldComponentUpdate(nextProps, nextState) {
    const isFront = nextProps.location.pathname === '/'
    const leavingFront = this.props.location.pathname === '/' && nextProps.location.pathname !== '/'
    return isFront || leavingFront
  },

  pickImage(imageArray, skip) {
    if (imageArray.length === 1) {
      return imageArray[0]
    }
    const picked = imageArray._getRandom()
    return picked !== skip ? picked : this.pickImage(imageArray, skip)
  },

  render() {
    const classNames = cx(['BackgroundImages-wrap', (location.pathname === '/' ? 'hide' : 'show')])
    const windowWidth = this.state.windowWidth * this.state.pixelRatio
    const windowHeight = this.state.windowHeight * this.state.pixelRatio
    const quality = (0.9/this.state.pixelRatio) * 100

    this.lastImage = this.currentImage
    this.currentImage = this.pickImage(this.props.images, this.lastImage)

    return (
      <div className={classNames}>
        {this.props.images.map((image) => {
          return (
            <Image
              src={`//images.contentful.com/${image}?w=${windowWidth}&h=${windowHeight}&fit=fill&q=${quality}`}
              delay={1000}
              hide={this.currentImage !== image || location.pathname === '/'}
              key={image}
            />
          )
        })}
      </div>
    )
  }
})

BackgroundImages.propTypes = {
  images: PropTypes.array.isRequired,
  updateTime: PropTypes.number,
}

BackgroundImages.defaultProps = {
  images: [
    // '8p5ax9lafoyw/3aiHV0JJckeeO2yAy6skuI/ba53613fc5145eb9f2e48a5364bb5af5/photo-1438260483147-81148f799f25.jpeg',
    // '8p5ax9lafoyw/4o6yogKGTKOCQemu08ASKK/e5cc816794db1064c540d92c3ff85dba/yzS7SdLJRRWKRPmVD0La_creditcard.jpg',
    // '8p5ax9lafoyw/5vrVYbucw0uwskwiQOKa2k/30935ff5391836222aa24b78cdd05b59/photo-1439902315629-cd882022cea0.jpeg',
    // '8p5ax9lafoyw/31yVxzVHvqswcA46W8AEsU/42f322ee2655c30e47374cddb70e0237/829d24cf.jpeg',
    '8p5ax9lafoyw/1J0saNPOHOUuGAAyk6wiKU/a1b101988a775f377d89d3694d71ca1f/clouds.jpg',
  ],
  updateTime: 10000,
}

module.exports = BackgroundImages
