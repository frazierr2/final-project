var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var DetailTemplate = React.createClass({
  render: function(){
    return(
      <div class="container-fluid restDetail">
        <div class="row">
          {this.props.children}
          // <div class="col-md-10 col-md-offset-1 well detail">
          //   <h1></h1>
          //   <h3 class="well detailItem">Restaurant name:</h3>
          //   <h3 class="well">How was it priced&#63;</h3>
          //   <h3 class="well">How was the service&#63;</h3>
          //   <h3 class="well">Are we attending again&#63;</h3>
          //   <h3 class="well">I ate:</h3>
          //   <h3 class="well">Additional info:</h3>
          // </div>

        </div>
      </div>


    )
  }
});

module.exports = {
  DetailTemplate: DetailTemplate
}
