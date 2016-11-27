var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');


var SearchTemplate = React.createClass({
  logout: function(){
    $.post('https://thefraz.herokuapp.com/logout/').then(function(){
      localStorage.clear();
    });
  },
  render: function(){
    return(
      <div className="container-fluid">
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
            <a className="navbar-toggle"  data-toggle="collapse" data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav mobile-navbar">
              <li><a id="mobilefont1-3" className="nav-tabs" href="#landing/">HOME</a></li>
              <li><a id="mobilefont1-3" className="nav-tabs" href="#newpost/">ADD RESTAURANTS</a></li>
              <li><a id="mobilefont1-3" className="nav-tabs" href="#presearch/">SEARCH LOCAL EATERIES</a></li>
              <li><a id="mobilefont" className="nav-tabs" href="#">LOGOUT</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="search-page clearfix">

            {this.props.children}

          </div>
        </div>


      </div>
    )
  }
});

module.exports = {
  SearchTemplate: SearchTemplate
}
