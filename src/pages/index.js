import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
  state = {
    r: 0,
    g: 0,
    b: 0

  }
  componentDidMount() {
    setInterval(() => {
      const newR = Math.random() * 25
      const newG = Math.random() * 25
      const newB = Math.random() * 25
      this.setState({ r: newR, g: newG, b: newB })

    }, 1000);

  }
  render() {
    const { r, g, b } = this.state;
    return (
      <div style={{ background: 'gray' }}>

        {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
        <Link to="/page-2/">Go to page 2</Link>
        <video autoPlay muted loop id="myVideo">
          <source src="/static/lines.mp4" type="video/mp4" />
        </video>

        <div className="content" style={{ color: `rgba(${r},${g},${b},0.6)` }} >
          <h1>#el-sy</h1>
          <h1>coming soon</h1>
          <h3>or <a href='http://cargocollective.com/The-Atelier-of-Hyde'>click</a> here to view older content</h3>
        </div>
      </div>
    )
  }
}

export default IndexPage
