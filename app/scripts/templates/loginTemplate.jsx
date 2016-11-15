var React = require('react');


var LoginTemplate = React.createClass({
  render: function(){
    return (
      <div className="loginscreen">
        <div className="container-fluid ">
          <div className="row">

            {this.props.children}

          </div>
        </div>
        </div>
    )
  }

});

module.exports = {
  LoginTemplate: LoginTemplate
}
