import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);  // calling the parentMethod as Inheritance 
  }

  render() {
    return (
      <div className="col-lg-12 search-bar curve_detail flex-grid-halves">
        <div className="col">
          <h4 className="info">© 2019 curve</h4>
        </div>
        <div className="social">
          <ul className="social_bottom">
            <li className="social-icons"><a href="https://curvgrl5000.github.io/react_you_tube/"><span><i className="fab fa-github-square" rel="noopener noreferrer" target="_blank"></i></span></a></li> 
            <li className="social-icons"><a href="https://www.linkedin.com/in/annamendoza/" rel="noopener noreferrer" target="_blank"><span><i className="fab fa-linkedin"></i></span></a></li>         
            <li className="social-icons"><a href="mailto:annamendoza.curve@gmail.com"><span><i className="fab fas fa-envelope-square"target="_blank"></i></span></a></li>         
          </ul>
        </div>
      </div>
    );
  }
}


export default Footer;

