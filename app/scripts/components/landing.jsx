var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var LandingTemplate = require('../templates/landingTemplate.jsx').LandingTemplate;

var LandingContainer = React.createClass({
  render: function(){
    return(
      <LandingTemplate>

      </LandingTemplate>
    );
  }
});

module.exports = {
  LandingContainer: LandingContainer
}
