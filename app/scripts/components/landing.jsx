var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var LandingTemplate = require('../templates/landingTemplate.jsx').LandingTemplate;
var RestaurantCollection = require('../models/restaurant.js').RestaurantCollection;


var ListItem = React.createClass({
    render: function(){
      var restaurant = this.props.restaurant;
      return(
          <a className="links" href={'#restaurant/' + restaurant.get('objectId') + '/'}>
            <div className="row ListHeading well">
              <div className="col-md-6">
                <span className="list-head">Name of restaurant:</span>
                <h3 className="rest-name">{restaurant.get('name')}</h3>
              </div>
              <div className="col-md-6">
                <span className="list-head">Attend again&#63;</span>
                <h3 className="attend-again">{restaurant.get('attend')}</h3>
              </div>
          </div>
        </a>
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
