var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');




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
          <div className="nav-head">
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
                  <button type="button" onClick={self.handleLocationChange} className="btn btn-primary btn-lg">Search</button>
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
