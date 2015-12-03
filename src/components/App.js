import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <span>by Carlos Cuatin cecg1996@gmail.com</span>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App
