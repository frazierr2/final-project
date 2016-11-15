//GLOBAL IMPORTS
var React = require('react');
var Backbone = require('backbone');
var $ = require('jquery');
var Modal = require('react-modal');


//LOCAL IMPORTS
var LoginTemplate = require('../templates/loginTemplate.jsx').LoginTemplate;


var Login = React.createClass({
  getInitialState: function() {
    var username = '';
    var password = '';
    return {
      username: username,
      password: password,
      modalIsOpen: false
    };
  },

  handleUsernameChange: function(e){
    var userName = e.target.value;
    this.setState({username: userName});
  },

  handlePasswordChange: function(e){
    var userPassword = e.target.value;
    this.setState({password: userPassword});
  },


  login: function(e){
    e.preventDefault();

    var userInfo = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(userInfo);
  },

  signUp: function(e){
    e.preventDefault();

    var userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.signUp(userData);

    Backbone.history.navigate('', {trigger: true});
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },
  render: function(){

    return (
      <div>
      <div className="login-form">
        <div className="col-md-6 col-md-offset-3  formbox">
          <h1 className="login-title text-center">Please Sign In</h1>
          <form onSubmit={this.login}>
            <div className="form-group">
              <label className="label" htmlFor="username">USERNAME</label>
              <input onChange={this.handleUsernameChange} type="text" className="form-control" id="username" placeholder="Enter Your Username" />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="loginPassword">PASSWORD</label>
              <input onChange={this.handlePasswordChange} type="password" className="form-control" id="loginPassword" placeholder="Enter Your Password"/>
            </div>
            <div className="login-button">
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
      <div className=" create-account col-md-6 col-md-offset-3">
      <button onClick={this.openModal} type="button" className="btn btn-secondary">Don't have an Account&#63; Click here to create one&#33;</button>
      </div>
      {/*MODAL FOR CREATING NEW ACCOUNT*/}
      <Modal className="account-modal"isOpen={this.state.modalIsOpen}>
        <div>
          <div className=" well formbox account-form">
            <h1 className="login-title text-center">Create Acount</h1>
            <form onSubmit={this.signUp}>
              <div className="form-group">
                <label className="label" htmlFor="username">USERNAME</label>
                <input onChange={this.handleUsernameChange} type="text" className="form-control" id="username" placeholder="Enter A New Username" />
              </div>
              <div className="form-group">
                <label className="label" htmlFor="loginPassword">PASSWORD</label>
                <input onChange={this.handlePasswordChange} type="password" className="form-control" id="loginPassword" placeholder="Enter A New Password"/>
              </div>
              <div className="login-button">
                <button type="submit" className="btn btn-primary">Create Account</button>
              </div>
              <div>
                <button onClick={this.closeModal} type="button" className="btn btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      </div>
    );
  }
});


var LoginContainer = React.createClass({
  componentWillMount: function(){
    this.ajaxSetup();
  },

  ajaxSetup: function(token){
    $.ajaxSetup({
        beforeSend: function(xhr){
          xhr.setRequestHeader('X-Parse-Application-Id', 'ryansparseserver');
          xhr.setRequestHeader('X-Parse-REST-API-Key', 'ryansapikey');
        if(token){
          xhr.setRequestHeader('X-Parse-Session-Token', token);
        }
        }
    });
  },

  handleSubmit: function(userInfo){
    var username = userInfo.username;
    var password = userInfo.password;

    var self = this;
    var url = 'https://thefraz.herokuapp.com/';

    $.ajax(url + 'login?username=' + username + '&password=' + password).then(function(response){
      localStorage.setItem('username', response.username);
      localStorage.setItem('token', response.sessionToken);
      if (response.sessionToken) {
        self.props.router.navigate('landing/', {trigger: true});
      };
    });
  },

  handleSignUp: function(userData){
    $.post('https://thefraz.herokuapp.com/users', userData).then(function(response){
      console.log(response);
    })
  },


  render: function(){
    return (
      <LoginTemplate>
        <Login login={this.handleSubmit} signUp={this.handleSignUp} />
      </LoginTemplate>
    );
  }
});

module.exports = {
  Login: Login,
  LoginContainer: LoginContainer
}
