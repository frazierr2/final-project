var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');


var AddNewTemplate = require('../templates/addTemplate.jsx').AddNewTemplate;
var models = require('../models/restaurant.js');
var FileModel = require('../models/file.js').File;



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
    var picture = $('#inputFile')[0].files[0];
    var file = new FileModel();
    file.set('fileName', picture.fileName);
    file.set('data', picture);
    file.save().done(function(){
      console.log(file);
    });

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

             <input id="foodItem" onChange={self.setRestaurantFood}  value={self.state.food} className="form-control form-control-lg " type="text" placeholder=""/>

            </div>
            <a  id="addButton" className="btn btn-danger add-btn"  role="button">+</a>
            </div>
            <div className="form-group">
              <label className="labels" htmlFor="additionalinfo">Additional information about your experience</label>
              <textarea onChange={self.setRestaurantAdditional} value={self.state.additional}  className="form-control" id="additionalinfo" rows="5"></textarea>
            </div>
            <div>
              <label className="labels" htmlFor="inputFile">Include a pictures!</label><br/>
              <small id="fileHelp" className="form-text text-muted help-text">PLEASE TAKE AND INCLUDE A PICTURE OF THE RESTAURANT OR MENU</small><br/>
              <input type="text" className="col-xs-4" id="fileName" name="fileName" placeholder="File Name"/>
               <input type="file" className="col-xs-4 form-control-file" id="inputFile" aria-describedby="fileHelp" />
            </div>
            <button type="submit" className="btn btn-info btn-lg btn-block form-button">Add Restaurant</button>
          </form>
        </div>
      )
    }
});


var NewRestaurantContainer = React.createClass({
  getInitialState: function(){
    return{
      restaurant: new models.Restaurant()
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


  render: function(){
    // console.log('restaurant', this.state.restaurant);
    // console.log('restaurant2', this.state.restaurant.attributes.results);
    return(
      <AddNewTemplate>
        <RestaurantForm handleSubmit={this.handleSubmit}/>
      </AddNewTemplate>
    )
  }
});

module.exports = {
  NewRestaurantContainer: NewRestaurantContainer
}
//
