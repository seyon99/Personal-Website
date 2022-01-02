import React, { Component } from 'react';
import TypeIt from 'typeit-react';

class Header extends Component {
   
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Experience</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  {/* <h3>Hello, my name is</h3> */}
                  <h1 className="responsive-headline">Seyon Kuganesan</h1>
                  <script src="https://unpkg.com/typeit@8.2.0/dist/index.umd.js"></script>
                  <h3><span> Software Developer | CS student</span></h3>
                  {/* <div className="App">
                     <TypeIt>This will be typed in a `span` element!</TypeIt>
                  </div> */}
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
