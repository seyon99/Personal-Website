import React from 'react';
import { useState, useLayoutEffect } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import { InsertDriveFile, GitHub, LinkedIn, Email } from '@mui/icons-material';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  clickableIcon: {
    color: 'white',
    '&:hover': {
    color: 'pink',
    },
  }
});

class Home extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  birdSize: 1.10,
  quantity: 3.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  
  
  render() {
    const { classes } = this.props;
    // might need to make use of zIndex: -1 in vantaRef sx
    return <div style={{ height: "100vh", width: "100wh", position: "relative" }} ref={this.vantaRef}>
      <div style={{position: "absolute", top: "30%", transform: "translateY(-30%)"}}>
      <h1 style={{ color: 'white', fontSize: 100, display: "inline-block", margin: 0, paddingLeft: 50, paddingRight: 50 }}>
        Hey 👋, I'm Seyon
      </h1>
      <br></br>
      <span style={{ color: 'white', display: 'inline-block', maxWidth: "50%",fontSize: 25, paddingLeft: 50, paddingTop: 10 }}>
        I am currently a Computer Science student at the University of Toronto, and I have interned at <b className={classes.clickableIcon} onClick={event =>  window.location.href='https://www.ciena.com'}>Ciena</b> and <b className={classes.clickableIcon} onClick={event =>  window.location.href='https://www.interac.ca/en/'}>Interac</b> in Software Engineering and Site Reliability Engineering roles respectively.
        I enjoy exploring different areas of tech and honing my existing skills by building projects.
      </span>
      <br></br>
      <br></br>
      <span style={{ color: 'white', display: 'inline-block', maxWidth: "50%",fontSize: 25, paddingLeft: 50 }}>
        Thanks for visiting my website, and feel free to reach out!
      </span>
      {/* can make links and stuff clickable/highlightable by doing some z-index shenanigans */}
      <br></br><br></br>
      <span style={{ color: 'white', display: 'inline-block', maxWidth: "70%", paddingLeft: 50, paddingBottom: 50 }}>
      <GitHub className={classes.clickableIcon} sx={{fontSize: 50, marginRight: 1}} onClick={event =>  window.location.href='https://github.com/seyon99'}/> 
      <InsertDriveFile className={classes.clickableIcon} sx={{fontSize: 50, marginRight: 1}} onClick={event =>  window.location.href='https://seyonkuganesan.s3.us-east-2.amazonaws.com/resume.pdf'}/> 
      <LinkedIn className={classes.clickableIcon} sx={{fontSize: 50, marginRight: 1}} onClick={event =>  window.location.href='https://www.linkedin.com/in/seyon-kuganesan/'}/> 
      <Email className={classes.clickableIcon} sx={{fontSize: 50}} onClick={event =>  window.location.href='mailto:seyonkuganesan@gmail.com'}/>
      </span>
      </div>
    </div>
  }
}

export default withStyles(styles, { withTheme: true })(Home);