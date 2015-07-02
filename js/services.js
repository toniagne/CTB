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
      var str = itens[4].replace(/°/g, "/");   
      var str2 = itens[1].replace(/@/g, "?");   
                             var detalheContato = [
                                {
                                    "id": itens[0], 
                                    "strNome": str2, 
                                    "categoria": itens[2],
                                    "conteudo": itens[3],
                                    "imagem": str
                                  },
                             ];         
                        return detalheContato[0];    

    }
  };
});


