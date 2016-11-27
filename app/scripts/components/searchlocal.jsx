var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');


var SearchTemplate = require('../templates/searchlocal.jsx').SearchTemplate;
var SearchCollection = require('../models/yelp.js').SearchCollection;


var SearchListItem = React.createClass({
  render: function(){
    var business = this.props.business;
    // console.log(business);
    return(
      <div className="well col-md-8 col-md-offset-2 yelpframe">
        <div className="col-md-10 col-md-offset-1 well yelpgroup">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 well yelpname yelpdata">
              {business.name}
            </div>
            <div className="row">
              <div className="well col-md-6 yelpdata">{business.location.display_address}</div>
              <div className="well col-md-6 yelpdata">{business.display_phone}</div>
            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 well yelpdata"><a  href={business.url}>Website</a>
              <div>
                <span className="yelp-power">powered by</span>
                <img className="yelp-logo-2" src="images/yelp-logo.png" alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

var SearchList = React.createClass({
  render: function(){
    var yelpList = this.props.collection.map(function(restaurants){

      var businesses = restaurants.get('businesses');

      return businesses.map(function(business){
        // console.log(business);
        return <SearchListItem key={business.id} business={business} />
      });


    });
    return(
      <div>
        {yelpList}
      </div>
    )
  }
});


var SearchContainer = React.createClass({
  getInitialState: function(){
    return{
      collection: new SearchCollection()
    }
  },

  componentWillMount: function(){
    this.getRestaurants(this.props.location);
  },

  componentWillReceiveProps: function(newProps){
    this.getRestaurants(newProps.location);
  },

  getRestaurants: function(location){
    var collection = this.state.collection;
    collection.fetch({
      data: {
        term: 'restaurants',
        'location': location
      }
    }).then(() => {
      this.setState({collection: collection})
    });
  },

  render: function(){
    // console.warn(this.state.collection);
    return(
      <SearchTemplate>
        <SearchList collection={this.state.collection}/>
      </SearchTemplate>
    )
  }
});

module.exports = {
  SearchContainer: SearchContainer
}
