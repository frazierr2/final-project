var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var LandingTemplate = require('../templates/landingTemplate.jsx').LandingTemplate;
var RestaurantCollection = require('../models/restaurant.js').RestaurantCollection;


var ListItem = React.createClass({
    render: function(){
      var restaurant = this.props.restaurant;
      return(
      <a href={'#restaurant/' + restaurant.get('objectId') + '/'}><h3 className="ListHeading well">{restaurant.get('name')}</h3></a>
      )
    }
});

var RestaurantList = React.createClass({
  render: function(){
    var restaurantList = this.props.collection.map(function(restaurant){
      return <ListItem key={restaurant.cid} restaurant={restaurant}/>
    });
    return(
      <ul>
      {restaurantList}
      </ul>
    )
  }
});

var LandingContainer = React.createClass({
  getInitialState: function(){
    return{
      collection: new RestaurantCollection()
    };
  },


  componentWillMount: function(){
    var self = this;
    var collection = this.state.collection;
    // console.log(collection);

    var user = localStorage.getItem('username');
    collection.objectId = user;

    collection.fetch().then(function(){
      self.setState({collection: collection});
    });
  },
  render: function(){
    return(
      <LandingTemplate>
        <RestaurantList collection={this.state.collection}/>
      </LandingTemplate>
    );
  }
});

module.exports = {
  LandingContainer: LandingContainer
}
