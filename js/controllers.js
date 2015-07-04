angular.module('starter.controllers', ['ionic'])



.controller('DashCtrl', function($scope, $http, $location, $ionicLoading, $ionicPopup) {
         
          $scope.mudanoticia = function(id){           
             
            $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });

        $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticiasselecionada/'+id)
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                   return $scope.noticias2  = res.data;              
                });   
          }


	        $scope.converte = function(variavel) {
            var str_1 = variavel.split("http://");
            if (!str_1[1]) { var str_2 = "";  } else { var str_2 = str_1[1].split('"');}
             
            return str_2[0];
          }

          $scope.ajeitaSmall = function(variavel) {
           if (variavel == "sim") {return "mosaicogrande";} else { return "mosaico"; }             
          }
           $scope.ajeitaWidth = function(variavel) {
             if (variavel == "sim") {return "100%";}else { return "225"; }             
          }
           $scope.ajeitaHeight = function(variavel) {
             if (variavel == "sim") {return "50%";}else { return "155"; }             
          }
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticias')
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                  $scope.noticias  = res.data;              
                });  
 
         
        $scope.go = function(path){
         console.log(path);
          $location.url('#/tab'+path);
        }

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})
.controller('Principal2', function($scope, $stateParams, Chats, $ionicLoading, $http) {
})

.controller('Secretarias', function($scope, $stateParams, Chats, $ionicLoading, $http) {
   $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
 
  
    
   $http.get('http://www.ctb.org.br/mobile/backend/ctb/secretarias/')
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                  $scope.secretarias  = res.data;              
                });  
})

.controller('Secretariasver', function($scope, $http, $stateParams, $location, $ionicLoading, $ionicPopup) {
         
               
             
            $ionicLoading.show({
              content: 'Loading',
              animation: 'fade-in',
              showBackdrop: true,
              maxWidth: 200,
              showDelay: 0
            });

        $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticiasselecionada/'+$stateParams.idSecretaria)
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                   return $scope.noticias2  = res.data;              
                });   
       

})

.controller('Principal', function($scope, $stateParams, Chats, $ionicLoading, $http) {
    $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
    var dados = $stateParams.idDocumento;
    var itens = dados.split("*"); 
    $scope.linkitem = itens[1];
    
   $http.get('http://www.ctb.org.br/mobile/backend/ctb/carregadocumentos/'+itens[0])
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                  $scope.documentos  = res.data;              
                });  
})

.controller('ListaNoticias', function($scope, $stateParams, Chats, $http, $ionicPopup, $ionicLoading) {
    $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
    
   $http.get('http://www.ctb.org.br/mobile/backend/ctb/noticiasselecionada/'+$stateParams.idNoticia)
               .success(function(data) {
                      $ionicLoading.hide();
                })
               .error(function(data) {
                      $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
                })
               .then(        
                function(res){ 
                  $scope.noticias2  = res.data;              
                });  
 
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.idNoticia);


})

.controller('Actb', function($scope, $stateParams, Chats) {
 


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
