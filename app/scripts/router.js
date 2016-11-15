//GLOBAL IMPORTS
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


//LOCAL IMPORTS
var LoginContainer = require('./components/login.jsx').LoginContainer;
var Testing = require('./components/testing.jsx').Testing;
// var setupParse = require('./parseUtilities.js').setupParse;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'testing/': 'testing'
  },

  // initialize: function(){
  //   setupParse('ryansparseserver', 'ryansapikey');
  // },
  //
  // sessionTokenCheck: function(){
  //   if(!localStorage.getItem('sessionToken')){
  //     this.navigate('', {trigger: true});
  //   }
  // },

  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  },

  testing: function(){
    ReactDOM.render(
      React.createElement(Testing),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
