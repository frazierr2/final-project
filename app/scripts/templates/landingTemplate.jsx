var React = require('react');
var Backbone = require('backbone');
var $ = window.jQuery = require('jquery');

require('bootstrap-sass');

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
            <div className="nav-head hidden-xs">
              <ul className="nav nav-pills navbar-inverse land-nav">
                <div className="navbar-header">
                  <a id="testing"className="navbar-brand logo testing" href="#landing/">U-Grub</a>
                </div>
                <li role="presentation"><a className="nav-tabs" href="#landing/">Home</a></li>
                <li role="presentation"><a className="nav-tabs" href="#newpost/">Add Restaurant</a></li>
                <li role="presentation"><a className="nav-tabs" href="#presearch/">Search Local Eateries</a></li>
                <li role="presentation"><a onClick={this.logout} className="nav-tabs logout" href="#">Logout</a></li>
              </ul>
            </div>


          <div className="navbar navbar-default hidden-sm hidden-md hidden-lg">
            <div className="navbar-header mobile-navbar">
              <a id="testing" className="navbar-brand logo testing" href="#landing/">U-Grub</a>
              <button className="navbar-toggle"  data-toggle="collapse" data-target="#navbar-button" aria-expanded="false" aria-controls="navbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar-button">
              <ul className="nav navbar-nav mobile-navbar">
                <li><a id="mobilefont1-3" className="nav-tabs" href="#landing/">HOME</a></li>
                <li><a id="mobilefont1-3" className="nav-tabs" href="#newpost/">ADD RESTAURANTS</a></li>
                <li><a id="mobilefont1-3" className="nav-tabs" href="#presearch/">SEARCH LOCAL EATERIES</a></li>
                <li><a id="mobilefont" className="nav-tabs" href="#">LOGOUT</a></li>
              </ul>
            </div>
          </div>

          <br />



              <div className="col-md-6">
              <div className="col-md-12 well listing-box">
                <h1 className="col-left">Grub Listing</h1>
                  <p id="grubListingInfo" className="form-text text-muted">
                    To get your restaurant information simply <span className="singleword">click</span> on the box below!
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
    )
  }
});

module.exports = {
  LandingTemplate: LandingTemplate
};
