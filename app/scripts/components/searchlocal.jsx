var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');


var SearchTemplate = require('../templates/searchlocal.jsx').SearchTemplate;
var SearchCollection = require('../models/yelp.js').SearchCollection;




var SearchContainer = React.createClass({
  getInitialState: function(){
    return{
      collection: new SearchCollection()
    }
  },

  componentWillMount: function(){
    var collection = this.state.collection;
    collection.fetch().then(() => {
      this.setState({collection: collection})
    });
  },

  render: function(){
    console.log(this.state.collection);
    return(
      <SearchTemplate>

      </SearchTemplate>
    )
  }
});

module.exports = {
  SearchContainer: SearchContainer
}
