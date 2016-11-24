const React = require('react')
const { BrowserRouter, Match, Miss, Link } = require('react-router')

require('./index.css')

const Logo = require('../_atoms/Logo')
const BackgroundImages = require('../_atoms/BackgroundImages')

const Index = require('../_views/Index')
const Disgraced = require('../_views/Disgraced')
const Error404 = require('../_views/Error404')

const LogoLink = () => {
  return (
    <Link to="/">
      <Logo letters={location.pathname === '/' ? true : false} />
    </Link>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Match pattern="/" component={BackgroundImages} />
        <Match pattern="/" render={({ location }) => <LogoLink />} />
        <Match exactly pattern="/" component={Index} />
        <Match pattern="/disgraced" component={Disgraced} />
        <Miss component={Error404} />
      </div>
    </BrowserRouter>
  )
}

module.exports = App
