var React = require('react');
var $ = require('jquery');

var models = require('../models/restaurant.js');
var DetailTemplate = require('../templates/DetailTemplate.jsx').DetailTemplate;


$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", 'ryansparseserver');
    xhr.setRequestHeader('X-Parse-REST-API-Key','ryansapikey')
  }
});
var RestaurantHeading = React.createClass({
  render: function(){
    return(
        <div class="col-md-10 col-md-offset-1 well detail">
          <h1></h1>
          <h3 class="well detailItem">Restaurant name:</h3>
          <h3 class="well">How was it priced&#63;</h3>
          <h3 class="well">How was the service&#63;</h3>
          <h3 class="well">Are we attending again&#63;</h3>
          <h3 class="well">I ate:</h3>
          <h3 class="well">Additional info:</h3>
        </div>
        // <h1>{this.props.restaurant.get('name')}</h1>
        // <a href={'landing/' + this.props.restaurant.get('objectId')}></a>

    )
  }
});

var RestaurantDetailContainer = React.createClass({
  getInitialState: function(){
    return {
      restaurant: new models.Restaurant()
    }
  },

  componentWillMount: function(){
    var restaurant = this.state.restaurant,
    restaurantId = this.props.restaurantId;

    if(!restaurantId){
      return;
    }

    restaurant.set('objectId', restaurantId);
    restaurant.fetch().then(() => {
      this.setState({restaurant: restaurant})
    });

  },



  render: function(){
    return(
      <DetailTemplate>

        <RestaurantHeading restaurant={this.state.restaurant}/>
      </DetailTemplate>
    )
  }
});

module.exports = {
  RestaurantDetailContainer: RestaurantDetailContainer
}
