import React from 'react'
import Link from 'gatsby-link'

class Logic extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h1>This is react logic</h1>
        <h4>Count: {this.state.count}</h4>
        <button onClick={() => {
          this.setState(prevState => ({count: prevState.count +1}))
          let count = this.state.count
        }}>Up</button>
        <button onClick={() => {
          this.setState(prevState => ({count: prevState.count -1}))
        }}>Down</button>
      </div>
    )
  }
}


export default Logic;
