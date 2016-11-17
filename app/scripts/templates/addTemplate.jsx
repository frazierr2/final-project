var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var AddNewTemplate = React.createClass({
  render: function(){
    return(
      <div className="container-fluid ">
        <div className="row add-new">
            {this.props.children}
        </div>
      </div>

    )
  }
});

module.exports = {
  AddNewTemplate: AddNewTemplate
}
