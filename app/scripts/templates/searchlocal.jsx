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
        <div className="row">
          <div className="search-page">
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
