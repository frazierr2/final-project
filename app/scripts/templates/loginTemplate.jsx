var React = require('react');


var LoginTemplate = React.createClass({
  render: function(){
    return (
      <div className="loginscreen">
        <div className="container-fluid ">


            {this.props.children}

      
        </div>
        </div>
    )
  }

});

module.exports = {
  LoginTemplate: LoginTemplate
}
