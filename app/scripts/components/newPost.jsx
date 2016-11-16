var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var AddNewTemplate = require('../templates/addTemplate.jsx').AddNewTemplate;

var NewRestaurant = React.createClass({
  render: function(){
    return(
      <AddNewTemplate>

      </AddNewTemplate>
    );
  }
});

module.exports = {
  NewRestaurant: NewRestaurant
}
