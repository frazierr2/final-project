//GLOBAL IMPORTS
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');


//LOCAL IMPORTS
var LoginContainer = require('./components/login.jsx').LoginContainer;
var LandingContainer = require('./components/landing.jsx').LandingContainer;
var NewRestaurantContainer = require('./components/newPost.jsx').NewRestaurantContainer;
var RestaurantDetailContainer = require('./components/restaurantDetail.jsx').RestaurantDetailContainer;
var SearchContainer = require('./components/searchlocal.jsx').SearchContainer;
var PreSearchContainer = require('./components/presearch.jsx').PreSearchContainer;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'landing/': 'landing',
    'restaurant/:id/': 'restaurantDetail',
    'newpost/': 'newpost',
    'search/:location/' : 'search',
    'presearch/' : 'presearch'
  },
  ajaxSetup: function(token){
    $.ajaxSetup({
        beforeSend: function(xhr){
          xhr.setRequestHeader('X-Parse-Application-Id', 'ryansparseserver');
          xhr.setRequestHeader('X-Parse-REST-API-Key', 'ryansapikey');
        if(token){
          xhr.setRequestHeader('X-Parse-Session-Token', token);
        }
        }
    });
  },
 initialize: function(){
   this.ajaxSetup();
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
  },

  restaurantDetail: function(restaurantId){
    ReactDOM.render(
      React.createElement(RestaurantDetailContainer, {restaurantId: restaurantId}),
      document.getElementById('app')
    )
  },

  newpost: function(){
    ReactDOM.render(
      React.createElement(NewRestaurantContainer, {router: this}),
      document.getElementById('app')
    )
  },

  presearch: function(location){
    ReactDOM.render(
      React.createElement(PreSearchContainer, {router: this, location: location}),
      document.getElementById('app')
    )
  },

  search: function(location){
    ReactDOM.render(
      React.createElement(SearchContainer, {router: this, location: location}),
      document.getElementById('app')
    )
  }



});

var router = new AppRouter();

module.exports = router;
