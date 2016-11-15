var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var LandingTemplate = React.createClass({
  render: function(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="nav-head">
            <ul className="nav nav-pills navbar-inverse land-nav">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">U-Grub</a>
              </div>
              <li role="presentation" className="active"><a href="#landing/">Home</a></li>
              <li role="presentation"><a href="#">Add Restaurant</a></li>
              <li role="presentation"><a href="#">Messages</a></li>
            </ul>
          </div>
          <br />

            <div className="row">

              <div className="col-md-6">
              <div className="col-md-12 well">
                testing
              </div>
              </div>

              <div className="col-md-6">
              <div className="col-md-12 well">
                <div className="col-md-6 well-sm">
                <div className="col-md-12 well well-sm pictures">
                  <div className="pic-one">
                    <img src="images/landing-pic1.jpeg" alt="" />
                  </div>
                </div>
                </div>

                <div className="col-md-6 well-sm">
                <div className="col-md-12 well well-sm pictures">
                  <div className="pic-two">
                    <img src="images/landing-pic2.jpg" alt="" />
                  </div>
                </div>
                </div>

                <div className="col-md-12 well well-sm pictures">
                  <div className="pic-three">
                    <img src="images/landing-pic3.jpeg" alt="" />
                  </div>
                </div>
              </div>
              </div>
            </div>

        </div>
      </div>
    )
  }
});

module.exports = {
  LandingTemplate: LandingTemplate
};
