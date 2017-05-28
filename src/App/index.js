const React = require('react')
const { BrowserRouter, Match, Miss, Link } = require('react-router')

require('./index.css')

const Logo = require('../_atoms/Logo')
const BackgroundImages = require('../_atoms/BackgroundImages')

const Index = require('../_views/Index')
const Sman = require('../_views/Sman')
const Error404 = require('../_views/Error404')

const LogoLink = ({ location }) => {
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
        <Match pattern="/" render={({ location }) => <LogoLink location={location} />} />
        <Match pattern="/" component={Index} />
        <Match pattern="/" component={Sman} />
        <Miss component={Error404} />
      </div>
    </BrowserRouter>
  )
}

module.exports = App
