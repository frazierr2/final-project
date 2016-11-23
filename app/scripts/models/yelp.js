var Backbone = require('backbone');
var $ = require('jquery');


var SearchData = Backbone.Model.extend({
  url: 'https://tiy-yelp-server.herokuapp.com/search?term=restaurants&location=Greenville'
});

var SearchCollection = Backbone.Collection.extend({
  model: SearchData,
  url: 'https://tiy-yelp-server.herokuapp.com/search'
});

module.exports = {
  SearchData: SearchData,
  SearchCollection: SearchCollection
}
