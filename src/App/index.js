const React = require('react')

require('./index.css')

const Logo = require('../_atoms/Logo')
const BackgroundImages = require('../_atoms/BackgroundImages')

const App = () => {
  return (
    <div className="App">
      <BackgroundImages />
      <Logo letters={true} />
    </div>
  )
}

module.exports = App
