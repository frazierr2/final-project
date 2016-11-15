//GLOBAL IMPORTS
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


//LOCAL IMPORTS
var LoginContainer = require('./components/login.jsx').LoginContainer;
var LandingContainer = require('./components/landing.jsx').LandingContainer;
// var setupParse = require('./parseUtilities.js').setupParse;


var AppRouter = Backbone.Router.extend({
  routes: {
    // '': 'index',
    'landing/': 'landing'
  },


  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  },

  landing: function(){
    ReactDOM.render(
      React.createElement(LandingContainer, {router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
