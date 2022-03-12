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
    return <div style={{height: "100vh", width: "100wh", zIndex: -1}} ref={this.vantaRef}>
      <h1 style={{color: 'white', fontSize: 100, display: "inline", margin: 0, position: "absolute", top: "50%", transform: "translateY(-90%)", paddingLeft: 50}}>Hey 👋, I'm Seyon</h1>
    </div>
  }
}

export default Home;