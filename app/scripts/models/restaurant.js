var Backbone = require('backbone');
var $ = require('jquery');

var Restaurant = Backbone.Model.extend({
 idAttribute: 'objectId',
 urlRoot: 'https://thefraz.herokuapp.com/classes/Restaurant',

 deleteRecipe: function(restaurantId){
     $.ajax({
       url:'https://thefraz.herokuapp.com/classes/Restaurant/'+ restaurantId,
       type: 'DELETE',
       success: function(result){
         console.log(result);
       }
     });
   }
});

var RestaurantCollection = Backbone.Collection.extend({
  model: Restaurant,
  // url: 'https://thefraz.herokuapp.com/classes/Restaurant',
  url: function(){
    var querystring = '?where={"user": {"__type": "Pointer", "className": "_User", "objectId": "'+ this.objectId +'"}}'
    return 'https://thefraz.herokuapp.com/classes/Restaurant' + querystring;
  },

  parse: function(data){
      // console.log('results', data.results);
    return data.results;
  }
});

module.exports = {
  Restaurant: Restaurant,
  RestaurantCollection: RestaurantCollection
};
