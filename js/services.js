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
      var str3 = itens[3].replace('....', '\r\n');   

      var converttxt1 = str3.replace(/atilde/g, 'ã'); 
      var converttxt2 = converttxt1.replace(/ccedil/g, 'ç'); 
      var converttxt3 = converttxt2.replace(/aacute/g, 'á'); 
      var converttxt4 = converttxt3.replace(/eacute/g, 'é');
      var converttxt5 = converttxt4.replace(/iacute/g, 'í');
      var converttxt6 = converttxt5.replace(/oacute/g, 'ó');
      var converttxt7 = converttxt6.replace(/uacute/g, 'ú');
      var converttxt8 = converttxt7.replace(/otilde/g, 'õ');
      var converttxt9 = converttxt8.replace(/nbsp/g, ' ');
      var converttxt10 = converttxt9.replace(/strong/g, ' ');
      var converttxt11 = converttxt10.replace(/ppem/g, ' ');
      var converttxt12 = converttxt11.replace(/ordm/g, '°');
      var converttxt13 = converttxt12.replace(/ordf/g, '°');
      var converttxt14 = converttxt13.replace(/pp/g, '');
      var converttxt15 = converttxt14.replace(/ldquo/g, '"');
      var converttxt16 = converttxt15.replace(/sbquo/g, '');
      var converttxt17 = converttxt16.replace(/rdquo/g, '"');
      var converttxt18 = converttxt17.replace(/ecirc/g, 'ê');
      var converttxt19 = converttxt18.replace(/sdot/g, '.');      
      var converttxt20 = converttxt19.substring(1);
      

                             var detalheContato = [
                                {
                                    "id": itens[0], 
                                    "strNome": str2, 
                                    "categoria": itens[2],
                                    "conteudo": converttxt20,
                                    "imagem": str
                                  },
                             ];         
                        return detalheContato[0];    

    }
  };
});


