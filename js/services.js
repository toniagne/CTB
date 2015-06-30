angular.module('starter.services', [])



.factory('FeedService',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
})

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var chats = $http.get('noticiasnacionais.json')                  
                  .then(        
                      function(res){   
                       return res.data;  
                       }); 
                  

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      
      console.log(chats.$$state.value);
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});


