var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');

// var UserModels = require('../models/user.js');
var models = require('../models/restaurant.js');
var DetailTemplate = require('../templates/detailTemplate.jsx').DetailTemplate;


$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", 'ryansparseserver');
    xhr.setRequestHeader('X-Parse-REST-API-Key','ryansapikey')
  }
});
var RestaurantHeading = React.createClass({

  handleDelete: function(){
    var restaurant = this.props.restaurant;
    restaurant.deleteRecipe(restaurant.get('objectId'));
    alert('Restaurant Record Deleted');
    Backbone.history.navigate('#landing/', {trigger: true});
  },
  render: function(){
    var restaurant = this.props.restaurant;
    return(
        <div className="col-md-10 col-md-offset-1 well detail">
          <div className="row">
            <h3 className="well detailItem-left col-md-6 text-center"><strong>Restaurant name :</strong></h3>
            <h3 className="well detailItem-right col-md-6 text-center">{restaurant.get('name')}</h3>
          </div>
          <div className="row">
            <h3 className="well detailItem-left col-md-6 text-center"><strong>How was it priced &#63;</strong></h3>
            <h3 className="well detailItem-right col-md-6 text-center">{restaurant.get('cost')}</h3>
          </div>
          <div className="row">
            <h3 className="well detailItem-left col-md-6 text-center"><strong>The service was :</strong></h3>
            <h3 className="well detailItem-right col-md-6 text-center">{restaurant.get('quality')}</h3>
          </div>
          <div className="row">
            <h3 className="well detailItem-left col-md-6 text-center"><strong>Are we attending again &#63;</strong></h3>
            <h3 className="well detailItem-right col-md-6 text-center">{restaurant.get('attend')}</h3>
          </div>
          <div className="row">
            <h3 className="well detailItem-left col-md-6 text-center"><strong>Food I ate was :</strong></h3>
            <h3 className="well detailItem-right col-md-6 text-center">{restaurant.get('food')}</h3>
          </div>
          <div className="row">
            <h3 className="well detailItem-left col-md-6 text-center"><strong>Additional info about the experience :</strong></h3>
            <h3 className="well detailItem-right col-md-6 text-center">{restaurant.get('additional')}</h3>
          </div><br/>
          <div>
            <button type="button" onClick={this.handleDelete} className="btn btn-danger btn-lg btn-block">DELETE RESTAURANT RECORD</button>
          </div>
        </div>

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
