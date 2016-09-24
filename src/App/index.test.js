const React = require('react')
const ReactDOM = require('react-dom')

const Component = require('.')

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<component />, div)
  })
})
