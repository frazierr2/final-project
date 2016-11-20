var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');


var AddNewTemplate = require('../templates/addTemplate.jsx').AddNewTemplate;
var models = require('../models/restaurant.js');
var collection = require('../models/restaurant.js').RestaurantCollection;

var Listing = React.createClass({
  componentWillReceiveProps: function(newProps){
      this.setState(newProps.food.toJSON());
    },

    handleInputChange: function(e){
      var ingredientField = e.target;


      var newState = {};
      newState[ingredientField.name] = ingredientField.value; // {'amount': 24}
      this.setState(newState);
      this.props.food.set(ingredientField.name, ingredientField.value);
    },
    render: function(){
    return(

      <input id="foodItem" onChange={this.handleInputChange} className="form-control form-control-lg " type="text" placeholder="" />

    )
  }
});

var RestaurantForm = React.createClass({
  getInitialState: function(){
    var name = '';
    var cost = '';
    var quality = '';
    var attend = '';
    var food = '';
    var additional = '';

    return{
      name: name,
      cost: cost,
      quality: quality,
      attend: attend,
      food: food,
      additional: additional
    }
  },

  setRestaurantName: function(e){
    var restaurantName = e.target.value;
    this.setState({name: restaurantName});
  },

  setRestaurantCost: function(e){
    var restaurantCost = e.target.value;
    this.setState({cost: restaurantCost});
  },

  setRestaurantQuality: function(e){
    var restaurantQuality = e.target.value;
    this.setState({quality: restaurantQuality});
  },

  setRestaurantAttend: function(e){
    var restaurantAttend = e.target.value;
    this.setState({attend: restaurantAttend});
  },

  setRestaurantFood: function(e){
    var restaurantFood = e.target.value;
    this.setState({food: restaurantFood});
  },

  setRestaurantAdditional: function(e){
    var restaurantAdditional = e.target.value;
    this.setState({additional: restaurantAdditional});
  },

  handleSubmit: function(e){
    e.preventDefault();


    var newRestaurant = {
      name: this.state.name,
      cost: this.state.cost,
      quality: this.state.quality,
      attend: this.state.attend,
      food: this.state.food,
      additional: this.state.additional
    };
    this.props.handleSubmit(newRestaurant);
  },

    render: function(){
      var restaurant = this.props.restaurant;
      // var heading = restaurant.isNew() ? 'Add' : 'Edit';
      console.log(restaurant);
      var lineFormset = restaurant.map(function(food){
        return(
          <Listing key={food.cid} food={food} />

        )
      });
      var self = this;
      return(
        <div className="well col-md-8 col-md-offset-2 addform">
          <h1 className="new-heading">Grub Experience</h1>
          <form onSubmit={self.handleSubmit} action="/dist/" method="POST" encType="multipart/form-data">
            <div className="form-group">
              <label  className="labels"htmlFor="rest-name">Restaurant Name</label>
              <input onChange={self.setRestaurantName} value={self.state.name} type="text" className="form-control" id="rest-name" placeholder="Where'd you grub?" />
            </div>
            <div className="col-xs-4">
              <label className="labels">Average Cost</label>
              <select onChange={self.setRestaurantCost} value={self.state.cost}  className="form-control form-control-lg">
                <option></option>
                <option>$</option>
                <option>$$</option>
                <option>$$$</option>
                <option>$$$$</option>
              </select>
            </div>
            <div className="col-xs-4">
              <label className="labels">Quality of Service</label>
              <select onChange={self.setRestaurantQuality} value={self.state.quality}  className="form-control form-control-lg">
                <option></option>
                <option>Poor</option>
                <option>Below Average</option>
                <option>Average</option>
                <option>Above Average</option>
                <option>Excellent</option>
              </select>
            </div>
            <div className="col-xs-4">
              <label className="labels">Attend again</label>
              <select onChange={self.setRestaurantAttend} value={self.state.attend}  className="form-control form-control-lg">
                <option></option>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="row">
            <div id="addItem" className="col-xs-10 ">
              <label className="labels" htmlFor="menuitem">What did you eat</label>
              <p id="itemDescription" className="form-text text-muted">
                Enter what you ate below and if you want to add more than one simply press the add button to add a new field
              </p>

              {lineFormset}

            </div>
            <a onClick={self.props.addLine} id="addButton" className="btn btn-danger add-btn"  role="button">+</a>
            </div>
            <div className="form-group">
              <label className="labels" htmlFor="additionalinfo">Additional information about your experience</label>
              <textarea onChange={self.setRestaurantAdditional} value={self.state.additional}  className="form-control" id="additionalinfo" rows="5"></textarea>
            </div>
            <div>
              <label className="labels" htmlFor="inputFile">Include a pictures!</label>
               <input type="file" className="form-control-file" id="inputFile" aria-describedby="fileHelp" />
               <small id="fileHelp itemDescription" className="form-text text-muted">This is where you can include a picture of the restaurant or menu if you choose</small>
            </div>
            <button type="submit" className="btn btn-info btn-lg btn-block">Add Restaurant</button>
          </form>
        </div>
      )
    }
});


var NewRestaurantContainer = React.createClass({
  getInitialState: function(){
    return{
      restaurant: new collection()
    };
  },

  componentWillMount: function(){
      var self = this;
      var collection = this.state.restaurant;
      collection.fetch().then(function(){
        self.setState({collection: collection});
      });
  },

  handleSubmit: function(newRestaurant){
    this.state.restaurant.save(newRestaurant);
    Backbone.history.navigate('landing/', {trigger: true});
  },

  addLine: function(){
    var restaurant = this.state.restaurant;
    var currentCounter = this.state.counter;
    var food = restaurant.get('food');
    food.add([{}]);
    restaurant.set("food", food);
    this.setState({restaurant: restaurant});
  },
  render: function(){
    console.log('restaurant', this.state.restaurant);
    // console.log('restaurant2', this.state.restaurant.attributes.results);
    return(
      <AddNewTemplate>
        <RestaurantForm restaurant={this.state.restaurant} addLine={this.addLine} handleSubmit={this.handleSubmit}/>
      </AddNewTemplate>
    )
  }
});

module.exports = {
  NewRestaurantContainer: NewRestaurantContainer
}
//
