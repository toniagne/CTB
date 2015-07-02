angular.module('starter.services', [])

 
.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
   var chats = $http.get('noticiasnacionais.json')                  

                  .then(        
                      function(res){   
                        var retorno = [];
                        retorno [{data: res.data}];  
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
      var itens = chatId.split("*"); 
                             var detalheContato = [
                                {
                                    "id": itens[0], 
                                    "strNome": itens[1], 
                                    "categoria": itens[2],
                                    "conteudo": itens[3]
                                  },
                             ];         
                        return detalheContato[0];    

    }
  };
});


