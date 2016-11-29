var React = require('react');
var Backbone = require('backbone');
var $ = window.jQuery = require('jquery');

require('bootstrap-sass');



var PreSearchContainer = React.createClass({
  getInitialState: function(){
    var location = '';
    return{
      location: location
    }
  },

  setLocation: function(e){
    var currentLocation = e.target.value;
    this.setState({location: currentLocation});
  },

  handleLocationChange: function(e){
    e.preventDefault();

    Backbone.history.navigate('search/' + this.state.location +'/', {trigger: true});
  },

  logout: function(){
    $.post('https://thefraz.herokuapp.com/logout/').then(function(){
      localStorage.clear();
    });
  },

  render: function(){
    var self = this;
    return (
      <div className="container-fluid">
        <div className="row search-location">
          <div className="nav-head hidden-xs">
            <ul className="nav nav-pills navbar-inverse land-nav">
              <div className="navbar-header">
                <a id="testing"className="navbar-brand logo testing" href="#landing/">U-Grub</a>
              </div>
              <li role="presentation"><a className="nav-tabs" href="#landing/">Home</a></li>
              <li role="presentation"><a className="nav-tabs" href="#newpost/">Add Restaurant</a></li>
              <li role="presentation"><a className="nav-tabs" href="#presearch/">Search Local Eateries</a></li>
              <li role="presentation"><a onClick={self.logout} className="nav-tabs logout" href="#">Logout</a></li>
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

          <div >
            <div className="well col-md-6 col-md-offset-3 location-search">
              <h2 className="text-center">Search for restaurants near you</h2>
              <br />
                <div className="form-group row">
                  <label htmlFor="searchYelp search-input" className="col-xs-3 col-form-label">Location Search</label>
                  <div className="col-xs-8 col-md-offset-1">
                    <input className="form-control input-font yelpSearchInput" type="search" value={self.state.location} onChange={self.setLocation} placeholder="Where are you?" id="searchYelp" />
                  </div>
                </div>
                <div className="text-right">
                  <button type="button" onClick={self.handleLocationChange} className="btn btn-primary btn-lg yelp-search">Search</button>
                </div>
                <div>
                  <img className="yelp-logo" src="images/yelp-logo.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  PreSearchContainer: PreSearchContainer
}
