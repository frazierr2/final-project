var Backbone = require('backbone');

var Restaurant = Backbone.Model.extend({
 idAttribute: 'objectId',
 urlRoot: 'https://thefraz.herokuapp.com/classes/Restaurant',


});

var RestaurantCollection = Backbone.Collection.extend({
  model: Restaurant,
  url: 'https://thefraz.herokuapp.com/classes/Restaurant',

  parse: function(data){
      // console.log('results', data.results);
    return data.results;
  }
});

module.exports = {
  Restaurant: Restaurant,
  RestaurantCollection: RestaurantCollection
};
