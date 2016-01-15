import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render() {
    let style = {
      app: {
        color: 'red'
      }
    }
    return (
      <div>
        <h1 style={style.app}>App</h1>
        <span className="carlos">by Carlos Cuatin cecg1996@gmail.com</span>
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
