import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Seyon Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Hello! I Study Computer Science at the University of Toronto and I am passionate about software development. 
               I have interned at <a href="https://www.ciena.com/" target="_blank">Ciena</a> and <a href="https://www.interac.ca/en/" target="_blank">Interac</a> in Software Engineering and Site Reliability Engineering roles respectively.</p>
            <p>Apart from coding, my hobbies include listening to music and podcasts, playing basketball, and playing sandbox games such as Minecraft. Thanks for visiting my website, and please feel free to contact me.</p>
            {/*
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div> */}
         </div>
      </div>

   </section>
    );
  }
}

export default About;
