import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

class Home extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div style={{ height: "100vh", width: "100wh", zIndex: -1 }} ref={this.vantaRef}>
      <h1 style={{ color: 'white', fontSize: 100, display: "inline", margin: 0, position: "relative", top: "30%", paddingLeft: 50 }}>
        Hey 👋, I'm Seyon
      </h1>
      <br></br>
      <span style={{ color: 'white', display: 'inline-block', maxWidth: "50%",fontSize: 25, position: "relative", top: "35%", paddingLeft: 50 }}>
        I am currently a Computer Science student at the University of Toronto. I have interned at <b>Ciena</b> and <b>Interac</b> in Software Engineering and Site Reliability Engineering roles respectively.
        I enjoy exploring different areas of tech and honing my existing skills by building projects.
      </span>
      <br></br>
      <br></br>
      <span style={{ color: 'white', display: 'inline-block', maxWidth: "50%",fontSize: 25, position: "relative", top: "35%", paddingLeft: 50 }}>
        Thanks for visiting my website, and feel free to reach out.
      </span>
      {/* can make links and stuff clickable/highlightable by doing some z-index shenanigans */}
    </div>
  }
}

export default Home;