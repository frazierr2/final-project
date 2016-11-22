var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var LandingTemplate = React.createClass({
  logout: function(){
    $.post('https://thefraz.herokuapp.com/logout/').then(function(){
      localStorage.clear();
    });
  },
  render: function(){
    return(
      <div className="container-fluid">
        <div className="row landing-background">
          <div className="nav-head">
            <ul className="nav nav-pills navbar-inverse land-nav">
              <div className="navbar-header">
                <a id="testing"className="navbar-brand logo testing" href="#landing/">U-Grub</a>
              </div>
              <li role="presentation"><a className="nav-tabs" href="#landing/">Home</a></li>
              <li role="presentation"><a className="nav-tabs" href="#newpost/">Add Restaurant</a></li>
              <li role="presentation"><a className="nav-tabs" href="#search/">Search Local Eateries</a></li>
              <li role="presentation"><a onClick={this.logout} className="nav-tabs logout" href="#">Logout</a></li>
            </ul>

          </div>
          <br />

            <div className="row">

              <div className="col-md-6">
              <div className="col-md-12 well listing-box">
                <h1 className="col-left">Grub Listing</h1>
                  <p id="grubListingInfo" className="form-text text-muted">
                    To get your restaurant information simply click on the name below!
                  </p>

                {this.props.children}

              </div>
              </div>

              <div className="col-md-6">
              <div className="col-md-12 well col-right">
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
