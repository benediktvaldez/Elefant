const React = require('react')
const { Link } = require('react-router')

require('./index.css')

const Index = () => {
  return (
    <div className="View Index">
      <nav>
        <Link to="/disgraced">Disgraced</Link>
      </nav>
    </div>
  )
}

module.exports = Index
