var Backbone = require('backbone');
var React = require('react');

var Testing = React.createClass({
  render: function(){
    return (
      console.log('testing')
    )
  }
});

module.exports = {
  Testing: Testing
}
