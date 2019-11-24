import React, { Component } from 'react'


const Heading = props => {
    return (
            <div className="row my-3 align-items-center">
                <div className="col"></div>
                <div className="col-auto">
                <p className="head m-0">Shem the Dev</p>
                <p className="text-center m-0">
                <a href="https://drive.google.com/open?id=1xo6zTS8JlUT720TD6JrmcKaXPzbFMK4J" target="_blank" rel="noopener noreferrer" >
                    <span className="">I'm looking for work - Click here for my CV!</span>
                </a></p>
                <p className="text-center mt-3">
                <a className="github-button" href="https://github.com/shemthedev" data-size="large" aria-label="">Check out my projects on GitHub</a>
                </p>
                </div>
                <div className="col">

                </div>
            </div>
    )
}

class Header extends Component {
    render() {
      return (
          <Heading />
        )
    }
  }
  
  export default Header
  