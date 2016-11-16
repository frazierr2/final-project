var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');

var AddNewTemplate = React.createClass({
  render: function(){
    return(
      <div className="container-fluid ">
        <div className="row add-new">
          <div className="well col-md-8 col-md-offset-2 addform">
            <h1 className="new-heading">Grub Experience</h1>
            <form>
              <div className="form-group">
                <label  className="labels"htmlFor="rest-name">Restaurant Name</label>
                <input type="text" className="form-control" id="rest-name" placeholder="Where'd you grub?" />
              </div>
              <div className="col-xs-4">
                <label className="labels">Average Cost</label>
                <select className="form-control form-control-lg">
                  <option></option>
                  <option>$</option>
                  <option>$$</option>
                  <option>$$$</option>
                  <option>$$$$</option>
                </select>
              </div>
              <div className="col-xs-4">
                <label className="labels">Quality of Service</label>
                <select className="form-control form-control-lg">
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
                <select className="form-control form-control-lg">
                  <option></option>
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <div className="row">
              <div className="col-xs-10">
                <label className="labels" htmlFor="menuitem">What did you eat</label>
                <p id="itemDescription" className="form-text text-muted">
                  Enter what you ate below and if you want to add more than one simply press the add button to add a new field
                </p>
                <input className="form-control form-control-lg " type="text" placeholder=""/>
              </div>
              <a className="btn btn-danger add-btn" href="#" role="button">+</a>
              </div>
              <div className="form-group">
                <label className="labels" htmlFor="additionalinfo">Additional information about your experience</label>
                <textarea className="form-control" id="additionalinfo" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-info btn-lg btn-block">Add Restaurant</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
});

module.exports = {
  AddNewTemplate: AddNewTemplate
}
